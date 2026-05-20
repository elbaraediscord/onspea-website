import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Camera, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import mediaData from '@/data/media.json';
import { formatDate } from '@/lib/utils';

const MediaPreview = () => {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionTitle
            title={t('media')}
            subtitle="Découvrez les activités de l'ONSPEA en images"
            className="mb-0"
          />
          <Link href="/mediatheque" className="hidden md:block">
            <Button variant="outline" size="sm">
              Voir la médiathèque
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mediaData.map((album) => (
            <div key={album.id} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-navy-light" />
              {/* <img src={`/images/media/${album.images[0]}`} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center text-gold text-xs font-bold mb-2">
                  <Camera className="w-4 h-4 mr-2 rtl:ml-2" />
                  {album.images.length} Photos
                </div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {locale === 'ar' ? album.titleAr : album.title}
                </h3>
                <p className="text-bluetint text-xs">
                  {formatDate(album.date, locale)}
                </p>
              </div>
              
              <Link href="/mediatheque" className="absolute inset-0 z-10" />
            </div>
          ))}
        </div>

        <div className="md:hidden text-center">
          <Link href="/mediatheque">
            <Button variant="outline" className="w-full">
              Voir la médiathèque
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
