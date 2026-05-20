'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import MailButton from '../ui/MailButton';
import Button from '../ui/Button';

const Navbar = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/a-propos', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/actualites', label: t('news') },
    { href: '/evenements', label: t('events') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => {
    const cleanPath = path === '/' ? '' : path;
    const cleanPathname = pathname === '/' ? '' : pathname;
    if (cleanPath === '' && cleanPathname === '') return true;
    if (cleanPath !== '' && cleanPathname.startsWith(cleanPath)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b-2 border-gold',
        scrolled ? 'shadow-md py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-navy">ONSPEA</div>
          {/* <img src="/logo.png" alt="ONSPEA" className="h-10 w-auto" /> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-gold',
                isActive(link.href) ? 'text-gold border-b-2 border-gold' : 'text-navy'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageSwitcher />
          <MailButton showLabel={false} />
          <Link href="/adhesion">
            <Button variant="primary" size="sm">
              {t('joinCTA')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col p-6 space-y-6 overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-bold transition-colors',
                  isActive(link.href) ? 'text-gold' : 'text-navy'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/adhesion"
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-bold transition-colors',
                isActive('/adhesion') ? 'text-gold' : 'text-navy'
              )}
            >
              {t('membership')}
            </Link>
          </nav>
          <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-navy">Langue</span>
              <LanguageSwitcher />
            </div>
            <MailButton className="w-full" />
            <Link href="/adhesion" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                {t('joinCTA')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
