import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Venas Technologies",
    description:
      "Corporate site for a tech company — built on a headless CMS with ISR so the content team can move fast without touching code, and Google actually finds it.",
    projectSource: "Venas Technologies",
    liveLink: "https://www.venastechnology.com/",
    status: "live",
    imgSrc: "/assets/projects/venas.png",
    alt: "Venas Technologies corporate website homepage",
    contribution:
      "Built the component system and wired up Prismic for content management. Added Framer Motion interactions throughout, then audited Core Web Vitals until the numbers were worth showing off.",
    toolsId: ["nextjs", "tailwind", "prismic", "framer"],
  },
  {
    title: "Doxiverse | AI for Healthcare",
    description:
      "A discovery platform for healthcare AI tools — think a curated directory with real-time updates and reviews from people actually using the tools.",
    projectSource: "Venas Technologies",
    liveLink: "https://doxiverse.com/",
    status: "live",
    imgSrc: "/assets/projects/doxiverse.png",
    alt: "Doxiverse healthcare AI platform dashboard",
    contribution:
      "Took the designs from mockup to production, handled third-party API integrations, and tuned performance so browsing through a large dataset doesn't feel like it.",
    toolsId: ["nextjs", "tailwind"],
  },
  {
    title: "Astrah OS",
    description:
      "A WhatsApp-native business OS for GCC companies — CRM, sales workflows, follow-ups, and payments, all in one place. Built for operators, not just tech teams.",
    projectSource: "Venas Technologies",
    status: "live",
    imgSrc: "/assets/projects/astrah.png",
    liveLink: "http://astrah.net/",
    alt: "Astrah OS business operating system interface",
    contribution:
      "Owned the frontend end-to-end — from design decisions down to the last pixel. Handled SEO, iterated on real user feedback, and kept performance tight throughout.",
    toolsId: ["nextjs", "tailwind", "typescript"],
  },
  {
    title: "Time Delivery",
    description:
      "A food delivery marketplace where users can browse menus and order across restaurants. Fully localized with LTR/RTL support for Arabic, Pashto, and Dari speakers.",
    projectSource: "Venas Technologies",
    status: "inProgress",
    imgSrc: "/assets/projects/time.png",
    alt: "Screenshot of the Time Delivery application interface",
    contribution:
      "Led the frontend from scratch — static pages, complex dynamic routes, and a full i18n system that keeps the UI consistent across three languages without breaking layouts.",
    toolsId: ["react", "nextjs", "tailwind", "typescript"],
  },
  {
    title: "Iqra-Net",
    description:
      "An EdTech platform for Islamic learning — structured courses and live one-on-one sessions with mentors, in one place.",
    projectSource: "Beseerah LLC",
    status: "inProgress",
    imgSrc: "/assets/projects/beseerah.png",
    alt: "Iqra-Net e-learning platform hero section",
    contribution:
      "Turned UX designs into responsive code and optimized asset delivery so real-time features actually feel real-time.",
    toolsId: ["nextjs", "tailwind"],
  },
];
