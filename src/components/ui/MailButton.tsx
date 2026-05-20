import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface MailButtonProps {
  className?: string;
  showLabel?: boolean;
}

const MailButton = ({ className, showLabel = true }: MailButtonProps) => {
  const t = useTranslations('nav');

  return (
    <a
      href="https://webmail.onspea-centre.com"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center bg-gold text-white hover:bg-gold-dark transition-all duration-200 rounded-md px-4 py-2 text-sm font-medium',
        className
      )}
    >
      <Mail className={cn('w-4 h-4', showLabel && 'mr-2 rtl:ml-2')} />
      {showLabel && <span>{t('mailAccess')}</span>}
    </a>
  );
};

export default MailButton;
