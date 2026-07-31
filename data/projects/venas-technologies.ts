import { Project } from "@/types";

export const venasTechnologies: Project = {
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
};
