import blogPosts from '../data/blogPosts.json';
import { ROUTES } from '../config';

// Indexable pages only, on the canonical host (astro.config `site`).
// /services is left out while it holds placeholder content.
// lastmod is omitted until it can reflect real content updates.
const STATIC_PATHS = [
  ROUTES.HOME,
  ROUTES.WHAT_WE_OFFER,
  ROUTES.SUBJECTS,
  ROUTES.PRICING,
  ROUTES.FAQ,
  ROUTES.ABOUT,
  ROUTES.CONTACT,
  ROUTES.BLOG,
  ROUTES.TERMS_CONDITIONS,
];

export function GET({ site }) {
  const paths = [...STATIC_PATHS, ...blogPosts.map((post) => `${ROUTES.BLOG}/${post.slug}`)];

  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, site).href}</loc>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
