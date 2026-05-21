import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import partnersData from '@/data/partenaires.json';

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const mt = await getTranslations('missions');

  const categories = [
    { id: 'institutionnel', label: mt('partnersCat1') },
    { id: 'economique', label: mt('partnersCat2') },
    { id: 'international', label: mt('partnersCat3') },
    { id: 'media', label: mt('partnersCat4') }
  ];

  const getPartnersByCategory = (category: string) => {
    return partnersData.filter(p => p.category === category);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('partners')}
          subtitle={mt('partnersSub')}
          centered
        />
        
        <div className="space-y-20 mt-12">
          {categories.map((cat) => {
            const partners = getPartnersByCategory(cat.id);
            if (partners.length === 0) return null;

            return (
              <div key={cat.id}>
                <h3 className="text-2xl font-bold text-navy mb-10 text-center">{cat.label}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {partners.map((partner) => (
                    <Card key={partner.id} className="flex flex-col items-center justify-center h-40 grayscale hover:grayscale-0 transition-all duration-500">
                      {/* <img src={partner.logo} alt={partner.name} className="max-h-20 w-auto object-contain mb-4" /> */}
                      <span className="text-navy font-bold text-center text-sm">{partner.name}</span>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
