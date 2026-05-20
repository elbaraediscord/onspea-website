import React from 'react';
import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import Button from '@/components/ui/Button';

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const ft = await getTranslations('footer');

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionTitle
          title={t('title')}
          subtitle={t('sub')}
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="flex flex-col items-center text-center">
                <div className="bg-gold/10 p-4 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-navy mb-2">{t('phone')}</h4>
                <p className="text-slate">{ft('phone')}</p>
              </Card>
              
              <Card className="flex flex-col items-center text-center">
                <div className="bg-gold/10 p-4 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-navy mb-2">{t('email')}</h4>
                <p className="text-slate">{ft('email')}</p>
              </Card>
            </div>
            
            <Card className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <div className="bg-gold/10 p-4 rounded-full mr-4 rtl:ml-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">{t('address')}</h4>
                  <p className="text-slate">{ft('address')}</p>
                </div>
              </div>
              
              <div className="w-full h-64 bg-offwhite rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-slate font-medium">Google Maps Placeholder (Alger)</span>
              </div>
            </Card>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <span className="font-bold text-navy">{t('social')} :</span>
              <a href="https://facebook.com/onspea.patronat" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-navy text-white p-3 rounded-full hover:bg-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Form Placeholder */}
          <div className="flex flex-col items-center justify-center bg-offwhite rounded-2xl p-12 border-2 border-dashed border-gold/30 text-center">
            <div className="bg-gold/10 p-4 rounded-full mb-6">
              <Mail className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">{t('formTitle')}</h3>
            <p className="text-slate max-w-md">
              Notre formulaire de contact en ligne est temporairement désactivé. Veuillez nous contacter directement par e-mail ou par téléphone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
