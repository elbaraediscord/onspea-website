import React from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import bureauData from '@/data/bureau-national.json';
import { User } from 'lucide-react';
export default async function BureauPage() {
  const t = await getTranslations('about');
  const locale = await getLocale();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('bureau')}
          subtitle="Les membres qui dirigent et représentent l'ONSPEA au niveau national."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {bureauData.map((member) => (
            <Card key={member.id} className="text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-offwhite rounded-full flex items-center justify-center mb-6 overflow-hidden border-4 border-gold/20">
                <User className="w-16 h-16 text-navy/20" />
                {/* <img src={member.photo} alt={member.name} className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-gold font-bold text-sm uppercase tracking-wider">
                {locale === 'ar' ? member.roleAr : (locale === 'en' ? member.roleEn : member.role)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
