import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Calendar, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    coverImage: string;
  };
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const t = useTranslations('news');
  const locale = useLocale();

  return (
    <Card className="flex flex-col h-full p-0 overflow-hidden group">
      <div className="relative h-48 bg-navy-light overflow-hidden">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {t(`categories.${article.category}`)}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-light mb-3">
          <Calendar className="w-3 h-3 mr-2 rtl:ml-2" />
          {formatDate(article.date, locale)}
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-navy group-hover:text-gold transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-sm text-slate mb-6 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <Link 
          href={`/actualites/${article.slug}`}
          className="inline-flex items-center text-sm font-bold text-navy hover:text-gold transition-colors"
        >
          {t('readMore')}
          <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:rotate-180" />
        </Link>
      </div>
    </Card>
  );
};

export default ArticleCard;
