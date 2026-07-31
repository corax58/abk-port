import { Project } from "@/types";

export const astrahOs: Project = {
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
};
