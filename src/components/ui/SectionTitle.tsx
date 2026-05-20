import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered, className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
        {title}
      </h2>
      {subtitle && <p className="text-slate mt-3 max-w-2xl mx-auto">{subtitle}</p>}
      <div
        className={cn(
          'w-16 h-1 bg-gold mt-4 rounded',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
};

export default SectionTitle;
