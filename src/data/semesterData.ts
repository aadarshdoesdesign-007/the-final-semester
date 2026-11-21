import type { Chapter, Hotspot, TimelineMilestoneItem } from '../types';

export const SEMESTER_METADATA = {
  title: "THE FINAL SEMESTER",
  subtitle: "The Final Chapter Before the Final Project",
  degree: "Bachelor of Design (B.Des)",
  discipline: "Communication Design",
  semester: "7th Semester Jury Presentation",
  academicYear: "2024 — 2025",
  institution: "Jain University School of Design, Media & Creative Arts",
  studentName: "Aadarsh R",
  juryDate: "November 2026",
  coreMotto: "Ex Umbris in Lucem — Exploring boundaries before the graduation thesis.",
};

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: "seminar",
    number: "01",
    title: "SEMINAR",
    subtitle: "Research, Questions & Discoveries",
    period: "Weeks 01 — 05",
    synopsis: "An in-depth theoretical exploration, critical inquiry and systematic investigation establishing the intellectual foundation of the semester.",
    themeColor: "#D4AF37", // Renaissance Gold
    milestoneTitle: "Milestone I — The Inquiry Matrix",
    academicComponents: [
      "Research Topic & Domain Framing",
      "Literature Review & Theoretical Background",
      "Field Investigation & Primary Methodology",
      "Data Synthesis & Analysis",
      "Critical Findings & Insights",
      "Conclusions & Academic Contribution"
    ],
    deliverablesPlaceholder: [
      {
        label: "Research Paper / Monograph",
        description: "[Placeholder: Insert 5,000-word seminar paper PDF or documentation spread]"
      },
      {
        label: "Methodology Framework Diagram",
        description: "[Placeholder: Insert qualitative/quantitative inquiry diagram]"
      },
      {
        label: "Key Findings Infographic",
        description: "[Placeholder: Insert visual synthesis and comparative matrix]"
      }
    ],
    researchQuestionsPlaceholder: [
      "[Research Question 1: Insert primary inquiry prompt here]",
      "[Research Question 2: Insert secondary hypothesis here]",
      "[Research Question 3: Insert cultural or theoretical framework here]"
    ],
    editableNotesPrompt: "Click or replace this section with your approved seminar abstracts, survey data, citation lists, and thesis defense arguments."
  },
  {
    id: "publication",
    number: "02",
    title: "PUBLICATION DESIGN",
    subtitle: "A Digital Self-Portrait: Personality as an Interface",
    period: "Weeks 06 — 10",
    synopsis: "Reimagining the portfolio as an interactive publication — transforming personal identity, pet companions, visual culture, and complex systems into a living digital self-portrait.",
    themeColor: "#C5A059", // Antique Gold
    milestoneTitle: "Milestone II — The Digital Self-Portrait",
    academicComponents: [
      "Editorial Intent & Personality as Interface",
      "Interactive Storytelling & Exploratory Navigation",
      "Tactile Digital Medium: Lined Notepad Aesthetic",
      "Companion Cursors: Leo (Hedgehog) & Dora (Chow Chow)",
      "Pop Culture Artifacts & Gotham Mode Bat-Signal",
      "Professional Case Studies: 11 Multidisciplinary Projects"
    ],
    deliverablesPlaceholder: [
      {
        label: "Live Interactive Portfolio Publication",
        description: "Production web publication on Vercel: https://aadarshdesigns.vercel.app/"
      },
      {
        label: "Custom Cursor Companion Mechanics",
        description: "Physics-based companion system: Dora (Chow Chow chasing tennis ball) & Leo (Hedgehog chasing treats)"
      },
      {
        label: "Wit Archive & Pop Culture Integrations",
        description: "22-pun interactive archive (/play) and Gotham Mode Bat-Signal easter egg architecture"
      }
    ],
    researchQuestionsPlaceholder: [
      "How can an interactive portfolio express the human identity of its creator without sacrificing professional clarity?",
      "Can micro-interactions and companion cursors forge emotional resonance in digital portfolio experiences?",
      "In what ways does treating a portfolio as an editorial publication elevate it beyond a generic project repository?"
    ],
    editableNotesPrompt: "Interactive personal portfolio: https://aadarshdesigns.vercel.app/ — built with Next.js, Tailwind CSS, Framer Motion, and custom interaction engineering."
  },
  {
    id: "narrative",
    number: "03",
    title: "NARRATIVE & SEQUENTIAL STORYTELLING",
    subtitle: "One Frame Leads to Another",
    period: "Weeks 11 — 14",
    synopsis: "Investigating sequential rhetoric and narrative pacing across two interactive paradigms: gamified pedagogical progression (PERCEPT) and mythological computer-vision shadow puppetry (KATHAPUTLI).",
    themeColor: "#E07A28", // Amber
    milestoneTitle: "Milestone III — The Sequential Continuum",
    academicComponents: [
      "Narrative Premise & Pedagogical World-Building (PERCEPT)",
      "Mascot Companion & Character Turnarounds",
      "Sequential Habit Loops & Daily Expedition Streaks",
      "Mythological Dramaturgy & Shadow Heritage (KATHAPUTLI)",
      "Ornamental Cutwork & Character Posture Studies",
      "Real-Time Computer Vision & Optical Sutradhar Kinematics"
    ],
    deliverablesPlaceholder: [
      {
        label: "PERCEPT — Gamified Narrative Pedagogy",
        description: "Duolingo for Designers: daily expeditions, streak continuity, owl mascot companion, and tactile Aptitude Lab."
      },
      {
        label: "KATHAPUTLI — Interactive Shadow Theatre",
        description: "A Puppet Show Reimagined: Kerala Tholpavakoothu heritage, Krishna-Arjuna Kurukshetra dialogue, and real-time optical hand tracking."
      },
      {
        label: "Interactive Sequential Prototypes",
        description: "Live kerning sandbox, virtual puppet string kinematics, and TouchDesigner stagecraft documentation."
      }
    ],
    researchQuestionsPlaceholder: [
      "How can sequential narrative structures transform pedagogical design theory into habitual daily engagement?",
      "In what ways can optical hand tracking preserve the sacred bodily tension between the puppeteer (Sutradhar) and shadow puppet?",
      "How does temporal pacing differ between gamified digital quests and live performative mythic storytelling?"
    ],
    editableNotesPrompt: "Two interactive narrative case studies: PERCEPT (Duolingo for Designers) and KATHAPUTLI (A Puppet Show Reimagined with computer vision)."
  },
  {
    id: "internship",
    number: "04",
    title: "INTERNSHIP REPORT",
    subtitle: "Design Beyond the Classroom",
    period: "Summer / Industry Term",
    synopsis: "Two dualities of professional immersion: research-led information design and ethnography taxonomy at IIT Indore, alongside enterprise robotics firmware (FOTA) and SaaS UI/UX architecture at Newspace Technologies.",
    themeColor: "#6A2228", // Renaissance Burgundy
    milestoneTitle: "Milestone IV — Professional Immersion",
    academicComponents: [
      "Research Synthesis & Taxonomy Engineering (IIT Indore)",
      "Visualizing 26 Methods Across 7 Domains & 100+ Disciplines",
      "Editorial Publication & Knowledge Graph Exploration",
      "Enterprise SaaS Dashboard Information Architecture (Newspace)",
      "Robotics Fleet Firmware Over-the-Air (FOTA) Workflows",
      "Prerequisite Empty States, PKI Cryptography & Audit Controls"
    ],
    deliverablesPlaceholder: [
      {
        label: "IIT Indore: Mapping Ethnography Publication & Taxonomy",
        description: "Comprehensive research report, 1838x1753pt master poster, and print booklet under Dr. Pallavi Rani."
      },
      {
        label: "Newspace Technologies: IRIS SaaS Dashboard Ecosystem",
        description: "66-page front-end interface architecture, 11 operational modules, stepper workflows, and audit logs."
      },
      {
        label: "Dual Professional Reflection & Comparative Outcomes",
        description: "Bridging qualitative research visualization with mission-critical robotics enterprise software."
      }
    ],
    researchQuestionsPlaceholder: [
      "How can complex academic research methodologies be translated into an intuitive visual taxonomy and knowledge graph?",
      "What design patterns best prevent catastrophic operator error in mission-critical robotics firmware deployment (FOTA)?",
      "How do information design heuristics bridge the gap between academic publication and enterprise software architecture?"
    ],
    editableNotesPrompt: "Two distinct professional monographs: IIT Indore (Mapping Ethnography) and Newspace Technologies (IRIS SaaS Dashboard)."
  }
];

export const TIMELINE_MILESTONES: TimelineMilestoneItem[] = [
  {
    id: "mile-1",
    chapterId: "seminar",
    step: "PHASE 01",
    title: "The Seminar Investigation",
    descriptor: "Academic Groundwork & Critical Inquiry",
    timeframe: "Weeks 01–05",
    status: "completed",
    accent: "#D4AF37",
    teaser: "Framing research questions, collecting literature, and developing theoretical rigor before putting pen to sketch.",
    keyAspects: ["Epistemology", "Qualitative Methods", "Academic Writing", "Defense"]
  },
  {
    id: "mile-2",
    chapterId: "publication",
    step: "PHASE 02",
    title: "The Editorial Genesis",
    descriptor: "Typographic Systems & Physical Production",
    timeframe: "Weeks 06–10",
    status: "completed",
    accent: "#C3583C",
    teaser: "Crafting a multi-page tactile publication from concept to final printed binding and typography hierarchy.",
    keyAspects: ["Grid Architecture", "Type Pairing", "Paper Stock", "Tactile Spreads"]
  },
  {
    id: "mile-3",
    chapterId: "narrative",
    step: "PHASE 03",
    title: "The Sequential Cadence",
    descriptor: "Visual Rhythm & Narrative Architecture",
    timeframe: "Weeks 11–14",
    status: "completed",
    accent: "#E07A28",
    teaser: "Exploring temporal narrative structures where each frame drives psychological pacing and graphic momentum.",
    keyAspects: ["Storyboarding", "Panel Mechanics", "Visual Pacing", "Continuity"]
  },
  {
    id: "mile-4",
    chapterId: "internship",
    step: "PHASE 04",
    title: "The Professional Crucible",
    descriptor: "Industry Practice & Real-World Constraints",
    timeframe: "Industry Phase",
    status: "completed",
    accent: "#842D2D",
    teaser: "Stepping outside the academy into agency/studio pressures, real stakeholders, design systems, and teamwork.",
    keyAspects: ["Client Briefs", "Design Systems", "Production Deliverables", "Critique"]
  }
];

export const HERO_HOTSPOTS: Hotspot[] = [
  {
    id: "hs-scroll",
    x: 18,
    y: 72,
    label: "The Research Parchment",
    role: "Chapter 01 Anchor",
    quote: "Every grand design begins with rigorous inquiry and theoretical doubt.",
    academicAnchor: "seminar"
  },
  {
    id: "hs-center-halo",
    x: 50,
    y: 22,
    label: "The Claude Halo",
    role: "Aura of Guidance",
    quote: "The warm orange luminary: synthesis of Renaissance harmony and contemporary AI dialog.",
    academicAnchor: "narrative"
  },
  {
    id: "hs-table-craft",
    x: 62,
    y: 78,
    label: "The Design Table",
    role: "Chapter 02 Anchor",
    quote: "Where typography, grid systems and paper specimens congregate for the final critique.",
    academicAnchor: "publication"
  },
  {
    id: "hs-folio-right",
    x: 82,
    y: 68,
    label: "The Industry Folio",
    role: "Chapter 04 Anchor",
    quote: "Prototypes prepared to leave the sanctuary of the studio for the live commercial world.",
    academicAnchor: "internship"
  }
];
