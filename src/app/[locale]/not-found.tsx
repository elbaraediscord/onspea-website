import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Icon & Number */}
          <div className="relative inline-block mb-8">
            <span className="text-[12rem] font-black text-navy/5 leading-none select-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gold/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center shadow-lg">
                  <Search className="w-10 h-10 text-gold animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {t('notFound.title')}
          </h1>
          
          <p className="text-slate text-xl mb-12 leading-relaxed max-w-xl mx-auto">
            {t('notFound.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg" className="min-w-[200px] shadow-lg shadow-navy/20">
                <Home className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('notFound.home')}
              </Button>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center text-navy font-bold hover:text-gold transition-colors px-6 py-3"
            >
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('notFound.back')}
            </Link>
          </div>

          {/* Institutional Note */}
          <div className="mt-20 pt-12 border-t border-slate/10">
            <div className="flex flex-col items-center gap-4">
              <div className="text-2xl font-bold text-navy/20">ONSPEA</div>
              <p className="text-slate-light text-sm italic max-w-md mx-auto">
                {t('notFound.footerNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
