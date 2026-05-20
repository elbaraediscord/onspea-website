'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import * as LucideIcons from 'lucide-react';
import statsData from '@/data/stats.json';
import { Stat } from '@/types';

const StatsBar = () => {
  const locale = useLocale();
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      const newCounts = statsData.map((stat) => {
        const target = parseInt(stat.value.replace(/\D/g, ''));
        return Math.round(target * progress);
      });

      setCounts(newCounts);

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const getLabel = (stat: Stat) => {
    if (locale === 'ar') return stat.labelAr;
    if (locale === 'en') return stat.labelEn;
    return stat.label;
  };

  return (
    <div ref={sectionRef} className="bg-gold py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = (LucideIcons as any)[stat.icon] || LucideIcons.Activity;
            return (
              <div key={index} className="flex flex-col items-center text-center text-white border-r last:border-r-0 border-white/20 rtl:border-r-0 rtl:border-l rtl:last:border-l-0">
                <IconComponent className="w-8 h-8 mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {counts[index]}{stat.value.includes('+') ? '+' : ''}
                </div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-90">
                  {getLabel(stat)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
