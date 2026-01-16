import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Enterprise Analytics Dashboard",
    description:
      "A high-performance analytics platform designed for real-time financial monitoring, featuring interactive heatmaps and custom reporting engines.",
    projectSource: "Venas Technologies",
    liveLink: "https://github.com/example/enterprise-analytics", // Placeholder URL
    status: "live",
    imgSrc: "/assets/projects/1.png",
    alt: "Screenshot of the Enterprise Analytics Dashboard showing financial data tables",
    contribution:
      "As Lead Full-stack Developer, I architected the core data pipeline and built a modular component library using React and Tailwind. I focused on optimizing data fetching strategies to reduce initial load time by 60%.",
    toolsId: ["react", "nextjs", "tailwind", "typescript"],
  },
  {
    title: "Quantum Supply Chain Optimizer",
    description:
      "An AI-driven logistics engine that predicts inventory shortages and optimizes delivery routes using real-time GPS telemetry.",
    projectSource: "Venas Technologies",
    liveLink: "https://github.com/example/supply-optimizer",
    status: "live",
    imgSrc: "/assets/projects/2.png",
    alt: "Visual representation of supply chain nodes and delivery routes",
    contribution:
      "Engineered the predictive modeling interface and integrated Mapbox for real-time fleet tracking. Implemented WebSockets to handle high-frequency data updates.",
    toolsId: ["react", "nodejs", "python", "mapbox"],
  },
  {
    title: "SecureHealth Patient Portal",
    description:
      "A HIPAA-compliant healthcare portal allowing patients to securely access records, book appointments, and consult with doctors via encrypted video.",
    projectSource: "Venas Technologies",
    liveLink: "https://github.com/example/secure-health",
    status: "inProgress",
    imgSrc: "/assets/projects/3.png",
    alt: "Patient dashboard showing medical history and upcoming appointments",
    contribution:
      "Developed the end-to-end encryption module for messaging and built the responsive appointment scheduling system with automated SMS reminders.",
    toolsId: ["nextjs", "postgresql", "aws", "typescript"],
  },
  {
    title: "NeoTrade Crypto Exchange",
    description:
      "A high-frequency trading platform for digital assets featuring low-latency order execution and advanced technical analysis charting.",
    projectSource: "Venas Technologies",
    liveLink: "https://github.com/example/neotrade",
    status: "live",
    imgSrc: "/assets/projects/4.png",
    alt: "Trading interface with candlesticks charts and order books",
    contribution:
      "Optimized the rendering of the order book component to handle 10k+ updates per second without UI lag. Designed the microservices architecture for the wallet system.",
    toolsId: ["react", "go", "redis", "docker"],
  },
  {
    title: "EduStream Learning LMS",
    description:
      "An enterprise-grade Learning Management System focused on interactive video content and automated grading for corporate training.",
    projectSource: "Venas Technologies",
    liveLink: "https://github.com/example/edustream",
    status: "inProgress",
    imgSrc: "/assets/projects/5WS.png",
    alt: "LMS dashboard showing course progress and quiz results",
    contribution:
      "Built the custom video player with bookmarking capabilities and integrated a scalable PDF generation service for course certifications.",
    toolsId: ["react", "firebase", "tailwind", "node"],
  },
];
