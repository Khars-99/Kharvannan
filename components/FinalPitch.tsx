
import React, { useState } from 'react';

interface PitchCardProps {
  title: string;
  summary: string;
  detail: string;
  isOpen: boolean;
  onClick: () => void;
}

const PitchCard: React.FC<PitchCardProps> = ({ title, summary, detail, isOpen, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left transition-all duration-200 neo-brutalism-border p-6 flex flex-col gap-3 group ${
      isOpen 
        ? 'bg-[#A3C9C7] text-white neo-brutalism-shadow-lg -translate-x-1 -translate-y-1' 
        : 'bg-white hover:bg-gray-50 hover:-translate-x-1 hover:-translate-y-1 neo-brutalism-shadow'
    }`}
  >
    <div className="flex justify-between items-start w-full">
      <h3 className={`text-xl font-black uppercase leading-tight ${isOpen ? 'text-white' : 'text-[#A3C9C7]'}`}>
        {title}
      </h3>
      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </div>
    
    <p className={`font-mono text-sm font-bold ${isOpen ? 'text-white' : 'text-black'}`}>
      {summary}
    </p>

    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
      <div className={`pt-4 border-t-2 ${isOpen ? 'border-white/30' : 'border-black/10'}`}>
        <p className="font-mono text-xs leading-relaxed uppercase tracking-wider">
          <span className="opacity-70">Proof Point:</span> <br/>
          {detail}
        </p>
      </div>
    </div>
  </button>
);

export const FinalPitch: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const pitches = [
    {
      title: "FULL-STACK OPERATOR",
      summary: "Strategy + Execution. I don’t just plan, I ship.",
      detail: "From initial market research and strategy decks to prototyping features and managing go-to-market execution."
    },
    {
      title: "DATA-DRIVEN EXPERIMENTER",
      summary: "Runs tests, measures impact, and iterates fast. No guesswork.",
      detail: "Leveraging GA4 and Microsoft Clarity to identify friction points and running A/B tests to validate solutions."
    },
    {
      title: "CROSS-FUNCTIONAL COORDINATOR",
      summary: "Works seamlessly with Eng, Design, and Marketing to translate vision into action.",
      detail: "Bridging the gap between technical constraints and business goals to ensure cohesive product delivery."
    },
    {
      title: "BIAS TOWARD ACTION",
      summary: "A focus on shipping quickly, learning fast, and optimizing constantly.",
      detail: "Obsessed with momentum. Reduced operational credit cycles by 83% through rapid process restructuring."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-4xl font-bold uppercase leading-tight max-w-2xl">
          WHY THIS PROFILE WORKS FOR THE FOUNDER’S OFFICE
        </h2>
        <p className="font-mono text-xs text-gray-500 uppercase pb-1">Click to expand details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pitches.map((pitch, index) => (
          <PitchCard 
            key={index}
            title={pitch.title}
            summary={pitch.summary}
            detail={pitch.detail}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      
      <div className="neo-brutalism-border bg-black text-white p-4 text-center mt-4">
        <p className="font-mono text-sm uppercase font-bold tracking-widest">
          High Ownership • High Velocity • High Impact
        </p>
      </div>
    </div>
  );
};
