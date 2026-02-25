
import React from 'react';

const MetricCard: React.FC<{ 
  value: string; 
  label: string; 
  description: string; 
  icon: React.ReactNode 
}> = ({ value, label, description, icon }) => (
  <div className="neo-brutalism-card p-6 flex flex-col items-center text-center space-y-4 h-full">
    <div className="text-[#A3C9C7] w-16 h-16">
      {icon}
    </div>
    <div className="space-y-1">
      <h3 className="text-5xl font-black">{value}</h3>
      <p className="text-xl font-bold uppercase">{label}</p>
    </div>
    <p className="font-mono text-sm leading-tight text-gray-600">
      {description}
    </p>
  </div>
);

export const MetricsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold uppercase">North Star Metrics & Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          value="67%" 
          label="Churn Reduction"
          description="Diagnosed user drop-offs and implemented UX fixes via iterative testing."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
              <path d="M23 18l-9-9-5 5-7-7" />
              <path d="M17 18h6v-6" />
            </svg>
          }
        />
        <MetricCard 
          value="₹4.1 Cr" 
          label="Sales Supported"
          description="Lead generation via Meta Ads and extracting product-market fit insights."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
          }
        />
        <MetricCard 
          value="90 → 15" 
          label="Days Credit Cycle"
          description="83% reduction in credit cycle time through data analysis and process optimization."
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          }
        />
      </div>
    </div>
  );
};
