import React from 'react';
import partnersData from '@/data/partenaires.json';

const PartnersBar = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partnersData.map((partner) => (
            <div key={partner.id} className="h-12 flex items-center justify-center">
              {/* <img src={partner.logo} alt={partner.name} className="h-full w-auto max-w-[150px] object-contain" /> */}
              <span className="text-navy font-bold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
