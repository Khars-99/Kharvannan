
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
