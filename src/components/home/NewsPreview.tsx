import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ArticleCard from '../actualites/ArticleCard';

const NewsPreview = () => {
  const t = useTranslations('news');

  // Placeholder news data until MDX is set up
  const placeholderNews = [
    {
      slug: 'reunion-bureau-national-mai-2026',
      title: 'Réunion du Bureau Exécutif National — Alger, Mai 2026',
      date: '2026-05-15',
      category: 'communique',
      excerpt: "Le Bureau Exécutif National de l'ONSPEA s'est réuni le 15 mai 2026 au siège de l'organisation à Alger pour examiner les dossiers prioritaires du patronat algérien.",
      coverImage: '/images/actualites/reunion-mai-2026.jpg'
    },
    {
      slug: 'forum-economique-oran-2026',
      title: 'Forum Économique Régional — Oran',
      date: '2026-04-20',
      category: 'actualite-economique',
      excerpt: "Retour sur les moments forts du forum économique régional d'Oran qui a réuni plus de 200 entrepreneurs de l'Ouest algérien.",
      coverImage: '/images/actualites/forum-oran.jpg'
    },
    {
      slug: 'convention-partenariat-banque',
      title: "Signature d'une convention de partenariat avec la Banque d'Algérie",
      date: '2026-03-10',
      category: 'partenariats',
      excerpt: "L'ONSPEA renforce son accompagnement financier pour ses membres à travers une nouvelle convention stratégique.",
      coverImage: '/images/actualites/convention.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionTitle
            title={t('title')}
            subtitle={t('sub')}
            className="mb-0"
          />
          <Link href="/actualites" className="hidden md:block">
            <Button variant="outline" size="sm">
              {t('viewAll')}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {placeholderNews.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        
        <div className="md:hidden text-center">
          <Link href="/actualites">
            <Button variant="outline" className="w-full">
              {t('viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
