export type Project = {
  name: string;
  oneLiner: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  year: string;
  status: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "HireSphere",
    oneLiner:
      "Campus placement management platform replacing spreadsheets and email chains.",
    description:
      "Lets placement admins run company drives with eligibility rules and custom forms, while students apply, track status, and manage resumes. Includes a scoped company portal, auto-close scheduling, email notifications, and Excel export. Currently mid-rebuild (v2): the original MERN prototype is archived, and the live system is being rebuilt on a new stack with a proper relational schema.",
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    liveUrl: "https://hiresphere-university.vercel.app/",
    githubUrl: "https://github.com/durgeshkhushlani/HireSphere",
    year: "2026",
    status: "In progress (v2 rebuild)",
    image: "/images/hiresphere.png",
  },
  {
    name: "Orbit",
    oneLiner:
      "Local-first multi-agent AI assistant that retrieves, summarizes, and acts on your files via natural language.",
    description:
      "Runs entirely on-device — local LLM inference via Ollama, local vector search via ChromaDB — so documents and conversations never leave your machine. A supervisor agent orchestrates specialist agents (retrieval, file management, document generation, email, web search) via LangGraph, with human-in-the-loop confirmation before any side-effecting action like moving a file or sending an email.",
    tech: ["Python", "FastAPI", "Ollama", "LangGraph", "LangChain", "ChromaDB"],
    githubUrl: "https://github.com/durgeshkhushlani/Orbit",
    year: "2026",
    status: "Active development",
  },
  {
    name: "CampusOne",
    oneLiner:
      "Unified digital campus management platform for students, faculty, and admins.",
    description:
      "Full-stack MERN capstone project — a digital ecosystem for academic environments covering student, faculty, and admin workflows in one platform.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "https://campus-one-dau.vercel.app",
    githubUrl: "https://github.com/durgeshkhushlani/CampusOne-Personal",
    year: "2025-2026",
    status: "Completed (academic capstone)",
    image: "/images/campusone.png",
  },
  {
    name: "Veritas",
    oneLiner:
      "Multi-agent research assistant that cross-verifies web sources before answering.",
    description:
      "Decomposes each question into focused sub-queries, retrieves and reads up to 5 sources per question, and cross-checks claims across sources — flagging contradictions and re-searching when needed. Every claim in the final answer is traced back to a citation, and the system is evaluated for faithfulness. Includes a guardrail that asks for clarification on ambiguous questions instead of guessing.",
    tech: ["Python", "LangGraph", "Streamlit"],
    githubUrl: "https://github.com/durgeshkhushlani/Veritas",
    year: "2026",
    status: "Currently building",
  },
];
