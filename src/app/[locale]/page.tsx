import React from 'react';
import { getTranslations } from 'next-intl/server';
import HeroBanner from '@/components/home/HeroBanner';
import StatsBar from '@/components/home/StatsBar';
import MissionsSection from '@/components/home/MissionsSection';
import NewsPreview from '@/components/home/NewsPreview';
import EventPreview from '@/components/home/EventPreview';
import DirectoryPreview from '@/components/home/DirectoryPreview';
import AdhesionCTA from '@/components/home/AdhesionCTA';
import PartnersBar from '@/components/home/PartnersBar';
import MediaPreview from '@/components/home/MediaPreview';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';

export default async function HomePage() {
  const t = await getTranslations('about');

  return (
    <>
      <HeroBanner />
      <StatsBar />
      
      {/* Short About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionTitle
                title={t('sectionTitle')}
                subtitle={t('sectionSub')}
              />
              <p className="text-slate text-lg leading-relaxed mb-8">
                L'Organisation Nationale Syndicale du Patronat et des Entrepreneurs Algériens (ONSPEA) est une organisation patronale majeure en Algérie. Elle œuvre pour la défense des intérêts des entreprises et participe activement au dialogue économique national.
              </p>
              <p className="text-slate text-lg leading-relaxed mb-10">
                Présente dans les 48 wilayas du pays, l'ONSPEA fédère des entrepreneurs de tous secteurs d'activité pour construire ensemble l'économie de demain.
              </p>
              <Link href="/a-propos">
                <Button variant="outline">
                  {t('readMore')}
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/5 rounded-full -z-10" />
                <div className="bg-navy-light rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">ONSPEA Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionsSection />
      <NewsPreview />
      <EventPreview />
      <DirectoryPreview />
      <AdhesionCTA />
      <PartnersBar />
      <MediaPreview />
    </>
  );
}
