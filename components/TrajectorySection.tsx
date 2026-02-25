
import React from 'react';

const TrajectoryItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex gap-8 group">
    <div className="relative">
      <div className="w-8 h-8 rounded-full bg-[#A3C9C7] neo-brutalism-border z-10 relative"></div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-full bg-black/20 group-last:hidden"></div>
    </div>
    <div className="neo-brutalism-border bg-white p-6 flex-1 mb-8 hover:translate-x-2 transition-transform duration-200">
      <h3 className="text-xl font-black uppercase text-[#A3C9C7] mb-2">{title}</h3>
      <p className="font-mono text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const TrajectorySection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold uppercase text-[#A3C9C7]">Professional Trajectory</h2>
      <div className="max-w-4xl pt-4">
        <TrajectoryItem 
          title="FOUNDER’S OFFICE ASSOCIATE @ MONTAIGNE" 
          desc="Building product features, running experiments, and executing growth strategy." 
        />
        <TrajectoryItem 
          title="GGI YOUNG LEADERS PROGRAM" 
          desc="Highly selective program (10% acceptance rate). Focused on consulting cases and strategy." 
        />
        <TrajectoryItem 
          title="Founder's office INTERN @ NUTSHELL AGRI Pvt.Ltd" 
          desc="Early career focus on data-driven optimization." 
        />
      </div>
    </div>
  );
};
