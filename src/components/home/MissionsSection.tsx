import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2, Scale, GraduationCap, Network } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const MissionsSection = () => {
  const t = useTranslations('missions');

  const missions = [
    {
      icon: Building2,
      title: t('m1title'),
      desc: t('m1desc'),
    },
    {
      icon: Scale,
      title: t('m2title'),
      desc: t('m2desc'),
    },
    {
      icon: GraduationCap,
      title: t('m3title'),
      desc: t('m3desc'),
    },
    {
      icon: Network,
      title: t('m4title'),
      desc: t('m4desc'),
    },
  ];

  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className="flex flex-col items-start border-t-4 border-t-gold">
              <div className="bg-navy p-3 rounded-lg mb-6">
                <mission.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">{mission.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {mission.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
