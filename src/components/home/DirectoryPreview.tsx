import React from 'react';
import { useTranslations } from 'next-intl';
import { Search, Building2, MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';
import annuaireData from '@/data/annuaire.json';

const DirectoryPreview = () => {
  const t = useTranslations('directory');
  
  // Get 3 random companies
  const previewCompanies = annuaireData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <SectionTitle
            title={t('title')}
            subtitle={t('sub')}
            className="mb-0"
          />
          <Link href="/annuaire" className="w-full lg:w-auto">
            <Button variant="outline" className="w-full">
              {t('viewFull')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCompanies.map((company) => (
            <Card key={company.id} className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-offwhite rounded-lg flex items-center justify-center mr-4 rtl:ml-4">
                  <Building2 className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{company.name}</h3>
                  <span className="text-xs text-gold font-bold uppercase">{company.sector}</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-slate mb-6">
                <MapPin className="w-4 h-4 mr-2 rtl:ml-2 text-gold" />
                <span>{company.wilaya}</span>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-slate-light">{t('since')} {company.joinedDate.split('-')[0]}</span>
                <span className="px-2 py-1 bg-navy/5 text-navy text-[10px] font-bold rounded">{company.size}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectoryPreview;
