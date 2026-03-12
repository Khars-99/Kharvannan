
import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold uppercase">Academic Foundation & Certifications</h2>
      <div className="neo-brutalism-border bg-white">
        <div className="p-8 border-b-3 border-black">
          <h3 className="text-2xl font-black uppercase text-[#A3C9C7] mb-4">Education</h3>
          <div className="space-y-6 font-mono">
            <div>
              <p className="font-black text-lg">M.PHIL INTERNATIONAL RELATIONS</p>
              <p className="text-sm">Presidency College</p>
            </div>
            <div>
              <p className="font-black text-lg">M.A. POLITICAL SCIENCE</p>
              <p className="text-sm">Presidency College | Ranked Top 5 of 20 Students</p>
            </div>
            <div>
              <p className="font-black text-lg">BACHELOR OF BUSINESS ADMINISTRATION (BBA)</p>
              <p className="text-sm">Guru Nanak College | Top 10%</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-[#B8C5D6]">
          <h3 className="text-2xl font-black uppercase text-black mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="neo-brutalism-border bg-white p-4 font-black uppercase">BCG STRATEGY CONSULTING</div>
            <div className="neo-brutalism-border bg-white p-4 font-black uppercase">JP MORGAN FINANCE</div>
            <div className="neo-brutalism-border bg-white p-4 font-black uppercase">WORLD BANK RESEARCH</div>
            <div className="neo-brutalism-border bg-white p-4 font-black uppercase">MCKINSEY FORWARD CERTIFICATE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
