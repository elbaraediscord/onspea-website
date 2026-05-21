import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { FileText, Download, Mail, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';

export default async function PressPage() {
  const t = await getTranslations('nav');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('press')}
          subtitle="Espace dédié aux journalistes et professionnels des médias."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy">Contact Presse</h3>
            <Card className="p-8">
              <p className="text-slate mb-8">
                Pour toute demande d'interview, de reportage ou d'information complémentaire, notre service de presse est à votre disposition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gold/10 p-3 rounded-full mr-4 rtl:ml-4">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-light block">E-mail</span>
                    <span className="font-bold text-navy">presse@onspea-centre.com</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold/10 p-3 rounded-full mr-4 rtl:ml-4">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-light block">Téléphone</span>
                    <span className="font-bold text-navy">0661 247 676</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-navy p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4 text-gold">Kit Média</h4>
              <p className="text-bluetint mb-6">
                Téléchargez notre kit média comprenant le logo de l'ONSPEA en haute résolution, la charte graphique et une présentation institutionnelle.
              </p>
              <div className="bg-white/10 text-white px-4 py-2 rounded-lg font-bold text-sm inline-block">
                Bientôt disponible
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy">Derniers Communiqués</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex items-center justify-between group">
                  <div className="flex items-center">
                    <div className="bg-navy/5 p-3 rounded-lg mr-4 rtl:ml-4 group-hover:bg-gold/10 transition-colors">
                      <FileText className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">Communiqué de presse #{i}</h4>
                      <span className="text-xs text-slate-light">Publié le 15 Mai 2026</span>
                    </div>
                  </div>
                  <Link href="/actualites" className="text-gold hover:underline text-sm font-bold">
                    Lire
                  </Link>
                </Card>
              ))}
            </div>
            <Link href="/actualites" className="inline-block w-full">
              <Button variant="outline" className="w-full">
                Voir tous les communiqués
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
