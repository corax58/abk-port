import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Venas Technologies",
    description:
      "Corporate site for a tech company — built on a headless CMS with ISR so the content team can move fast without touching code, and Google actually finds it.",
    fullDescription:
      "Venas Technologies needed a corporate site that could keep up with a fast-moving content team without engineering becoming a bottleneck for every copy change. I built a component system in Next.js backed by Prismic as a headless CMS, using Incremental Static Regeneration so pages stay fast while content updates flow through automatically. Framer Motion powers the interactions throughout the site, and I spent extra time auditing Core Web Vitals and SEO fundamentals so the site performs well both for users and in search rankings.",
    projectSource: "Venas Technologies",
    liveLink: "https://www.venastechnology.com/",
    status: "live",
    featuredImage: "/assets/projects/venas-main.png",
    images: [
      "/assets/projects/venas-1.png",
      "/assets/projects/venas-2.png",
      "/assets/projects/venas-3.png",
    ],
    alt: "Venas Technologies corporate website homepage",
    contribution:
      "Built the component system and wired up Prismic for content management. Added Framer Motion interactions throughout, then audited Core Web Vitals until the numbers were worth showing off.",
    toolsId: ["nextjs", "tailwind", "prismic", "framer"],
  },
  {
    title: "Doxiverse | AI for Healthcare",
    description:
      "A discovery platform for healthcare AI tools — think a curated directory with real-time updates and reviews from people actually using the tools.",
    fullDescription:
      "Doxiverse is a discovery platform that helps healthcare professionals find and evaluate AI tools relevant to their work. I took the product from design mockups to a production build, integrating several third-party APIs to power search, filtering, and reviews. A big focus of the work was performance — the directory holds a large, constantly growing dataset, and browsing it needed to feel instant rather than like waiting on a database.",
    projectSource: "Venas Technologies",
    liveLink: "https://doxiverse.com/",
    status: "live",
    featuredImage: "/assets/projects/doxiverse-main.png",
    images: [
      "/assets/projects/doxiverse-1.png",
      "/assets/projects/doxiverse-2.png",
      "/assets/projects/doxiverse-3.png",
      "/assets/projects/doxiverse-4.png",
    ],
    alt: "Doxiverse healthcare AI platform dashboard",
    contribution:
      "Took the designs from mockup to production, handled third-party API integrations, and tuned performance so browsing through a large dataset doesn't feel like it.",
    toolsId: ["nextjs", "tailwind"],
  },
  {
    title: "Astrah OS",
    description:
      "A WhatsApp-native business OS for GCC companies — CRM, sales workflows, follow-ups, and payments, all in one place. Built for operators, not just tech teams.",
    fullDescription:
      "Astrah OS brings CRM, sales workflows, follow-ups, and payments into a single WhatsApp-native operating system built for GCC businesses. I owned the frontend end-to-end, from translating design decisions into a cohesive UI down to pixel-level polish, since the product is aimed at operators who expect a clean, dependable interface rather than a typical dev tool. Alongside building the UI, I handled SEO for the marketing surfaces and kept iterating on the product based on real user feedback while keeping performance tight as features grew.",
    projectSource: "Venas Technologies",
    status: "live",
    featuredImage: "/assets/projects/astrah-main.png",
    images: [
      "/assets/projects/astrah-1.png",
      "/assets/projects/astrah-2.png",
      "/assets/projects/astrah-3.png",
      "/assets/projects/astrah-4.png",
    ],
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
    fullDescription:
      "Time Delivery is a food delivery marketplace connecting users with restaurants across multiple menus and vendors. I led the frontend from scratch, building static marketing pages alongside complex dynamic routes for browsing and ordering. The trickiest part was internationalization: the app needed to support Arabic, Pashto, and Dari, including full RTL layout support, without the UI breaking or drifting out of sync across languages as new features shipped.",
    projectSource: "Venas Technologies",
    status: "inProgress",
    featuredImage: "/assets/projects/time-main.png",
    images: [
      "/assets/projects/time-1.png",
      "/assets/projects/time-2.png",
      "/assets/projects/time-3.png",
      "/assets/projects/time-4.png",
      "/assets/projects/time-5.png",
      "/assets/projects/time-6.png",
      "/assets/projects/time-7.png",
    ],
    alt: "Screenshot of the Time Delivery application interface",
    contribution:
      "Led the frontend from scratch — static pages, complex dynamic routes, and a full i18n system that keeps the UI consistent across three languages without breaking layouts.",
    toolsId: ["react", "nextjs", "tailwind", "typescript"],
  },
  {
    title: "Iqra-Net",
    description:
      "An EdTech platform for Islamic learning — structured courses and live one-on-one sessions with mentors, in one place.",
    fullDescription:
      "Iqra-Net is an EdTech platform for Islamic learning that combines structured self-paced courses with live one-on-one mentor sessions. Working from UX designs, I built out the responsive frontend and paid close attention to asset delivery and loading performance, since the live session features need to feel real-time — any lag or jank in the surrounding UI would undercut the experience during an actual live call.",
    projectSource: "Beseerah LLC",
    status: "inProgress",
    featuredImage: "/assets/projects/beseerah.png",
    images: ["/assets/projects/beseerah.png"],
    alt: "Iqra-Net e-learning platform hero section",
    contribution:
      "Turned UX designs into responsive code and optimized asset delivery so real-time features actually feel real-time.",
    toolsId: ["nextjs", "tailwind"],
  },
];
