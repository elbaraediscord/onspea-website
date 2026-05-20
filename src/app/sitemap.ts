import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onspea-centre.com';
  const locales = ['', '/ar', '/en'];
  const routes = [
    '',
    '/a-propos',
    '/a-propos/histoire',
    '/a-propos/missions',
    '/a-propos/bureau-national',
    '/a-propos/statuts',
    '/services',
    '/actualites',
    '/evenements',
    '/adhesion',
    '/annuaire',
    '/documents',
    '/mediatheque',
    '/partenaires',
    '/presse',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
