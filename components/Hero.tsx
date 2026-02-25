
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="neo-brutalism-border bg-white p-8 md:p-12 relative overflow-hidden">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none">
          KHARVANNAN RV
        </h1>
        <div className="space-y-1">
          <p className="text-xl md:text-3xl font-bold uppercase text-gray-800">Founder's Office Associate</p>
          <p className="text-xl md:text-3xl font-bold uppercase text-gray-800">Product Ops & Growth Strategy</p>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row border-t-3 border-black -mx-8 md:-mx-12">
        <div className="w-full md:w-1/3 p-8 border-b-3 md:border-b-0 md:border-r-3 border-black flex items-end">
          <div className="w-12 h-12 bg-[#A3C9C7] neo-brutalism-border"></div>
        </div>
        <div className="w-full md:w-2/3 p-8 bg-white">
          <p className="font-mono text-lg leading-relaxed">
            Building product features, running GTM experiments, and executing growth strategy.
          </p>
        </div>
      </div>
    </div>
  );
};
