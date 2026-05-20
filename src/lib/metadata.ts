import { Metadata } from 'next';

export function generatePageMetadata(params: {
  title: string;
  description: string;
  locale: string;
  path: string;
}): Metadata {
  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: `https://onspea-centre.com${params.path}`,
      languages: {
        fr: `https://onspea-centre.com${params.path}`,
        ar: `https://onspea-centre.com/ar${params.path}`,
        en: `https://onspea-centre.com/en${params.path}`,
      },
    },
    openGraph: {
      title: params.title,
      description: params.description,
      locale: params.locale,
      type: 'website',
      siteName: 'ONSPEA',
    },
  };
}
