'use client';

import { useSyncExternalStore } from 'react';

let currentTime: number | null = null;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    currentTime = Date.now();
    timer = setInterval(() => {
      currentTime = Date.now();
      listeners.forEach(notify => notify());
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
      currentTime = null;
    }
  };
}

const getSnapshot = () => currentTime;
const getServerSnapshot = () => null;

export default function Clock({ mode }: { mode: 'date' | 'footer' }) {
  const timestamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = timestamp === null ? null : new Date(timestamp);
  const date = now ? new Intl.DateTimeFormat('en-US', {
    weekday: 'short', month: 'short', day: '2-digit', year: 'numeric',
  }).format(now) : '—';
  const time = now ? new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  }).format(now) : '—';

  if (mode === 'date') return <>{date}</>;
  return <><span className="item-sub footer-date">{date}</span><span className="item-sub footer-time">{time}</span></>;
}
