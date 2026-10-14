export const site = {
  name: "Durgesh Khushlani",
  logoMark: "DK",
  roles: ["AI Engineer", "Backend Developer"],
  tagline: "I build systems that think.",
  shortBio:
    "I'm Durgesh — an AI Engineer and Backend Developer who builds systems that solve real problems, not just demos. I care about system design: how the pieces fit together, not just whether a feature works. Currently building production-grade multi-agent and RAG systems with LangGraph and LangChain.",
  longBio: [
    "I’m an AI Engineer and Backend Developer who builds production-grade software, with a focus on system design and reliable architecture. I’m pursuing an M.Sc in Information Technology and build full working systems alongside my studies.",
    "My work spans RAG pipelines, multi-agent systems, and full-stack web platforms — from the data model and APIs to the AI layer on top. I care about systems that are traceable, dependable, and built to be maintained.",
    "I’m open to remote freelance projects where I can own a problem end-to-end, from design through deployment.",
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
