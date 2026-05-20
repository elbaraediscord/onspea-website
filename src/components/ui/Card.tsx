import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gold hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 p-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
