export const site = {
  name: "Durgesh Khushlani",
  logoMark: "DK",
  roles: ["AI Engineer", "Backend Developer"],
  tagline: "I build systems that think.",
  shortBio:
    "I'm Durgesh — an AI Engineer and Backend Developer who builds systems that solve real problems, not just demos. I care about system design: how the pieces fit together, not just whether a feature works. Currently building production-grade multi-agent and RAG systems with LangGraph and LangChain.",
  longBio: [
    "I'm an M.Sc Information Technology student at Dhirubhai Ambani University (graduating 2027), and in parallel I build full production systems on my own — not class assignments, actual working software with real architecture decisions behind it.",
    "What pulls me in is the system-design side of things: how a placement platform's data model should actually look, how a multi-agent pipeline should hand off work and recover from failure, how to keep an AI system's answers traceable back to real sources instead of just plausible-sounding. That's shown up across what I've built — a campus placement platform rebuilt from scratch onto a cleaner relational schema, a fully local multi-agent assistant that never sends your data to a third party, and a research agent that cites every claim it makes.",
    "I'm currently focused on production-grade RAG and multi-agent orchestration (LangGraph, LangChain, vector databases), and open to remote freelance work where I can own a problem end-to-end.",
  ],
  currentlyBuilding:
    "Production RAG systems, multi-agent orchestration with LangGraph, and local-first LLM applications.",
  openToWork: "Open to remote freelance work",
  education: {
    degree: "M.Sc Information Technology",
    institution: "Dhirubhai Ambani University",
    year: "2027 (expected)",
  },
  email: "durgeshkhushlani@gmail.com",
  github: "https://github.com/durgeshkhushlani",
  linkedin: "https://www.linkedin.com/in/durgesh-khushlani-912366324/",
  ctaLabel: "Let's talk",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
