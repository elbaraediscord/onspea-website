import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-offwhite py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-gold" />
          </div>
          
          <h1 className="text-8xl font-bold text-navy mb-4">404</h1>
          <h2 className="text-3xl font-bold text-navy mb-6">
            {/* We use hardcoded fallback if common.404Title is missing */}
            Page non trouvée
          </h2>
          
          <p className="text-slate text-lg mb-10 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Veuillez vérifier l'URL ou retourner à l'accueil.
          </p>
          
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5 mr-2 rtl:ml-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
