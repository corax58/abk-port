import { Project } from "@/types";

export const doxiverseAiForHealthcare: Project = {
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
};
