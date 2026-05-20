import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { CheckCircle2, Download, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function AdhesionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('membership');

  const benefits = [
    { title: t('benefit1'), desc: t('benefit1Desc') },
    { title: t('benefit2'), desc: t('benefit2Desc') },
    { title: t('benefit3'), desc: t('benefit3Desc') }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center text-center border-t-4 border-t-gold">
              <div className="bg-gold/10 p-4 rounded-full mb-6">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{benefit.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{benefit.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy">{t('whyJoin')}</h3>
            <p className="text-slate leading-relaxed">
              {t('whyJoinDesc')}
            </p>
            {/* <div className="bg-navy p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4 text-gold">Dossier d'adhésion</h4>
              <p className="text-bluetint mb-6">
                Vous pouvez télécharger le formulaire d'adhésion au format PDF, le remplir et nous le renvoyer par e-mail ou par courrier.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2 rtl:ml-2" />
                {t('downloadForm')}
              </Button>
            </div> */}
          </div>

          {/* <Card className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-8">{t('formTitle')}</h3>
            <form className="space-y-4">
              ...
            </form>
          </Card> */}
          <div className="flex items-center justify-center bg-offwhite rounded-2xl p-12 border-2 border-dashed border-gold/30">
            <p className="text-navy font-bold text-center">
              {locale === 'ar' 
                ? 'استمارة الانخراط عبر الإنترنت ستكون متاحة قريباً.' 
                : (locale === 'en' 
                  ? 'The online membership form will be available soon.' 
                  : 'Le formulaire d\'adhésion en ligne sera bientôt disponible.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
