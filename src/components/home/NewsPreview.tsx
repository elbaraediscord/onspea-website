import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ArticleCard from '../actualites/ArticleCard';

const NewsPreview = () => {
  const t = useTranslations('news');

  const placeholderNews = [
    {
      slug: 'reunion-bureau-national-mai-2026',
      title: t('news1.title'),
      date: '2026-05-15',
      category: t('news1.category'),
      excerpt: t('news1.excerpt'),
      coverImage: '/images/actualites/onspea_meeting_1.webp'
    },
    {
      slug: 'forum-economique-oran-2026',
      title: t('news2.title'),
      date: '2026-04-20',
      category: t('news2.category'),
      excerpt: t('news2.excerpt'),
      coverImage: '/images/actualites/onspea_meeting_2.webp'
    },
    {
      slug: 'convention-partenariat-banque',
      title: t('news3.title'),
      date: '2026-03-10',
      category: t('news3.category'),
      excerpt: t('news3.excerpt'),
      coverImage: '/images/actualites/onspea_meeting_3.webp'
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
