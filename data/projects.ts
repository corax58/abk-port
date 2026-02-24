import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Time Delivery",
    description:
      "A high-performance food delivery marketplace allowing users to explore menus and order from various restaurants. Features robust localization support for bi-directional layouts (LTR/RTL).",
    projectSource: "Venas Technologies",
    status: "inProgress",
    imgSrc: "/assets/projects/time.png",
    alt: "Screenshot of the Time Delivery application interface",
    contribution:
      "Spearheaded the frontend development, architecting both static and complex dynamic routes. Engineered a comprehensive internationalization (i18n) system to ensure UI consistency across English, Pashto, and Dari, while optimizing load times for a seamless user experience.",
    toolsId: ["react", "nextjs", "tailwind", "typescript"],
  },
  {
    title: "Venas Technologies",
    description:
      "A corporate web presence utilizing a Headless CMS and Incremental Static Regeneration (ISR) to achieve top-tier SEO rankings and lightning-fast performance.",
    projectSource: "Venas Technologies",
    liveLink: "https://www.venastechnology.com/",
    status: "live",
    imgSrc: "/assets/projects/venas.png",
    alt: "Venas Technologies corporate website homepage",
    contribution:
      "Developed modular components and integrated Prismic CMS for dynamic content management. Implemented complex UI micro-interactions using Framer Motion and audited Core Web Vitals to maximize search engine visibility.",
    toolsId: ["nextjs", "tailwind", "prismic", "framer"],
  },
  {
    title: "Doxiverse | AI for Healthcare",
    description:
      "A centralized hub for discovering healthcare AI tools, featuring real-time updates and a community-driven review system.",
    projectSource: "Venas Technologies",
    liveLink: "https://doxiverse.com/",
    status: "live",
    imgSrc: "/assets/projects/doxiverse.png",
    alt: "Doxiverse healthcare AI platform dashboard",
    contribution:
      "Delivered high-fidelity UI implementation from design mockups. Handled third-party API integrations and executed performance tuning to ensure smooth navigation through large datasets.",
    toolsId: ["nextjs", "tailwind"],
  },
  {
    title: "Iqra-Net",
    description:
      "A comprehensive EdTech platform facilitating Islamic learning through structured courses and live one-on-one mentorship sessions.",
    projectSource: "Beseerah LLC",
    status: "inProgress",
    imgSrc: "/assets/projects/beseerah.png",
    alt: "Iqra-Net e-learning platform hero section",
    contribution:
      "Translated UX designs into responsive, pixel-perfect code. Optimized asset delivery and component rendering to support real-time interaction features.",
    toolsId: ["nextjs", "tailwind"],
  },
];
