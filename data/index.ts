export const tools = [
  {
    id: 0,
    name: "Javascript",
    img: "/assets/icons/javascript.svg",
  },
  {
    id: 1,
    name: "Typescript",
    img: "/assets/icons/typescript.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "/assets/icons/python.svg",
  },
  {
    id: 3,
    name: "Reactjs",
    img: "/assets/icons/react.svg",
    needRound: false,
  },
  {
    id: 4,
    name: "NextJs",
    img: "/assets/icons/nextjs.svg",
  },
  {
    id: 5,
    name: "ExpressJs",
    img: "/assets/icons/expressjs.png",
  },
  {
    id: 6,
    name: "Nodejs",
    img: "/assets/icons/nodejs.svg",
  },
  {
    id: 7,
    name: "MongoDb",
    img: "/assets/icons/mongodb.svg",
  },
  {
    id: 8,
    name: "Postgresql",
    img: "/assets/icons/postgresql.svg",
    needRound: false,
  },
  {
    id: 9,
    name: "Mysql",
    img: "/assets/icons/mysql.svg",
  },
  {
    id: 10,
    name: "Tailwind",
    img: "/assets/icons/tailwind.svg",
  },
  {
    id: 11,
    name: "React Query",
    img: "/assets/icons/react-query.svg",
  },
  {
    id: 12,
    name: "Redux",
    img: "/assets/icons/redux.svg",
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "Next.js (App Router)",
      "React (RSC, Suspense)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Query",
      "Shadcn/UI",
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      "Node.js",
      "Nestjs",
      "Prisma ORM",
      "PostgreSQL",
      "Git & GitHub",
      "Vercel Deployment",
      "CI/CD Basics",
      "Jest/Testing Library",
    ],
  },
];
