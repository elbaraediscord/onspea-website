import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';

export default async function LegalPage() {
  const t = await getTranslations('footer');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
        <SectionTitle
          title={t('legal')}
          centered
        />
        
        <div className="prose prose-navy max-w-none mt-12 text-slate">
          <h3 className="text-xl font-bold text-navy mb-4">1. Éditeur du site</h3>
          <p className="mb-6">
            Le présent site est édité par l'Organisation Nationale Syndicale du Patronat et des Entrepreneurs Algériens (ONSPEA).<br />
            Siège social : Alger, Algérie.<br />
            E-mail : contact@onspea-centre.com<br />
            Téléphone : 0661 247 676
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">2. Hébergement</h3>
          <p className="mb-6">
            Le site est hébergé par Cloudflare Pages.<br />
            Site web : https://pages.cloudflare.com
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">3. Propriété intellectuelle</h3>
          <p className="mb-6">
            L'ensemble de ce site relève de la législation algérienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">4. Protection des données personnelles</h3>
          <p className="mb-6">
            Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter par e-mail.
          </p>
        </div>
      </div>
    </div>
  );
}
