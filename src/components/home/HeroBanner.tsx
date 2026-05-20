import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from '@/i18n/navigation';

const HeroBanner = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-navy">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-light opacity-90 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-gold/20 border border-gold text-gold px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in">
            {t('tag')}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('title')}
          </h1>
          
          <p className="text-xl text-bluetint mb-10 leading-relaxed max-w-2xl">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/a-propos">
              <Button variant="secondary" size="lg">
                {t('cta1')}
              </Button>
            </Link>
            <Link href="/adhesion">
              <Button variant="white" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-navy">
                {t('cta2')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 opacity-50" />
      </div>
    </section>
  );
};

export default HeroBanner;
