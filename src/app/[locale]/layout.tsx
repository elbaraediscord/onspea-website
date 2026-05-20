import type { Metadata } from 'next';
import { Montserrat, Noto_Naskh_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { default: 'ONSPEA — Organisation Patronale Algérienne', template: '%s | ONSPEA' },
  description: "L'ONSPEA représente et défend les intérêts des patrons et entrepreneurs algériens à l'échelle nationale.",
  metadataBase: new URL('https://onspea-centre.com'),
  openGraph: {
    siteName: 'ONSPEA',
    images: ['/og-image.jpg'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${montserrat.variable} ${notoArabic.variable}`}
    >
      <body className={`font-sans antialiased ${isRTL ? 'font-arabic' : ''}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="pt-[76px]">
            <main>{children}</main>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
