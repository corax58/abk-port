import { ExperienceItem, ProjectItem } from "@/types";

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    project: "Internal Analytics Dashboard",
    company: "Tech Company (Confidential)",
    role: "Frontend Developer (Next.js/React)",
    period: "2024 - Present",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "Recharts",
    ],
    description:
      "A high-performance internal dashboard used by the operations team to visualize real-time data and manage inventory workflows.",
    contributions: [
      "Migrated legacy React components to Next.js App Router for improved performance.",
      "Implemented a reusable data-table component with complex filtering and sorting.",
      "Integrated secure REST API endpoints with proper error handling and retry logic.",
      "Reduced initial page load time by 40% using Server Components and image optimization.",
      "Established a strict TypeScript strict-mode codebase to reduce runtime errors.",
    ],
    impact: [
      "Improved daily active user efficiency by roughly 25%.",
      "Standardized UI consistency across the platform using a custom design system.",
    ],
  },
  {
    project: "E-Commerce Customer Portal",
    company: "Tech Company (Confidential)",
    role: "React Developer",
    period: "2023 - 2024",
    techStack: ["React", "Redux Toolkit", "Styled Components", "Firebase"],
    description:
      "A customer-facing portal allowing users to track orders, manage subscriptions, and view billing history.",
    contributions: [
      "Built the entire 'My Account' section from scratch using React hooks.",
      "Optimized state management by refactoring from Context API to Redux Toolkit.",
      "Implemented responsive design ensuring 100% mobile compatibility.",
      "Collaborated with backend engineers to define JSON schema for order history.",
    ],
    impact: [
      "Reduced customer support tickets related to order tracking by 15%.",
      "Achieved a 95+ Lighthouse accessibility score.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "TaskFlow Pro",
    description:
      "A collaborative project management tool featuring drag-and-drop Kanban boards, real-time updates, and team workspaces. Built with a focus on optimistic UI updates.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Supabase", "dnd-kit"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/800/600?grayscale",
  },
  {
    title: "DevBlog Platform",
    description:
      "A high-performance MDX-based blogging platform for developers. Features syntax highlighting, dark mode, and SEO optimization out of the box.",
    techStack: ["Next.js", "MDX", "Contentlayer", "Tailwind Typography"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/800/601?grayscale",
  },
  {
    title: "CryptoWatch Dashboard",
    description:
      "Real-time cryptocurrency tracker utilizing the CoinGecko API. Features interactive charts and a personalized watchlist persisted in local storage.",
    techStack: ["React", "Vite", "Recharts", "Zustand", "Axios"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/800/602?grayscale",
  },
];
