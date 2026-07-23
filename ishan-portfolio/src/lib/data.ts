export const PORTFOLIO = {
  name: "Ishan Chennupati",
  firstName: "Ishan",
  title: "AI-Assisted Full Stack Developer",
  subtitle:
    "Building intelligent, scalable, and modern web experiences — from LLM-backed APIs to full-stack products.",
  email: "ishanchennupati@gmail.com",
  phone: "+91 70325 55368",
  linkedin: "https://linkedin.com/in/ishanchennupati",
  linkedinHandle: "linkedin.com/in/ishanchennupati",
  location: "Hyderabad, India",
  photo: "/passport_photo.jpeg",
  resume: "/ishan_resume_tcs_updated.pdf",
  status: "Open to opportunities",

  techTags: [
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Gemini API",
    "AWS",
    "TypeScript",
  ],

  about: `Fresher developer with a genuine interest in AI-powered systems and full-stack engineering.
I think architecture-first — designing how components communicate before writing a single line.
I use LLMs as a workflow layer: for faster debugging, better API design, and smarter retrieval pipelines.
Actively learning DSA and system design while shipping real projects.`,

  education: {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "Joginpally B R Engineering College · JNTUH, Hyderabad",
    period: "Nov 2021 – Jul 2025",
  },

  experience: [
    {
      role: "Research Analyst",
      company: "Concentrix",
      period: "Jul 2025 – Sep 2025",
      color: "#6366f1",
      detail:
        "Handled US-client queries, case management, compliance documentation, and SLA-based escalation workflows with full accuracy standards.",
    },
    {
      role: "Data Visualization Intern (Forage)",
      company: "Tata Consultancy Services (TCS)",
      period: "Jun 2024 · Remote",
      color: "#fbbf24",
      detail:
        "Translated client requirements into analytical frameworks, queried datasets with Excel & SQL, and designed executive-level data visualizations.",
    },
  ],

  certifications: [
    "AWS Cloud Practitioner",
    "Published Researcher",
    "Python Foundations",
    "Responsive Web Design",
    "Intro to Databases",
    "Dynamic Web Applications",
  ],

  projects: [
    {
      id: "chatbot",
      title: "AI Chatbot — Hybrid Retrieval",
      description:
        "Semantic + fuzzy search chatbot with LLM reasoning, session memory, query rewriting, confidence scoring, and source-aware responses (AI / Internet / Excel).",
      tags: ["FastAPI", "Gemini API", "Sentence Transformers", "RapidFuzz"],
      badge: "Ongoing",
      badgeColor: "accent",
      github: "#",
      demo: null,
    },
    {
      id: "goalsmith",
      title: "Goal Smiths — AI Finance",
      description:
        "Full-stack personal finance planner with goal-tracking logic, real-time expense tracking, bar chart analytics, and a spend-less / spend-more guidance engine.",
      tags: ["React", "TypeScript", "Node.js", "REST APIs"],
      badge: null,
      github: "#",
      demo: "#",
    },
    {
      id: "fakereview",
      title: "Fake Review Detection",
      description:
        "Published research — CNN+LSTM hybrid with fuzzy logic for Amazon review authenticity. REST API backend, k-fold cross-validation, European journal publication.",
      tags: ["CNN+LSTM", "Flask", "SQL", "Fuzzy Logic"],
      badge: "Published",
      badgeColor: "gold",
      github: "#",
      paper: "#",
    },
    {
      id: "checklist",
      title: "My Checklist",
      description:
        "Task-management web app with component-based vanilla JS, persistent state, clean responsive layout, and live deployment.",
      tags: ["HTML", "CSS", "JavaScript"],
      badge: null,
      demo: "https://checklists.ccbp.tech",
      github: null,
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "HTML / CSS"],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Flask", "Node.js", "REST APIs"],
    },
    {
      category: "AI / ML",
      items: ["Gemini API", "Sentence Transformers", "CNN+LSTM", "RapidFuzz"],
    },
    {
      category: "Cloud & DB",
      items: ["AWS EC2", "S3", "CloudFront", "SQL / SQLite", "Firestore"],
    },
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript"],
    },
    {
      category: "Tools",
      items: ["Git / GitHub", "Figma", "Power BI", "VS Code", "Google Colab"],
    },
  ],
};
