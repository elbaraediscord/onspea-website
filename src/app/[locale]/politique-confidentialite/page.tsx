import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';

export default async function PrivacyPage() {
  const t = await getTranslations('footer');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
        <SectionTitle
          title={t('privacy')}
          centered
        />
        
        <div className="prose prose-navy max-w-none mt-12 text-slate">
          <h3 className="text-xl font-bold text-navy mb-4">1. Collecte des informations</h3>
          <p className="mb-6">
            Nous collectons des informations lorsque vous remplissez un formulaire sur notre site (contact, adhésion). Les informations collectées incluent votre nom, votre adresse e-mail, votre numéro de téléphone et les informations relatives à votre entreprise.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">2. Utilisation des informations</h3>
          <p className="mb-6">
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :<br />
            - Vous contacter par e-mail ou par téléphone<br />
            - Traiter votre demande d'adhésion<br />
            - Améliorer notre service aux membres
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">3. Confidentialité</h3>
          <p className="mb-6">
            Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quel raison, sans votre consentement.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">4. Consentement</h3>
          <p className="mb-6">
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}
