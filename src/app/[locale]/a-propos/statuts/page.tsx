import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { FileText, Download, ShieldCheck } from 'lucide-react';

export default async function StatutsPage() {
  const t = await getTranslations('about');
  const dt = await getTranslations('documents');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('statuts')}
          subtitle="Cadre légal et réglementaire de l'organisation"
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white border border-slate/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-navy p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Gouvernance & Transparence</h3>
            </div>
            
            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-lg text-slate leading-relaxed">
                L'ONSPEA est régie par des statuts rigoureux déposés conformément à la législation algérienne sur les organisations syndicales. Ces textes définissent notre mode de fonctionnement, les droits et devoirs des membres, ainsi que les procédures d'élection de nos instances dirigeantes.
              </p>
              <ul className="mt-6 space-y-4 text-slate">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Respect des principes démocratiques dans la prise de décision.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Transparence totale dans la gestion des ressources de l'organisation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>Engagement pour la promotion de l'économie nationale.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-navy/40" />
                <div>
                  <h4 className="font-bold text-navy">Statuts Officiels ONSPEA</h4>
                  <p className="text-sm text-slate">Document PDF — 1.2 Mo</p>
                </div>
              </div>
              <a href="/documents/statuts-onspea.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="whitespace-nowrap">
                  <Download className="w-4 h-4 mr-2" />
                  {dt('download')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
