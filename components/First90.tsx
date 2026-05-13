import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ArrowRight, Briefcase, Building2, Target } from 'lucide-react';
import {
  SECTORS, STAGES, REVENUE_TRAJECTORIES, ACQUISITION_CHANNELS,
  CAC_AWARENESS_OPTIONS, VENDOR_SITUATIONS, CASH_FLOW_VISIBILITIES,
  WORKING_CAPITAL_PRESSURES, TEAM_STRUCTURES, REPORTING_SITUATIONS,
  PLACEHOLDER_EXAMPLES
} from '../constants/businessData';

interface DiagnosticOutput {
  biggestLever: string;
  frictionPoints: { revenue: string; operations: string; reporting: string; };
  ninetyDayPlan: string[];
  uncomfortableQuestion: string;
  closingLine: string;
  teamAndOrgRisk?: string;
  financialRisk?: string;
  theHardestThing?: string;
}

export const First90 = () => {
  const [mode, setMode] = useState<'quick' | 'deep'>('quick');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState(SECTORS[0]);
  const [stage, setStage] = useState(STAGES[0]);
  
  const [revenueTrajectory, setRevenueTrajectory] = useState(REVENUE_TRAJECTORIES[0]);
  const [biggestRevenueBlocker, setBiggestRevenueBlocker] = useState('');
  const [primaryAcquisitionChannel, setPrimaryAcquisitionChannel] = useState(ACQUISITION_CHANNELS[0]);
  const [cacAwareness, setCacAwareness] = useState(CAC_AWARENESS_OPTIONS[0]);
  const [operationalBottleneck, setOperationalBottleneck] = useState('');
  const [vendorSituation, setVendorSituation] = useState(VENDOR_SITUATIONS[0]);
  const [cashFlowVisibility, setCashFlowVisibility] = useState(CASH_FLOW_VISIBILITIES[0]);
  const [workingCapitalPressure, setWorkingCapitalPressure] = useState(WORKING_CAPITAL_PRESSURES[0]);
  const [teamStructure, setTeamStructure] = useState(TEAM_STRUCTURES[0]);
  const [reportingSituation, setReportingSituation] = useState(REPORTING_SITUATIONS[0]);
  const [keepingUpAtNight, setKeepingUpAtNight] = useState('');

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<DiagnosticOutput | null>(null);
  const [error, setError] = useState('');

  const [placeholder] = useState(
    () => PLACEHOLDER_EXAMPLES[Math.floor(Math.random() * PLACEHOLDER_EXAMPLES.length)]
  );

  const handleModeSwitch = (newMode: 'quick' | 'deep') => {
    setMode(newMode);
    setOutput(null);
    setError('');
  };

  const generateDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOutput(null);

    let userMessage = `Company: ${company}
Sector: ${sector}
Stage: ${stage}`;

    if (mode === 'deep') {
      userMessage += `
Revenue Trajectory: ${revenueTrajectory}
Biggest Revenue Blocker: ${biggestRevenueBlocker}
Primary Acquisition Channel: ${primaryAcquisitionChannel}
CAC Awareness: ${cacAwareness}
Operational Bottleneck: ${operationalBottleneck}
Vendor Situation: ${vendorSituation}
Cash Flow Visibility: ${cashFlowVisibility}
Working Capital Pressure: ${workingCapitalPressure}
Team Structure: ${teamStructure}
Reporting Situation: ${reportingSituation}
The thing keeping them up at night: ${keepingUpAtNight}`;
    }

    try {
      const response = await fetch("/.netlify/functions/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId: 'first90',
          userMessage: userMessage
        })
      });

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      const clean = text.replace(/```json|```/g, "").trim();
      const parsedOutput = JSON.parse(clean) as DiagnosticOutput;
      setOutput(parsedOutput);

    } catch (err) {
      console.error(err);
      setError('An error occurred while generating the diagnostic. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAF9] text-black font-sans selection:bg-[#A3C9C7] selection:text-white relative">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>
      
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 relative z-10">
        
        <Link to="/" className="inline-block mb-12 px-4 py-2 font-black uppercase border-[3px] border-black bg-white hover:bg-[#A3C9C7] transition-colors shadow-[3px_3px_0px_0px_#000000]">
          ← BACK TO HOME
        </Link>
        
        <header className="mb-16 flex flex-col items-center text-center">
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8">
            <h1 className="text-[4.5rem] md:text-[6.5rem] font-black tracking-tighter text-black leading-none uppercase">
              FIRST
            </h1>
            <div className="flex items-center relative mt-1">
              <span className="text-[4.5rem] md:text-[6.5rem] font-black text-[#A3C9C7] leading-none tracking-tighter uppercase" style={{ textShadow: '4px 4px 0px #000000' }}>
                90
              </span>
              <svg className="w-14 h-14 md:w-20 md:h-20 text-black ml-1 -mt-4 md:-mt-6 drop-shadow-[4px_4px_0px_#000000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
          <p className="text-black font-medium text-lg md:text-xl max-w-xl leading-relaxed border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000000]">
            A GTM diagnostic engine. Enter your business context, get a structured 90-day operational brief in 60 seconds.
          </p>
        </header>

        <form onSubmit={generateDiagnostic} className="space-y-8 mb-16 bg-white p-8 border-[3px] border-black shadow-[8px_8px_0px_0px_#000000]">
          
          <div className="flex flex-col sm:flex-row gap-0 mb-8 w-full sm:w-fit mx-auto relative group border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
            <button
              type="button"
              onClick={() => handleModeSwitch('quick')}
              className={`px-6 py-3 text-sm font-black uppercase tracking-tight transition-colors w-full sm:w-auto border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-black ${mode === 'quick' ? 'bg-[#A3C9C7] text-black' : 'bg-white text-black hover:bg-[#F2D5AE]'}`}
            >
              Quick Scan
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('deep')}
              className={`px-6 py-3 text-sm font-black uppercase tracking-tight transition-colors w-full sm:w-auto ${mode === 'deep' ? 'bg-[#A3C9C7] text-black' : 'bg-white text-black hover:bg-[#F2D5AE]'}`}
            >
              Deep Diagnostic
            </button>
          </div>

          {mode === 'quick' ? (
            <>
              <div>
                <label htmlFor="company" className="block text-sm font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" strokeWidth={2.5} />
                  Company Context
                </label>
                <textarea
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="COMPANY NAME OR BRIEF DESCRIPTION OF WHAT YOU DO..."
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all resize-none h-32 text-base font-medium placeholder:text-zinc-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sector" className="block text-sm font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5" strokeWidth={2.5} />
                    Sector
                  </label>
                  <select id="sector" value={sector} onChange={(e) => setSector(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="stage" className="block text-sm font-black uppercase tracking-tight text-black mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" strokeWidth={2.5} />
                    Stage
                  </label>
                  <select id="stage" value={stage} onChange={(e) => setStage(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6 mt-8">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 1 — Business Context</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div>
                <label htmlFor="company-deep" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Company name or description</label>
                <input type="text" id="company-deep" value={company} onChange={(e) => setCompany(e.target.value)}
                  placeholder={placeholder}
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all text-base font-medium placeholder:text-zinc-400"
                  required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sector-deep" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Sector</label>
                  <select id="sector-deep" value={sector} onChange={(e) => setSector(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="stage-deep" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Stage</label>
                  <select id="stage-deep" value={stage} onChange={(e) => setStage(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 2 — Revenue & Growth</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div>
                <label htmlFor="revenueTrajectory" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Revenue trajectory</label>
                <select id="revenueTrajectory" value={revenueTrajectory} onChange={(e) => setRevenueTrajectory(e.target.value)}
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                  {REVENUE_TRAJECTORIES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="biggestRevenueBlocker" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Biggest revenue blocker</label>
                <input type="text" id="biggestRevenueBlocker" value={biggestRevenueBlocker} onChange={(e) => setBiggestRevenueBlocker(e.target.value)}
                  placeholder="WHAT IS THE SINGLE BIGGEST THING STOPPING REVENUE GROWTH RIGHT NOW?"
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all text-base font-medium placeholder:text-zinc-400"
                  required />
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 3 — Marketing & Acquisition</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="primaryAcquisitionChannel" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Primary acquisition channel</label>
                  <select id="primaryAcquisitionChannel" value={primaryAcquisitionChannel} onChange={(e) => setPrimaryAcquisitionChannel(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {ACQUISITION_CHANNELS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="cacAwareness" className="block text-sm font-black uppercase tracking-tight text-black mb-2">CAC awareness</label>
                  <select id="cacAwareness" value={cacAwareness} onChange={(e) => setCacAwareness(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {CAC_AWARENESS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 4 — Operations & Vendors</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div>
                <label htmlFor="operationalBottleneck" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Operational bottleneck</label>
                <input type="text" id="operationalBottleneck" value={operationalBottleneck} onChange={(e) => setOperationalBottleneck(e.target.value)}
                  placeholder="WHERE DOES EXECUTION MOST COMMONLY BREAK DOWN OR SLOW DOWN?"
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all text-base font-medium placeholder:text-zinc-400"
                  required />
              </div>
              <div>
                <label htmlFor="vendorSituation" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Vendor / supply chain situation</label>
                <select id="vendorSituation" value={vendorSituation} onChange={(e) => setVendorSituation(e.target.value)}
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                  {VENDOR_SITUATIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 5 — Finance & Cash Flow</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cashFlowVisibility" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Cash flow visibility</label>
                  <select id="cashFlowVisibility" value={cashFlowVisibility} onChange={(e) => setCashFlowVisibility(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {CASH_FLOW_VISIBILITIES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="workingCapitalPressure" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Working capital pressure</label>
                  <select id="workingCapitalPressure" value={workingCapitalPressure} onChange={(e) => setWorkingCapitalPressure(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {WORKING_CAPITAL_PRESSURES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 6 — Team & Reporting</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="teamStructure" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Team structure</label>
                  <select id="teamStructure" value={teamStructure} onChange={(e) => setTeamStructure(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {TEAM_STRUCTURES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="reportingSituation" className="block text-sm font-black uppercase tracking-tight text-black mb-2">Reporting and decision making</label>
                  <select id="reportingSituation" value={reportingSituation} onChange={(e) => setReportingSituation(e.target.value)}
                    className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all appearance-none cursor-pointer font-medium">
                    {REPORTING_SITUATIONS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-12">
                <div className="h-[3px] bg-black flex-1"></div>
                <span className="text-sm font-black uppercase tracking-tight text-black bg-[#B8C5D6] px-3 py-1 border-[2px] border-black">Section 7 — Open Signal</span>
                <div className="h-[3px] bg-black flex-1"></div>
              </div>
              <div>
                <label htmlFor="keepingUpAtNight" className="block text-sm font-black uppercase tracking-tight text-black mb-2">The thing keeping you up at night</label>
                <input type="text" id="keepingUpAtNight" value={keepingUpAtNight} onChange={(e) => setKeepingUpAtNight(e.target.value)}
                  placeholder="THE ONE OPERATIONAL OR BUSINESS PROBLEM YOU HAVE NOT BEEN ABLE TO SOLVE YET"
                  className="w-full p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:ring-0 focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#000000] transition-all text-base font-medium placeholder:text-zinc-400"
                  required />
              </div>
            </div>
          )}

          {error && <p className="text-red-600 text-sm font-black uppercase border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000000]">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full bg-[#A3C9C7] text-black py-4 px-6 font-black uppercase tracking-tight border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000000] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#000000] flex items-center justify-center gap-2">
            {loading ? (
              <><Loader2 className="w-6 h-6 animate-spin" strokeWidth={3} />DIAGNOSING...</>
            ) : (
              <>{mode === 'quick' ? 'GENERATE BRIEF' : 'RUN DEEP DIAGNOSTIC'}<ArrowRight className="w-6 h-6" strokeWidth={3} /></>
            )}
          </button>
        </form>

        {output && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <div className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000000] p-8 md:p-12 space-y-12">
              
              <section>
                <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-4">01 / The Biggest Lever</h2>
                <p className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-black uppercase">{output.biggestLever}</p>
              </section>

              <hr className="border-t-[3px] border-black" />

              <section>
                <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-6">02 / Friction Points</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#F7FAF9] p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
                    <h3 className="text-sm font-black uppercase tracking-tight text-black mb-3 border-b-[3px] border-black pb-2">Revenue</h3>
                    <p className="text-black font-medium text-sm leading-relaxed">{output.frictionPoints.revenue}</p>
                  </div>
                  <div className="bg-[#F7FAF9] p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
                    <h3 className="text-sm font-black uppercase tracking-tight text-black mb-3 border-b-[3px] border-black pb-2">Operations</h3>
                    <p className="text-black font-medium text-sm leading-relaxed">{output.frictionPoints.operations}</p>
                  </div>
                  <div className="bg-[#F7FAF9] p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
                    <h3 className="text-sm font-black uppercase tracking-tight text-black mb-3 border-b-[3px] border-black pb-2">Reporting</h3>
                    <p className="text-black font-medium text-sm leading-relaxed">{output.frictionPoints.reporting}</p>
                  </div>
                </div>
              </section>

              <hr className="border-t-[3px] border-black" />

              <section>
                <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-6">03 / The 90-Day Plan</h2>
                <ol className="space-y-6">
                  {output.ninetyDayPlan.map((action, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="text-black font-mono font-black text-xl bg-[#F2D5AE] px-2 py-1 border-[2px] border-black">{(index + 1).toString().padStart(2, '0')}</span>
                      <p className="text-black font-medium leading-relaxed mt-1">{action}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <hr className="border-t-[3px] border-black" />

              <section className="bg-[#B8C5D6] p-6 md:p-8 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
                <h2 className="text-sm font-black uppercase tracking-tight text-black bg-white px-3 py-1 border-[2px] border-black inline-block mb-4">04 / The Question You're Not Asking</h2>
                <p className="text-lg md:text-xl font-black text-black uppercase tracking-tight">"{output.uncomfortableQuestion}"</p>
              </section>

              {mode === 'deep' && output.teamAndOrgRisk && (
                <>
                  <hr className="border-t-[3px] border-black" />
                  <section>
                    <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-4">05 / Team & Org Risk</h2>
                    <p className="text-black font-medium leading-relaxed">{output.teamAndOrgRisk}</p>
                  </section>
                </>
              )}

              {mode === 'deep' && output.financialRisk && (
                <>
                  <hr className="border-t-[3px] border-black" />
                  <section>
                    <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-4">06 / Financial Risk</h2>
                    <p className="text-black font-medium leading-relaxed">{output.financialRisk}</p>
                  </section>
                </>
              )}

              {mode === 'deep' && output.theHardestThing && (
                <>
                  <hr className="border-t-[3px] border-black" />
                  <section>
                    <h2 className="text-sm font-black uppercase tracking-tight text-black bg-[#A3C9C7] px-3 py-1 border-[2px] border-black inline-block mb-4">07 / The Hardest Thing</h2>
                    <p className="text-black font-medium leading-relaxed">{output.theHardestThing}</p>
                  </section>
                </>
              )}
            </div>

            <div className="mt-12 text-center pb-12">
              <p className="text-black font-black uppercase tracking-tight mb-6">{output.closingLine}</p>
              <a href="mailto:r.v.kharvannan@gmail.com" className="inline-block px-8 py-4 bg-[#A3C9C7] text-black font-black uppercase tracking-tight border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000000] transition-all">
                LET'S TALK
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
