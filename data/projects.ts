import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Venas Technologies",
    description:
      "Corporate site for a tech company — built on a headless CMS with ISR so the content team can move fast without touching code, and Google actually finds it.",
    fullDescription: `Venas Technologies already had a corporate site, but it needed a real overhaul — a new design, updated interactions, a way for the content team to publish blog posts without needing a developer, and performance/SEO numbers that actually held up to scrutiny. I worked on the existing site to bring it up to that standard.

### Redesign
Rebuilt the site's design on top of the existing Next.js foundation — a refreshed visual identity and layout across the corporate pages, implemented as a proper component system rather than one-off page templates.

### Animations
Replaced the old, static interactions with updated **Framer Motion** animations throughout the site, adding motion and polish to page transitions, scroll-based reveals, and interactive elements.

### Blogging with Prismic CMS
Introduced **Prismic** as a headless CMS specifically to support blogging — giving the content team a way to write, edit, and publish blog content directly, without touching code or waiting on engineering for every post.

### Performance & SEO
Spent significant time auditing and fixing the fundamentals so the site would perform well both for users and in search:
- Achieved **100/100 on SEO**
- Achieved **100/100 on Performance**
- Achieved **100/100 on Accessibility**

This meant addressing Core Web Vitals, semantic markup, proper metadata, image optimization, and accessibility issues (contrast, ARIA attributes, keyboard navigation) one by one until the site scored cleanly across the board.

### Tech Stack
- **Next.js** for the frontend, building on the site's existing foundation
- **Tailwind CSS** for styling
- **Prismic** as the headless CMS for blog content
- **Framer Motion** for animations and interactions`,
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
    title: "Time Platform",
    description:
      "A multi-app delivery and marketplace platform — customer app, restaurant management portal, and admin dashboard — covering food, e-commerce, and tailoring services. Fully localized in English, Pashto, and Dari with full LTR/RTL support.",
    fullDescription: `Time Platform is a full delivery and marketplace ecosystem made up of three separate web applications, all of which I led the frontend for from scratch — architecture, routing, state management, and UI — for **Venas Technologies**.

### Customer Web App
The main customer-facing app, where users browse and order across two distinct verticals in one unified experience:
- **Food delivery** — browsing restaurants, menus, and placing orders
- **E-commerce** — shopping for products from vendors on the platform

Both sections share the same design system and data layer but have their own dynamic routing, filtering, and checkout flows.

A robust i18n system that supported:
- **English, Pashto, and Dari**
- Full **LTR/RTL** layout switching

### Restaurant Web App
A management dashboard built for restaurant owners and staff to run their business on the platform:
- Menu creation and editing
- Order management and status tracking
- Revenue and sales overview
- Other day-to-day restaurant operations

### Admin Portal
A general management system for overseeing the entire platform, built with **strict role- and permission-based access control** — different roles see different views, data, and actions. Key features include:
- **Live delivery map** with real-time tracking of restaurants, e-commerce vendors, and tailors
- Vendor, restaurant, and tailor management
- Order oversight across the whole system
- System-wide settings and configuration

### Tech Highlights
- Built entirely with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**
- **React Query** for data fetching, caching, and keeping state in sync across all three apps
- Complex dynamic routing for browsing, ordering, and management flows across food, e-commerce, and tailoring domains

All three apps have been completed and delivered to the client, and are pending go-live.`,
    projectSource: "Venas Technologies",
    status: "completed", // delivered to client, not yet live — swap to "inProgress" if that fits your status enum better
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
    alt: "Screenshot of the Time Platform application interface",
    contribution:
      "Led the frontend from scratch across three separate apps — customer (food + e-commerce), restaurant management, and an admin portal with role-based access and live vendor tracking — plus a full i18n system (English, Pashto, Dari) with RTL support using React Query for data fetching and caching.",
    toolsId: ["react", "nextjs", "tailwind", "typescript", "react-query"],
  },
  {
    title: "Astrah OS",
    description:
      "A WhatsApp-native business OS for GCC companies — CRM, sales workflows, follow-ups, and payments, all in one place. Built for operators, not just tech teams.",
    fullDescription: `Astrah OS brings CRM, sales workflows, follow-ups, and payments into a single WhatsApp-native operating system built for GCC businesses. I owned the frontend end-to-end — from translating design decisions into a cohesive UI down to pixel-level polish — since the product is aimed at operators who expect a clean, dependable interface rather than a typical dev tool.

### UI & Micro-interactions
Beyond the core interface, I layered in subtle micro-interactions throughout the product — small hover states, transitions, and feedback moments that make the UI feel responsive and considered rather than static, without getting in the way of an operator trying to move fast.

### Localization
Astrah OS supports **Arabic and English**, with full **RTL layout support** alongside the standard LTR experience — built and maintained so both languages feel native rather than like an afterthought bolted onto an English-first design.

### Client Collaboration
The frontend was shaped through **constant, tight communication with the client** — a continuous loop of feedback and iteration rather than a single handoff. Design decisions, UI details, and feature behavior were refined repeatedly based on real client input throughout the build.

### SEO, Feedback & Performance
Alongside building the UI, I handled SEO for the marketing surfaces and kept iterating on the product based on real user feedback, all while keeping performance tight as features grew.

### Tech Stack
- **Next.js** for the frontend
- **Tailwind CSS** for styling
- **TypeScript** throughout`,
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
    title: "Doxiverse | AI for Healthcare",
    description:
      "A discovery platform for healthcare AI tools — think a curated directory with real-time updates and reviews from people actually using the tools.",
    fullDescription: `Doxiverse is a discovery platform that helps healthcare professionals find and evaluate AI tools relevant to their work. I joined the project mid-way through development, stepping in to implement designs, integrate third-party APIs, and improve performance across the platform.

### Design Implementation
Picked up in-progress design mockups and translated them into production-ready UI, keeping the existing product direction consistent while building out remaining screens and flows.

### API Integrations
Integrated several third-party APIs to power core functionality across the platform — search, filtering, and reviews — connecting the frontend to the data and services the directory relies on.

### Performance
A major focus of the work was performance. The directory holds a large, constantly growing dataset, and browsing needed to feel instant rather than like waiting on a database — so I worked on optimizations to keep the experience fast as the dataset scaled.

### Tech Stack
- **Next.js** for the frontend
- **Tailwind CSS** for styling`,
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
