import React from 'react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getMDXBySlug, getMDXContent } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const events = await getMDXContent(locale, 'evenements');
  return events.map((event: any) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const event = (await getMDXBySlug(locale, 'evenements', slug)) as any;
  
  if (!event) notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
        <Link 
          href="/evenements" 
          className="inline-flex items-center text-navy hover:text-gold transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:rotate-180" />
          {locale === 'ar' ? 'العودة إلى الفعاليات' : (locale === 'en' ? 'Back to events' : 'Retour aux événements')}
        </Link>

        <div className="mb-12">
          <div className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">
            {event.category || 'Événement'}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-slate">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 rtl:ml-2 text-gold" />
              {formatDate(event.date, locale)}
            </div>
            {event.location && (
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 rtl:ml-2 text-gold" />
                {event.location}
              </div>
            )}
          </div>
        </div>

        {event.coverImage && (
          <div className="aspect-video bg-navy-light rounded-2xl mb-12 overflow-hidden">
            <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-lg prose-navy max-w-none text-slate leading-relaxed">
          {event.content}
        </div>
      </div>
    </div>
  );
}
