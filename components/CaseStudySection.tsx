
import React from 'react';

interface CaseStudyProps {
  title: string;
  subtitle: string;
  problem: string;
  diagnosis: string;
  action: string;
  result: string;
  visualType: 'funnel' | 'bar' | 'comparison';
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ 
  title, subtitle, problem, diagnosis, action, result, visualType 
}) => {
  return (
    <div className="neo-brutalism-border bg-white p-8 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h3 className="text-3xl font-black uppercase leading-tight">DEEP DIVE: {title}</h3>
          <p className="text-xl font-bold uppercase text-[#A3C9C7]">{subtitle}</p>
        </div>

        <div className="space-y-4">
          <div className="neo-brutalism-border p-4 bg-[#B8C5D6] rounded-xl">
            <h4 className="font-black uppercase text-black mb-1">The Problem</h4>
            <p className="font-mono text-sm leading-relaxed">{problem}</p>
          </div>
          <div className="neo-brutalism-border p-4 bg-[#B8C5D6] rounded-xl">
            <h4 className="font-black uppercase text-black mb-1">The Diagnosis</h4>
            <p className="font-mono text-sm leading-relaxed">{diagnosis}</p>
          </div>
          <div className="neo-brutalism-border p-4 bg-[#B8C5D6] rounded-xl">
            <h4 className="font-black uppercase text-black mb-1">The Action</h4>
            <p className="font-mono text-sm leading-relaxed">{action}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 neo-brutalism-border bg-[#F7FAF9] p-6 flex flex-col justify-center items-center text-center">
        {visualType === 'funnel' && (
          <div className="w-full max-w-xs space-y-2">
            <div className="h-20 bg-[#B8C5D6] neo-brutalism-border flex items-center justify-center font-mono text-xs">Wide Entrance</div>
            <div className="h-16 bg-[#A3C9C7] neo-brutalism-border mx-8 flex items-center justify-center font-mono text-xs text-white">UX Friction</div>
            <div className="h-20 bg-white neo-brutalism-border mx-12 flex items-center justify-center font-mono text-xs">Optimized Flow</div>
          </div>
        )}
        
        {visualType === 'bar' && (
          <div className="w-full max-w-xs flex items-end justify-between h-40 gap-1 mb-6">
            <div className="w-4 bg-[#B8C5D6] neo-brutalism-border h-1/6"></div>
            <div className="w-4 bg-[#B8C5D6] neo-brutalism-border h-2/6"></div>
            <div className="w-4 bg-[#B8C5D6] neo-brutalism-border h-3/6"></div>
            <div className="w-4 bg-[#A3C9C7] neo-brutalism-border h-4/6"></div>
            <div className="w-4 bg-[#A3C9C7] neo-brutalism-border h-5/6"></div>
            <div className="w-4 bg-[#A3C9C7] neo-brutalism-border h-6/6"></div>
            <div className="w-4 bg-[#A3C9C7] neo-brutalism-border h-full"></div>
          </div>
        )}

        <div className="mt-8 neo-brutalism-border bg-white p-6 border-4 border-[#A3C9C7]">
          <h4 className="text-2xl font-black uppercase leading-tight">
            THE RESULT: {result}
          </h4>
        </div>
      </div>
    </div>
  );
};
