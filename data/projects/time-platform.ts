import { Project } from "@/types";

export const timePlatform: Project = {
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
};
