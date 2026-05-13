
export interface Metric {
  value: string;
  label: string;
  description: string;
  icon: 'down' | 'up' | 'arrow';
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  problem: string;
  diagnosis: string;
  action: string;
  result: string;
  visualType: 'funnel' | 'bar' | 'comparison';
}

export interface TimelineItem {
  title: string;
  role: string;
  description: string;
}

export interface Case {
  sector: string;
  brief: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
  recommended: 'A' | 'B' | 'C';
  rationale: string;
}

export interface VerdictData {
  whatHolds: string;
  whereItBreaks: string;
  whatYouMissed: string;
  questionToAsk: string;
  verdictText: string;
  verdictStrength: 'strong' | 'weak' | 'mixed';
}
