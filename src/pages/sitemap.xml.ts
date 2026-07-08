const pages = [
  { path: '/', priority: '1.0' },
  { path: '/es/', priority: '0.9' },
  { path: '/a-la-carte-menu/', priority: '0.8' },
  { path: '/es/a-la-carte-menu/', priority: '0.8' },
  { path: '/contact/', priority: '0.8' },
  { path: '/es/contact/', priority: '0.8' },
  { path: '/privacy-notice/', priority: '0.4' },
  { path: '/es/privacy-notice/', priority: '0.4' },
];

export function GET() {
  const site = 'https://www.marycielo.mx';
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority }) => `  <url>
    <loc>${site}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
