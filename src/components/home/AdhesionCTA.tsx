import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from '@/i18n/navigation';

const AdhesionCTA = () => {
  const t = useTranslations('membership');

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
  ];

  return (
    <section className="py-20 bg-gold">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
            <p className="text-xl mb-8 opacity-90">{t('sub')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-3 rtl:ml-3 shrink-0 text-navy" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
            <Link href="/documents/formulaire-adhesion.pdf" target="_blank" className="w-full">
              <Button variant="white" className="w-full font-bold">
                {t('downloadForm')}
              </Button>
            </Link>
            <Link href="/adhesion" className="w-full">
              <Button variant="primary" className="w-full font-bold border-2 border-navy">
                {t('formTitle')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdhesionCTA;
