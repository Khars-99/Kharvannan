import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASES } from './cases';

const SECTORS = [
  "D2C / E-Commerce", "SaaS", "Fintech", "Retail",
  "Healthcare", "Edtech", "Real Estate", "Logistics"
];

const REASONING_LIMIT = 100;
const RISK_LIMIT = 50;

const countWords = (str: string) => str.trim().split(/\s+/).filter(w => w.length > 0).length;

export const Crucible = () => {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'case' | 'verdict'>('landing');
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [currentCase, setCurrentCase] = useState<any>(null);

  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [reasoning, setReasoning] = useState('');
  const [risk, setRisk] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [verdictData, setVerdictData] = useState<any>(null);
  const [showRecommended, setShowRecommended] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reasoningWords = countWords(reasoning);
  const riskWords = countWords(risk);

  const handleStartCase = () => {
    if (!selectedSector) return;
    let caseData;
    if (selectedSector === 'RANDOM') {
      caseData = CASES[Math.floor(Math.random() * CASES.length)];
    } else {
      const sectorCases = CASES.filter(c => c.sector === selectedSector);
      caseData = sectorCases[Math.floor(Math.random() * sectorCases.length)] || CASES[0];
    }
    setCurrentCase(caseData);
    setCurrentScreen('case');
    window.scrollTo(0, 0);
  };

  const handleCommit = async () => {
    if (!selectedOption || !reasoning.trim() || !risk.trim() || reasoningWords > REASONING_LIMIT || riskWords > RISK_LIMIT) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const SYSTEM_PROMPT = `You are an adversarial business operator who has seen founders make every mistake in the book. You evaluate decisions made under pressure with no sentimentality. You are not a coach. You are not encouraging. You find the flaw in every decision — even correct ones — because every decision has a cost. Your job is to make the person think harder, not feel better.

RULES:
1. Never use the words: "great", "good", "interesting", "solid", "reasonable", "thoughtful", or any synonym of praise.
2. Always find a weakness. Even if the decision is the recommended one, find what they failed to account for.
3. verdictText must be one sentence. No softening. No qualifiers.
4. verdictStrength must be exactly one of: strong, weak, mixed.
5. questionToAsk must be something they demonstrably did not consider in their reasoning.
6. Output must be valid JSON only with keys: whatHolds, whereItBreaks, whatYouMissed, questionToAsk, verdictText, verdictStrength.`;

    const userMessage = `Case Brief: ${currentCase.brief}

Options:
A: ${currentCase.options.A}
B: ${currentCase.options.B}
C: ${currentCase.options.C}

The operator chose: Option ${selectedOption}
Their reasoning: ${reasoning}
Their perceived biggest risk: ${risk}

Evaluate this decision.`;

    try {
      const response = await fetch("/.netlify/functions/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: SYSTEM_PROMPT,
          userMessage: userMessage
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error("Invalid response from AI provider");
      }

      const text = data.candidates[0].content.parts[0].text;

      // Robust JSON extraction
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Could not find valid JSON in AI response");
      }

      const clean = jsonMatch[0];
      const parsed = JSON.parse(clean);
      setVerdictData(parsed);
      setCurrentScreen('verdict');
      window.scrollTo(0, 0);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to analyse decision. The board is waiting.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentScreen('landing');
    setSelectedSector(null);
    setCurrentCase(null);
    setSelectedOption(null);
    setReasoning('');
    setRisk('');
    setVerdictData(null);
    setShowRecommended(false);
    setError(null);
    window.scrollTo(0, 0);
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-center p-6 font-sans relative">
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <Link to="/" className="inline-block px-4 py-2 font-black uppercase border-[3px] border-black bg-white hover:bg-[#A3C9C7] transition-colors duration-300 ease-out shadow-[3px_3px_0px_0px_#000000]">
          ← BACK TO HOME
        </Link>
      </div>
      <div className="max-w-3xl w-full text-center space-y-12 mt-16 md:mt-0">
        <div className="space-y-8">
          <div className="w-full max-w-[280px] md:max-w-[400px] mx-auto border-[3px] border-black shadow-[8px_8px_0px_0px_#000000] bg-white overflow-hidden">
            <img
              src="/logo.png"
              alt=""
              className="w-full h-auto object-cover mix-blend-multiply"
            />
          </div>
          <div className="max-w-xl mx-auto pt-2">
            <p className="font-mono text-sm md:text-base text-black/80 uppercase font-bold tracking-tight">
              A case-based judgment training engine for operators.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-mono text-sm uppercase text-black font-bold">PICK YOUR SECTOR</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTORS.map(sector => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`
                  border-[3px] border-black px-4 py-2 font-mono text-sm uppercase rounded-none
                  transition-all duration-300 ease-out
                  ${selectedSector === sector
                    ? 'bg-black text-white shadow-[3px_3px_0px_0px_#A3C9C7]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[1px_1px_0px_0px_#000000]'}
                `}
              >
                {sector}
              </button>
            ))}
            <button
              onClick={() => setSelectedSector('RANDOM')}
              className={`
                border-[3px] border-black px-4 py-2 font-mono text-sm uppercase rounded-none bg-[#F2D5AE] text-black
                transition-all duration-300 ease-out
                ${selectedSector === 'RANDOM'
                  ? 'shadow-[3px_3px_0px_0px_#A3C9C7] bg-black text-white'
                  : 'shadow-[3px_3px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[5px_5px_0px_0px_#000000] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[1px_1px_0px_0px_#000000]'}
              `}
            >
              RANDOM
            </button>
          </div>
        </div>

        <div className="pt-8">
          <button
            onClick={handleStartCase}
            disabled={!selectedSector}
            className={`
              w-full max-w-[400px] border-[3px] border-black p-4 font-sans font-black text-base uppercase rounded-none
              transition-all duration-300 ease-out
              ${selectedSector
                ? 'bg-[#A3C9C7] text-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#000000] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#000000]'
                : 'bg-[#F7FAF9] text-black/30 cursor-not-allowed'}
            `}
          >
            START CASE
          </button>
        </div>
      </div>
    </div>
  );

  const renderCase = () => (
    <div className="min-h-screen bg-[#F7FAF9] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-block mb-6 px-4 py-2 font-black uppercase border-[3px] border-black bg-white hover:bg-[#A3C9C7] transition-colors duration-300 ease-out shadow-[3px_3px_0px_0px_#000000]">
          ← BACK TO HOME
        </Link>

        <div className="flex justify-between items-center mb-8">
          <div className="border-[3px] border-black bg-[#B8C5D6] font-mono text-xs md:text-sm uppercase px-3 py-1 shadow-[2px_2px_0px_0px_#000000] rounded-none">
            {currentCase.sector}
          </div>
          <div className="font-mono text-xs md:text-sm uppercase text-black font-bold">
            10 MINUTES. THE FOUNDER IS WAITING.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-6">
            <div className="border-[3px] border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000000] rounded-none">
              <div className="font-mono text-sm uppercase text-black border-b-2 border-black pb-2 mb-4 font-bold">
                THE BRIEF
              </div>
              <p className="text-base md:text-lg leading-[1.8] text-black">
                {currentCase.brief}
              </p>
            </div>

            <div className="space-y-2">
              {(['A', 'B', 'C'] as const).map(opt => (
                <div
                  key={opt}
                  onClick={() => setSelectedOption(opt)}
                  className={`
                    border-[3px] border-black p-4 flex gap-4 items-center cursor-pointer rounded-none
                    transition-all duration-300 ease-out
                    ${selectedOption === opt
                      ? 'bg-black text-white shadow-[4px_4px_0px_0px_#A3C9C7]'
                      : 'bg-white text-black shadow-[3px_3px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[5px_5px_0px_0px_#000000]'}
                  `}
                >
                  <div className="font-mono text-sm uppercase font-bold min-w-[80px]">
                    OPTION {opt}
                  </div>
                  <div className="text-base">
                    {currentCase.options[opt]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className={`transition-opacity duration-300 ease-out ${selectedOption ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="space-y-6">
                <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#000000] rounded-none">
                  <div className="font-mono text-sm uppercase text-black border-b-2 border-black pb-2 mb-1 font-bold">
                    YOUR REASONING
                  </div>
                  <div className="font-mono text-xs text-black/60 mb-3">
                    State your case. Maximum 3 assumptions.
                  </div>
                  <textarea
                    value={reasoning}
                    onChange={e => setReasoning(e.target.value)}
                    disabled={isLoading}
                    className="w-full border-2 border-black bg-[#F7FAF9] text-black p-3 h-[200px] resize-none focus:outline-none focus:border-[#A3C9C7] focus:shadow-[2px_2px_0px_0px_#A3C9C7] rounded-none transition-all duration-300 ease-out"
                  />
                  <div className={`text-right font-mono text-xs mt-2 ${reasoningWords > REASONING_LIMIT ? 'text-[#FF6B6B] font-bold' : 'text-black/50'}`}>
                    {reasoningWords} / {REASONING_LIMIT} words
                  </div>
                </div>

                <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#000000] rounded-none">
                  <div className="font-mono text-sm uppercase text-black border-b-2 border-black pb-2 mb-1 font-bold">
                    BIGGEST RISK
                  </div>
                  <div className="font-mono text-xs text-black/60 mb-3">
                    What is the single biggest risk in your choice?
                  </div>
                  <textarea
                    value={risk}
                    onChange={e => setRisk(e.target.value)}
                    disabled={isLoading}
                    className="w-full border-2 border-black bg-[#F7FAF9] text-black p-3 h-[120px] resize-none focus:outline-none focus:border-[#A3C9C7] focus:shadow-[2px_2px_0px_0px_#A3C9C7] rounded-none transition-all duration-300 ease-out"
                  />
                  <div className={`text-right font-mono text-xs mt-2 ${riskWords > RISK_LIMIT ? 'text-[#FF6B6B] font-bold' : 'text-black/50'}`}>
                    {riskWords} / {RISK_LIMIT} words
                  </div>
                </div>

                {error && (
                  <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#FF6B6B] rounded-none">
                    <p className="text-[#FF6B6B] font-bold">{error}</p>
                  </div>
                )}

                <div className="space-y-3">
                  <button
                    onClick={handleCommit}
                    disabled={isLoading || !selectedOption || !reasoning.trim() || !risk.trim() || reasoningWords > REASONING_LIMIT || riskWords > RISK_LIMIT}
                    className={`
                      w-full border-[3px] border-black p-4 font-sans font-black text-base uppercase rounded-none
                      transition-all duration-300 ease-out
                      ${(!selectedOption || !reasoning.trim() || !risk.trim() || reasoningWords > REASONING_LIMIT || riskWords > RISK_LIMIT)
                        ? 'bg-[#F7FAF9] text-black/30 cursor-not-allowed'
                        : 'bg-[#A3C9C7] text-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#000000] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#000000]'}
                    `}
                  >
                    {isLoading ? <span>ANALYSING...</span> : "COMMIT"}
                  </button>

                  <div className="space-y-1">
                    {!selectedOption && <div className="font-mono text-xs text-[#FF6B6B] border-l-[3px] border-[#FF6B6B] pl-2">Pick one. No hedging.</div>}
                    {selectedOption && !reasoning.trim() && <div className="font-mono text-xs text-[#FF6B6B] border-l-[3px] border-[#FF6B6B] pl-2">State your reasoning before committing.</div>}
                    {selectedOption && reasoning.trim() && !risk.trim() && <div className="font-mono text-xs text-[#FF6B6B] border-l-[3px] border-[#FF6B6B] pl-2">Name the risk. Every decision has one.</div>}
                    {(reasoningWords > REASONING_LIMIT || riskWords > RISK_LIMIT) && <div className="font-mono text-xs text-[#FF6B6B] border-l-[3px] border-[#FF6B6B] pl-2">Cut it down. Operators are concise.</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVerdict = () => {
    if (!verdictData) return null;

    const getVerdictShadow = (strength: string) => {
      switch (strength?.toLowerCase()) {
        case 'strong': return 'shadow-[6px_6px_0px_0px_#A3C9C7]';
        case 'weak': return 'shadow-[6px_6px_0px_0px_#FF6B6B]';
        case 'mixed': return 'shadow-[6px_6px_0px_0px_#F2D5AE]';
        default: return 'shadow-[6px_6px_0px_0px_#000000]';
      }
    };

    return (
      <div className="min-h-screen bg-[#F7FAF9] p-4 md:p-8 font-sans flex justify-center">
        <div className="w-full max-w-[800px] space-y-8">
          <Link to="/" className="inline-block mb-6 px-4 py-2 font-black uppercase border-[3px] border-black bg-white hover:bg-[#A3C9C7] transition-colors duration-300 ease-out shadow-[3px_3px_0px_0px_#000000]">
            ← BACK TO HOME
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
              THE VERDICT
            </h1>
            <div className="border-b-[4px] border-black w-24"></div>
            <div className="inline-block border-[3px] border-black bg-[#F2D5AE] px-3 py-1 font-mono text-sm uppercase shadow-[2px_2px_0px_0px_#000000] rounded-none font-bold">
              YOU CHOSE: OPTION {selectedOption}
            </div>
          </div>

          <div className="space-y-3">
            <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#A3C9C7] border-l-[7px] border-l-[#A3C9C7] rounded-none">
              <div className="font-mono text-sm uppercase text-black border-b-2 border-[#A3C9C7] pb-2 mb-3 font-bold">WHAT HOLDS</div>
              <p className="text-base">{verdictData?.whatHolds}</p>
            </div>

            <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#FF6B6B] border-l-[7px] border-l-[#FF6B6B] rounded-none">
              <div className="font-mono text-sm uppercase text-black border-b-2 border-[#FF6B6B] pb-2 mb-3 font-bold">WHERE IT BREAKS</div>
              <p className="text-base">{verdictData?.whereItBreaks}</p>
            </div>

            <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#F2D5AE] border-l-[7px] border-l-[#F2D5AE] rounded-none">
              <div className="font-mono text-sm uppercase text-black border-b-2 border-[#F2D5AE] pb-2 mb-3 font-bold">WHAT YOU MISSED</div>
              <p className="text-base">{verdictData?.whatYouMissed}</p>
            </div>

            <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_0px_#B8C5D6] border-l-[7px] border-l-[#B8C5D6] rounded-none">
              <div className="font-mono text-sm uppercase text-black border-b-2 border-[#B8C5D6] pb-2 mb-3 font-bold">THE QUESTION YOU SHOULD HAVE ASKED</div>
              <p className="text-lg font-bold">{verdictData?.questionToAsk}</p>
            </div>
          </div>

          <div className="border-t-[3px] border-black pt-6 mt-6">
            <div className="font-mono text-sm uppercase mb-2 font-bold">VERDICT</div>
            <div className={`border-[3px] border-black p-5 bg-white rounded-none ${getVerdictShadow(verdictData?.verdictStrength)}`}>
              <p className="text-xl md:text-2xl font-black uppercase leading-tight">
                {verdictData?.verdictText}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 pt-4">
            <button
              onClick={handleReset}
              className="flex-1 border-[3px] border-black bg-white text-black p-4 font-sans font-black text-base uppercase shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#000000] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#000000] transition-all duration-300 ease-out rounded-none"
            >
              TRY ANOTHER CASE
            </button>
            <button
              onClick={() => setShowRecommended(true)}
              className="flex-1 border-[3px] border-black bg-black text-white p-4 font-sans font-black text-base uppercase shadow-[4px_4px_0px_0px_#A3C9C7] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#A3C9C7] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_#A3C9C7] transition-all duration-300 ease-out rounded-none"
            >
              WHAT I'D HAVE DONE
            </button>
          </div>

          {showRecommended && (
            <div className="border-t-[3px] border-black pt-6 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="font-mono text-sm uppercase mb-3 font-bold">THE RECOMMENDED CALL</div>
              <div className="inline-block border-[3px] border-black bg-[#A3C9C7] text-black px-3 py-1 font-mono text-sm uppercase shadow-[3px_3px_0px_0px_#000000] rounded-none mb-4 font-bold">
                OPTION {currentCase.recommended}
              </div>
              <p className="text-base md:text-lg leading-[1.8]">
                {currentCase.rationale}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {currentScreen === 'landing' && renderLanding()}
      {currentScreen === 'case' && renderCase()}
      {currentScreen === 'verdict' && renderVerdict()}
    </>
  );
}
