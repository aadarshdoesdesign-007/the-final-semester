export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  synopsis: string;
  themeColor: string;
  milestoneTitle: string;
  academicComponents: string[];
  deliverablesPlaceholder: {
    label: string;
    description: string;
  }[];
  researchQuestionsPlaceholder?: string[];
  editableNotesPrompt: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  role: string;
  quote: string;
  academicAnchor: string;
}

export interface TimelineMilestoneItem {
  id: string;
  chapterId: string;
  step: string;
  title: string;
  descriptor: string;
  timeframe: string;
  status: 'completed' | 'in_review' | 'upcoming';
  accent: string;
  teaser: string;
  keyAspects: string[];
}
