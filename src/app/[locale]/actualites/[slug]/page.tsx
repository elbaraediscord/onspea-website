import React from 'react';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getMDXBySlug, getMDXContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export async function generateStaticParams() {
  const locales = ['fr', 'ar', 'en'];
  const params = [];
  
  for (const locale of locales) {
    const articles = await getMDXContent(locale, 'actualites');
    for (const article of articles) {
      params.push({ locale, slug: article.slug });
    }
  }
  
  return params;
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const article = (await getMDXBySlug(locale, 'actualites', slug)) as any;
  
  if (!article) notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
        <Link 
          href="/actualites" 
          className="inline-flex items-center text-navy hover:text-gold transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:rotate-180" />
          {locale === 'ar' ? 'العودة إلى الأخبار' : (locale === 'en' ? 'Back to news' : 'Retour aux actualités')}
        </Link>

        <div className="mb-12">
          <div className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center text-slate">
            <Calendar className="w-5 h-5 mr-2 rtl:ml-2 text-gold" />
            {formatDate(article.date, locale)}
          </div>
        </div>

        <div className="aspect-video bg-navy-light rounded-2xl mb-12 overflow-hidden">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-navy max-w-none text-slate leading-relaxed">
          {article.content}
        </div>
      </div>
    </div>
  );
}
