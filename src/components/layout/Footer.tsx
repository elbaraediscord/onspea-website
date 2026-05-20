import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import MailButton from '../ui/MailButton';

const Footer = () => {
  const t = useTranslations('footer');
  const nt = useTranslations('nav');

  return (
    <footer className="bg-[#001833] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="text-2xl font-bold mb-6">ONSPEA</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('tagline')}
            </p>
            <div className="mt-6">
              <MailButton />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">{t('quickLinks')}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-gold transition-colors">{nt('home')}</Link></li>
              <li><Link href="/a-propos" className="hover:text-gold transition-colors">{nt('about')}</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">{nt('services')}</Link></li>
              <li><Link href="/actualites" className="hover:text-gold transition-colors">{nt('news')}</Link></li>
              <li><Link href="/evenements" className="hover:text-gold transition-colors">{nt('events')}</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">{nt('contact')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Members */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">Espace Membres</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/adhesion" className="hover:text-gold transition-colors">{nt('membership')}</Link></li>
              <li><Link href="/annuaire" className="hover:text-gold transition-colors">{nt('directory')}</Link></li>
              <li><Link href="/documents" className="hover:text-gold transition-colors">{nt('documents')}</Link></li>
              <li><Link href="/mediatheque" className="hover:text-gold transition-colors">{nt('media')}</Link></li>
              <li><Link href="/partenaires" className="hover:text-gold transition-colors">{nt('partners')}</Link></li>
              <li><Link href="/presse" className="hover:text-gold transition-colors">{nt('press')}</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold">{t('contactInfo')}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 rtl:ml-3 text-gold shrink-0" />
                <span>{t('address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 rtl:ml-3 text-gold shrink-0" />
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 rtl:ml-3 text-gold shrink-0" />
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-gray-500">
            © ONSPEA 2026 · {t('rights')}
          </div>
          <div className="flex space-x-6 rtl:space-x-reverse text-xs text-gray-500">
            <Link href="/mentions-legales" className="hover:text-gold transition-colors">{t('legal')}</Link>
            <Link href="/politique-confidentialite" className="hover:text-gold transition-colors">{t('privacy')}</Link>
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="https://facebook.com/onspea.patronat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
