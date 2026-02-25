
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { MetricsSection } from './components/MetricsSection';
import { ApproachSection } from './components/ApproachSection';
import { FrameworkSection } from './components/FrameworkSection';
import { TechStackSection } from './components/TechStackSection';
import { CaseStudySection } from './components/CaseStudySection';
import { Projects } from './components/Projects';
import { EducationSection } from './components/EducationSection';
import { TrajectorySection } from './components/TrajectorySection';
import { FinalPitch } from './components/FinalPitch';
import { Footer } from './components/Footer';

type CaseStudyId = 'churn' | 'revenue';

const App: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyId | null>('churn');

  const caseStudies = {
    churn: {
      title: "FIXING THE LEAKY BUCKET",
      subtitle: "Product Growth Case Study",
      problem: "High user drop-off rates impacting retention.",
      diagnosis: "Utilized Microsoft Clarity and GA4 to analyze behavior. Identified specific UX friction points during onboarding.",
      action: "Ran A/B tests on targeted improvements and implemented UX fixes.",
      result: "67% REDUCTION IN CHURN",
      visualType: "funnel" as const
    },
    revenue: {
      title: "BUILDING THE REVENUE ENGINE",
      subtitle: "Revenue & Lead Gen Case Study",
      problem: "Business needed high-quality leads to support aggressive sales targets.",
      diagnosis: "Conducted deep research on audience segments to launch targeted Meta Ads campaigns.",
      action: "Shifted focus from vanity metrics to product-market fit insights derived from performance data.",
      result: "₹4.1 CR TOTAL SALES SUPPORTED",
      visualType: "bar" as const
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAF9] text-black pb-20 selection:bg-[#A3C9C7] selection:text-white">
      {/* Container to give that centered 'presentation' feel */}
      <div className="max-w-6xl mx-auto px-4 pt-8 space-y-12">
        <Hero />
        <MetricsSection />
        <ApproachSection />
        <FrameworkSection />
        <TechStackSection />
        
        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase tracking-tight">Case Studies</h2>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveCaseStudy('churn')}
              className={`px-6 py-4 text-sm md:text-base font-black uppercase neo-brutalism-border transition-all duration-100 ${
                activeCaseStudy === 'churn' 
                  ? 'bg-[#A3C9C7] text-white neo-brutalism-shadow-lg -translate-x-1 -translate-y-1' 
                  : 'bg-white hover:bg-gray-100 neo-brutalism-shadow'
              }`}
            >
              Fixing the Leaky Bucket
            </button>
            <button 
              onClick={() => setActiveCaseStudy('revenue')}
              className={`px-6 py-4 text-sm md:text-base font-black uppercase neo-brutalism-border transition-all duration-100 ${
                activeCaseStudy === 'revenue' 
                  ? 'bg-[#A3C9C7] text-white neo-brutalism-shadow-lg -translate-x-1 -translate-y-1' 
                  : 'bg-white hover:bg-gray-100 neo-brutalism-shadow'
              }`}
            >
              Building the Revenue Engine
            </button>
          </div>

          <div className="transition-opacity duration-300">
            {activeCaseStudy && (
              <CaseStudySection 
                {...caseStudies[activeCaseStudy]}
              />
            )}
          </div>
        </div>

        <Projects />
        <EducationSection />
        <TrajectorySection />
        <FinalPitch />
        <Footer />
      </div>
    </div>
  );
};

export default App;
