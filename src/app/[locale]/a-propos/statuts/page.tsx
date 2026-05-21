import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { FileText, Download, ShieldCheck } from 'lucide-react';

export default async function StatutsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const dt = await getTranslations('documents');
  const mt = await getTranslations('missions');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('statuts')}
          subtitle={mt('statutsSub')}
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white border border-slate/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-navy p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy">{mt('governanceTitle')}</h3>
            </div>
            
            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-lg text-slate leading-relaxed">
                {mt('governanceDesc')}
              </p>
              <ul className="mt-6 space-y-4 text-slate">
                {mt.rich('statutsPoints', {
                  li: (chunks) => (
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{chunks}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="bg-slate/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-navy/40" />
                <div>
                  <h4 className="font-bold text-navy">{mt('statutsDocTitle')}</h4>
                  <p className="text-sm text-slate">{mt('statutsDocSize')}</p>
                </div>
              </div>
              <div className="bg-gold/10 text-gold px-4 py-2 rounded-lg font-bold text-sm">
                {dt('availableSoon') || 'Bientôt disponible'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
