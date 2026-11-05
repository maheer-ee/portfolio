import type { MetadataRoute } from 'next';
import { site } from '../lib/site';
import { projectEntries, sections } from '../lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', ...sections.map(item => '/' + item.slug), ...projectEntries.map(item => '/projects/' + item.slug)]
    .map(path => ({ url: site.url + path }));
}
