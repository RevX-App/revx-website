import type { APIRoute } from 'astro';

// Only indexable pages; the legal placeholders are noindex until their real text ships.
const PATHS = ['/', '/how-it-works', '/mechanics', '/our-story', '/faq', '/contact'];

export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PATHS.map(
      (p) => `  <url><loc>${new URL(p, site)}</loc></url>`,
    ).join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
