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
    // We ensure no double slashes by cleaning the parts
    const targetUrl = `/${newLocale}${base}/`.replace(/\/+/g, '/');
    
    window.location.href = targetUrl;
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
