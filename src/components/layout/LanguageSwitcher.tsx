'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // In some environments, usePathname() might return the full path including locale.
    // We will manually strip any existing locale prefix (/fr, /ar, /en) to be safe.
    let currentPath = window.location.pathname;
    
    // Remove leading/trailing slashes for easier processing
    let cleanPath = currentPath.replace(/^\/|\/$/g, '');
    let pathSegments = cleanPath.split('/');
    
    // If the first segment is a known locale, remove it
    const locales = ['fr', 'ar', 'en'];
    if (locales.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Reconstruct the path without the locale
    const base = pathSegments.join('/');
    
    // Construct the new URL: /newLocale/base/
    const targetUrl = `/${newLocale}/${base}/`.replace(/\/+/g, '/');
    
    window.location.href = window.location.origin + targetUrl;
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
