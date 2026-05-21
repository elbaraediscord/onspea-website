import React from 'react';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Camera, Calendar } from 'lucide-react';
import mediaData from '@/data/media.json';
import { formatDate } from '@/lib/utils';

export default async function MediaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const mt = await getTranslations('missions');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('media')}
          subtitle={mt('mediaSub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mediaData.map((album: any) => (
            <Card key={album.id} className="p-0 overflow-hidden group cursor-pointer">
              <div className="relative h-64 bg-navy-light overflow-hidden">
                {/* <img src={`/images/media/${album.images[0]}`} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <Camera className="w-3 h-3 mr-2 rtl:ml-2" />
                  {album.images.length} {mt('mediaPhotos')}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-slate-light mb-3">
                  <Calendar className="w-3 h-3 mr-2 rtl:ml-2" />
                  {formatDate(album.date, locale)}
                </div>
                <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                  {locale === 'ar' ? album.titleAr : album.title}
                </h3>
                {album.description && (
                  <p className="text-sm text-slate mt-3 line-clamp-2">{album.description}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
