'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // pathname from usePathname() is already "clean" (no locale prefix)
    // With localePrefix: 'always', we ALWAYS want /locale/path/
    const base = pathname === '/' ? '' : pathname;
    
    // Construct the URL: /locale/path/
    // With localePrefix: 'always', the URL is always /locale/path/
    // pathname from usePathname() is the path AFTER the locale prefix
    const cleanPath = base.startsWith('/') ? base : `/${base}`;
    const targetUrl = `/${newLocale}${cleanPath}`.replace(/\/+$/, '') + '/';
    const finalUrl = targetUrl.replace(/\/+/g, '/');
    
    window.location.href = window.location.origin + finalUrl;
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center space-x-1 rtl:space-x-reverse">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          className={cn(
            'px-3 py-1 text-xs font-bold rounded-full border transition-all duration-200',
            locale === lang.code
              ? 'bg-gold border-gold text-white'
              : 'bg-transparent border-navy text-navy hover:bg-navy hover:text-white'
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
