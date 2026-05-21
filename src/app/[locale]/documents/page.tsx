import React from 'react';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { FileText, Download } from 'lucide-react';
import documentsData from '@/data/documents.json';
import { Document } from '@/types';

export default async function DocumentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('documents');

  const categories = [
    'fondateurs',
    'adhesion',
    'rapports',
    'circulaires',
    'publications',
    'comptes-rendus'
  ];

  const getDocsByCategory = (category: string) => {
    return documentsData.filter(doc => doc.category === category);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="space-y-16 mt-12">
          {categories.map((category) => {
            const docs = getDocsByCategory(category);
            if (docs.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-2xl font-bold text-navy mb-8 flex items-center">
                  <div className="w-2 h-8 bg-gold mr-4 rtl:ml-4 rounded-full" />
                  {t(`categories.${category}`)}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {docs.map((doc) => (
                    <Card key={doc.id} className="flex items-center justify-between group">
                      <div className="flex items-center">
                        <div className="bg-navy/5 p-3 rounded-lg mr-4 rtl:ml-4 group-hover:bg-gold/10 transition-colors">
                          <FileText className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy text-sm">
                            {locale === 'ar' ? doc.titleAr : doc.title}
                          </h4>
                          <span className="text-xs text-slate-light">{doc.size} · {doc.date}</span>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded">
                        {t('availableSoon') || 'Soon'}
                      </div>
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
