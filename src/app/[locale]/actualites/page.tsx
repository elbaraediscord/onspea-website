import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import ArticleCard from '@/components/actualites/ArticleCard';
import { getMDXContent } from '@/lib/mdx';

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('news');
  const mt = await getTranslations('missions');
  const articles = await getMDXContent(locale, 'actualites');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article: any) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        
        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate text-lg">{mt('noNews')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
