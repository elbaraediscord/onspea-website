import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { CheckCircle2, Download, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

export default async function AdhesionPage() {
  const t = await getTranslations('membership');

  const benefits = [
    { title: t('benefit1'), desc: "Une voix forte auprès des décideurs pour influencer les politiques économiques." },
    { title: t('benefit2'), desc: "Accès à des opportunités d'affaires et des partenariats stratégiques." },
    { title: t('benefit3'), desc: "Conseils d'experts pour sécuriser et optimiser votre activité." }
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
            <h3 className="text-2xl font-bold text-navy">Pourquoi nous rejoindre ?</h3>
            <p className="text-slate leading-relaxed">
              Rejoindre l'ONSPEA, c'est intégrer la première organisation syndicale patronale d'Algérie. Nous représentons les entrepreneurs de toutes tailles et de tous secteurs, des TPE aux grandes entreprises nationales.
            </p>
            <div className="bg-navy p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4 text-gold">Dossier d'adhésion</h4>
              <p className="text-bluetint mb-6">
                Vous pouvez télécharger le formulaire d'adhésion au format PDF, le remplir et nous le renvoyer par e-mail ou par courrier.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2 rtl:ml-2" />
                {t('downloadForm')}
              </Button>
            </div>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-8">{t('formTitle')}</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">{t('fields.companyName')}</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">{t('fields.sector')}</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none bg-white">
                    <option>Industrie</option>
                    <option>BTP</option>
                    <option>Services</option>
                    <option>Technologie</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">{t('fields.wilaya')}</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none bg-white">
                    <option>Alger</option>
                    <option>Oran</option>
                    <option>Constantine</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">{t('fields.contactName')}</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">{t('fields.phone')}</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">{t('fields.email')}</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">{t('fields.message')}</label>
                <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold outline-none resize-none"></textarea>
              </div>
              <Button variant="primary" className="w-full py-3 font-bold mt-4">
                <Send className="w-4 h-4 mr-2 rtl:ml-2" />
                {t('fields.submit')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
