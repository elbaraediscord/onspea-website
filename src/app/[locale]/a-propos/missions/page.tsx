import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Target, Shield, Users, Lightbulb } from 'lucide-react';

export default async function MissionsPage() {
  const t = await getTranslations('about');
  const mt = await getTranslations('missions');

  const values = [
    {
      icon: Target,
      title: mt('v1title'),
      desc: mt('v1desc')
    },
    {
      icon: Shield,
      title: mt('v2title'),
      desc: mt('v2desc')
    },
    {
      icon: Users,
      title: mt('v3title'),
      desc: mt('v3desc')
    },
    {
      icon: Lightbulb,
      title: mt('v4title'),
      desc: mt('v4desc')
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('missions')}
          subtitle={mt('sub')}
          centered
        />
        
        <div className="mt-12 space-y-12">
          <div className="bg-navy text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gold">{mt('missionPrincipalTitle')}</h3>
            <p className="text-lg leading-relaxed opacity-90">
              {mt('missionPrincipalDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col items-start p-8">
                <div className="bg-gold/10 p-4 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-navy">{value.title}</h4>
                <p className="text-slate leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
