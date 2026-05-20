import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Link } from '@/i18n/navigation';
import { History, Target, Users, FileText, ArrowRight } from 'lucide-react';

export default async function AboutPage() {
  const t = await getTranslations('about');

  const subPages = [
    {
      title: t('history'),
      href: '/a-propos/histoire',
      icon: History,
      desc: "Découvrez le parcours et les étapes clés de la création de l'ONSPEA."
    },
    {
      title: t('missions'),
      href: '/a-propos/missions',
      icon: Target,
      desc: "Nos objectifs, nos valeurs et notre engagement pour l'entreprise algérienne."
    },
    {
      title: t('bureau'),
      href: '/a-propos/bureau-national',
      icon: Users,
      desc: "Présentation des membres du Bureau Exécutif National."
    },
    {
      title: t('statuts'),
      href: '/a-propos/statuts',
      icon: FileText,
      desc: "Consultez les textes fondateurs et le règlement intérieur de l'organisation."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('sectionTitle')}
          subtitle={t('sectionSub')}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {subPages.map((page) => (
            <Link key={page.href} href={page.href}>
              <Card className="h-full flex flex-col group">
                <div className="bg-navy/5 p-4 rounded-xl w-fit mb-6 group-hover:bg-gold/10 transition-colors">
                  <page.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy">{page.title}</h3>
                <p className="text-slate mb-8 flex-grow">{page.desc}</p>
                <div className="flex items-center text-gold font-bold">
                  {t('readMore')}
                  <ArrowRight className="w-5 h-5 ml-2 rtl:mr-2 rtl:rotate-180" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
