
import React, { useState } from 'react';

interface Pillar {
  id: string;
  title: string;
  items: string[];
  context: string;
}

const pillars: Pillar[] = [
  {
    id: 'product',
    title: "Product Operations",
    items: [
      "Managing features from idea to launch",
      "Building roadmaps based on user data",
      "Coordinating engineering, design, & marketing"
    ],
    context: "Focusing on velocity and alignment across the build cycle."
  },
  {
    id: 'marketing',
    title: "Performance Marketing",
    items: [
      "Executing Meta Ads for lead gen",
      "Optimizing conversion funnels",
      "A/B testing landing pages/messaging"
    ],
    context: "Driving growth through data-backed acquisition strategies."
  },
  {
    id: 'data',
    title: "Data & Analytics",
    items: [
      "Diagnosing user behavior/churn",
      "Building real-time dashboards",
      "Turning qualitative feedback into quantitative insights"
    ],
    context: "Mining the 'why' behind user actions to inform 'what' to build next."
  }
];

const ApproachBox: React.FC<{ 
  pillar: Pillar; 
  isActive: boolean; 
  onClick: () => void 
}> = ({ pillar, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`neo-brutalism-border p-6 h-full text-left transition-all duration-200 flex flex-col ${
      isActive 
        ? 'bg-[#A3C9C7] text-white neo-brutalism-shadow-lg -translate-x-1 -translate-y-1' 
        : 'bg-white hover:bg-gray-50 hover:-translate-x-1 hover:-translate-y-1 neo-brutalism-shadow'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-black uppercase leading-tight">{pillar.title}</h3>
      {isActive && (
        <div className="bg-white text-[#A3C9C7] p-1 rounded-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      )}
    </div>
    <ul className={`space-y-2 font-mono text-sm flex-1 ${isActive ? 'text-white' : 'text-black'}`}>
      {pillar.items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className={`mr-2 mt-1.5 w-1.5 h-1.5 shrink-0 ${isActive ? 'bg-white' : 'bg-black'}`}></span>
          {item}
        </li>
      ))}
    </ul>
    {isActive && (
      <div className="mt-4 pt-4 border-t-2 border-white/30">
        <p className="text-xs font-black uppercase italic">{pillar.context}</p>
      </div>
    )}
  </button>
);

export const ApproachSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('product');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold uppercase">A Full-Stack Approach</h2>
          <p className="text-xl font-mono text-gray-600">Founder's Office Operations</p>
        </div>
        <p className="font-mono text-[10px] text-gray-400 uppercase tracking-tighter">
          Select a pillar to view focus details
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <ApproachBox 
            key={pillar.id}
            pillar={pillar}
            isActive={activeId === pillar.id}
            onClick={() => setActiveId(pillar.id)}
          />
        ))}
      </div>

      <div className="neo-brutalism-border bg-[#B8C5D6] p-4 transition-all duration-300">
        <p className="text-xl font-black uppercase text-center flex items-center justify-center gap-4">
          <span className="hidden md:block w-12 h-1 bg-black"></span>
          The Goal: Bridging the gap between product, marketing, and data
          <span className="hidden md:block w-12 h-1 bg-black"></span>
        </p>
      </div>
    </div>
  );
};
