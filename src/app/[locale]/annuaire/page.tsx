'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Search, Building2, MapPin, Filter } from 'lucide-react';
import annuaireData from '@/data/annuaire.json';

export default function DirectoryPage() {
  const t = useTranslations('directory');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedWilaya, setSelectedWilaya] = useState('all');

  const sectors = ['all', ...Array.from(new Set(annuaireData.map(c => c.sector)))];
  const wilayas = ['all', ...Array.from(new Set(annuaireData.map(c => c.wilaya)))];

  const filteredCompanies = annuaireData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || company.sector === selectedSector;
    const matchesWilaya = selectedWilaya === 'all' || company.wilaya === selectedWilaya;
    return matchesSearch && matchesSector && matchesWilaya;
  });

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        {/* Filters */}
        <Card className="mb-12 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 rtl:left-auto rtl:right-3" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-3 rtl:pr-10 rtl:pl-4 rounded-lg border border-gray-200 focus:border-gold outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 rtl:left-auto rtl:right-3" />
              <select
                className="w-full pl-10 pr-4 py-3 rtl:pr-10 rtl:pl-4 rounded-lg border border-gray-200 focus:border-gold outline-none bg-white appearance-none"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
              >
                <option value="all">{t('allSectors')}</option>
                {sectors.filter(s => s !== 'all').map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 rtl:left-auto rtl:right-3" />
              <select
                className="w-full pl-10 pr-4 py-3 rtl:pr-10 rtl:pl-4 rounded-lg border border-gray-200 focus:border-gold outline-none bg-white appearance-none"
                value={selectedWilaya}
                onChange={(e) => setSelectedWilaya(e.target.value)}
              >
                <option value="all">{t('allWilayas')}</option>
                {wilayas.filter(w => w !== 'all').map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-slate">
            {filteredCompanies.length} {t('results')}
          </div>
        </Card>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company) => (
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
        
        {filteredCompanies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate text-lg">{t('noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
