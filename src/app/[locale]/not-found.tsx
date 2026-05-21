import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Icon & Number */}
          <div className="relative inline-block mb-8">
            <span className="text-[12rem] font-black text-navy/5 leading-none select-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate/10">
                <Search className="w-16 h-16 text-gold animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {isRTL ? 'الصفحة غير موجودة' : (locale === 'en' ? 'Page Not Found' : 'Page non trouvée')}
          </h1>
          
          <p className="text-slate text-xl mb-12 leading-relaxed max-w-xl mx-auto">
            {isRTL 
              ? 'عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يرجى التحقق من الرابط أو العودة إلى الصفحة الرئيسية.' 
              : (locale === 'en' 
                ? "Sorry, the page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage." 
                : "Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Veuillez vérifier l'URL ou retourner à l'accueil.")
            }
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg" className="min-w-[200px] shadow-lg shadow-navy/20">
                <Home className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'الرئيسية' : (locale === 'en' ? 'Home' : 'Accueil')}
              </Button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-navy font-bold hover:text-gold transition-colors px-6 py-3"
            >
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {isRTL ? 'العودة للخلف' : (locale === 'en' ? 'Go Back' : 'Retourner')}
            </button>
          </div>

          {/* Institutional Note */}
          <div className="mt-20 pt-8 border-t border-slate/10">
            <p className="text-slate-light text-sm italic">
              ONSPEA — Organisation Nationale Syndicale des Patrons et Entrepreneurs Algériens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
