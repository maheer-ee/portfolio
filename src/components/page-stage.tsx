'use client';

import { stagger, useAnimate, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, type ReactNode } from 'react';

function StageContent({ children, reveal }: { children: ReactNode; reveal: boolean }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!reveal || reduceMotion) return;

    const text = scope.current.querySelectorAll('.detail-view :is(h1, h2, p, .text-link)');
    if (!text.length) return;

    const animation = animate(text, {
      opacity: [0.3, 1],
      y: [5, 0],
      clipPath: ['inset(0 0 25% 0)', 'inset(0 0 0% 0)'],
    }, {
      delay: stagger(0.025),
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    });

    const clearStyles = () => {
      text.forEach(element => {
        if (!(element instanceof HTMLElement)) return;
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
        element.style.removeProperty('clip-path');
      });
    };
    void animation.then(clearStyles);

    return () => {
      animation.stop();
      clearStyles();
    };
  }, [animate, reduceMotion, reveal, scope]);

  return <div ref={scope} className="stage-content">{children}</div>;
}

export function PageStage({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main id="content" className="stage" tabIndex={-1}>
      <StageContent key={pathname} reveal={pathname !== '/'}>{children}</StageContent>
    </main>
  );
}
