
import React from 'react';

const TechBox: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="neo-brutalism-border bg-white overflow-hidden">
    <div className="bg-white border-b-3 border-black p-4">
      <h3 className="text-xl font-black uppercase text-[#A3C9C7]">{title}</h3>
    </div>
    <div className="p-4">
      <ul className="space-y-2 font-mono text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const TechStackSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold uppercase">The Technical Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechBox 
          title="Analytics & Tracking" 
          items={[
            "Google Analytics (GA4) // User journeys",
            "Microsoft Clarity // Heatmaps & session recordings",
            "Excel // Deep dive market research"
          ]} 
        />
        <TechBox 
          title="Marketing & Automation" 
          items={[
            "Meta Ads Manager // Micro-experiments",
            "Clay // Lead enrichment",
            "n8n // Workflow automation"
          ]} 
        />
      </div>
      <div className="neo-brutalism-border bg-white overflow-hidden">
        <div className="bg-white border-b-3 border-black p-4">
          <h3 className="text-xl font-black uppercase text-[#A3C9C7]">Product & Prototyping</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
            <div className="space-y-2">
              <p className="font-black uppercase text-xs text-gray-500">Rapid Prototyping</p>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Vibe Coding (Replit, Bolt.new) for rapid builds</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-black uppercase text-xs text-gray-500">KPI Tracking</p>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Performance dashboards for real-time monitoring</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-black uppercase text-xs text-gray-500">Management</p>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Feature management & roadmap tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
