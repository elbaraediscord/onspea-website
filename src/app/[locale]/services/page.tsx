import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Building2, Scale, GraduationCap, Network, BarChart3, Globe } from 'lucide-react';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const mt = await getTranslations('missions');

  const services = [
    {
      icon: Building2,
      title: mt('m1title'),
      desc: mt('m1desc'),
    },
    {
      icon: Scale,
      title: mt('m2title'),
      desc: mt('m2desc'),
    },
    {
      icon: GraduationCap,
      title: mt('m3title'),
      desc: mt('m3desc'),
    },
    {
      icon: Network,
      title: mt('m4title'),
      desc: mt('m4desc'),
    },
    {
      icon: BarChart3,
      title: mt('m5title'),
      desc: mt('m5desc'),
    },
    {
      icon: Globe,
      title: mt('m6title'),
      desc: mt('m6desc'),
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('services')}
          subtitle={mt('servicesSub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-start border-t-4 border-t-gold h-full">
              <div className="bg-navy p-3 rounded-lg mb-6">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy">{service.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {service.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
