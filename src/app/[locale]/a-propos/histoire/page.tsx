import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export default async function HistoirePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const navT = await getTranslations('nav');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('history')}
          subtitle={navT('about')}
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/placeholders/algiers-building.jpg"
              alt="ONSPEA History"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6 text-slate leading-relaxed">
            {t.rich('historyContent', {
              p: (chunks) => <p>{chunks}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
