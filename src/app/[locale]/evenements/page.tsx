import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getMDXContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('events');
  const mt = await getTranslations('missions');
  const events = await getMDXContent(locale, 'evenements');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {events.map((event: any) => (
            <Card key={event.slug} className="flex flex-col md:flex-row p-0 overflow-hidden group">
              <div className="md:w-1/3 bg-navy-light relative h-48 md:h-auto">
                <img 
                  src={event.coverImage} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {t(event.status)}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate">
                    <Calendar className="w-4 h-4 mr-2 rtl:ml-2 text-gold" />
                    {formatDate(event.date, locale)}
                  </div>
                  <div className="flex items-center text-sm text-slate">
                    <MapPin className="w-4 h-4 mr-2 rtl:ml-2 text-gold" />
                    {event.location}
                  </div>
                </div>
                <Link href={`/evenements/${event.slug}`} className="inline-flex items-center text-navy font-bold hover:text-gold transition-colors">
                  {t('viewAll')}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:rotate-180" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        {events.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate text-lg">{mt('noEvents')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
