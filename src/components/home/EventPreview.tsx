import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Button from '../ui/Button';
import { formatDate } from '@/lib/utils';

const EventPreview = () => {
  const t = useTranslations('events');
  const locale = useLocale();

  // Placeholder event
  const upcomingEvent = {
    slug: 'forum-economique-alger-2026',
    title: 'Forum Économique National ONSPEA 2026 — Alger',
    date: '2026-06-20',
    location: 'Centre International de Conférences, Alger',
    description: "Le Forum Économique National annuel de l'ONSPEA rassemble patrons et entrepreneurs de toutes les wilayas pour deux journées de débats."
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block bg-gold text-white px-4 py-1 rounded-full text-xs font-bold mb-6">
              {t('upcoming')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
            <p className="text-bluetint mb-8 text-lg">{t('sub')}</p>
            <Link href="/evenements">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                {t('viewAll')}
              </Button>
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="bg-gold p-4 rounded-xl flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-3xl font-bold">20</span>
                  <span className="text-xs uppercase font-bold">Juin 2026</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gold">{upcomingEvent.title}</h3>
                  <div className="flex flex-col space-y-2 text-sm text-bluetint">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 rtl:ml-2 text-gold" />
                      <span>{formatDate(upcomingEvent.date, locale)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 rtl:ml-2 text-gold" />
                      <span>{upcomingEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                {upcomingEvent.description}
              </p>
              
              <Link href={`/evenements/${upcomingEvent.slug}`}>
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('program')}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
