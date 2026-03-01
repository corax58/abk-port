import { SkillCategory } from "@/types";

export const SkillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skillSlugs: [
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "tailwind",
      "redux",
      "react-query",
      "framer",
    ],
  },
  {
    title: "Backend",
    skillSlugs: ["nestjs", "nodejs", "expressjs", "python", "flask"],
  },
  {
    title: "Database & Tools",
    skillSlugs: ["postgresql", "mongodb", "mysql", "prisma", "prismic"],
  },
];

export const skills = [
  {
    slug: "expressjs",
    name: "Express.js",
    img: "/assets/icons/expressjs.png",
  },
  {
    slug: "javascript",
    name: "Javascript",
    img: "/assets/icons/javascript.svg",
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    img: "/assets/icons/mongodb.svg",
  },
  {
    slug: "mysql",
    name: "MySQL",
    img: "/assets/icons/mysql.svg",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    img: "/assets/icons/nextjs.svg",
    invertDark: true,
  },
  {
    slug: "nodejs",
    name: "Node.js",
    img: "/assets/icons/nodejs.svg",
  },
  {
    slug: "flask",
    name: "Flask",
    img: "/assets/icons/flask.svg",
    invertDark: true,
  },
  {
    slug: "nestjs",
    name: "NestJs",
    img: "/assets/icons/nestjs.svg",
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    img: "/assets/icons/postgresql.svg",
  },
  {
    slug: "prisma",
    name: "Prisma",
    img: "/assets/icons/prisma.svg",
  },
  {
    slug: "python",
    name: "Python",
    img: "/assets/icons/python.svg",
  },
  {
    slug: "react-query",
    name: "React Query",
    img: "/assets/icons/react-query.svg",
  },
  {
    slug: "react",
    name: "React",
    img: "/assets/icons/react.svg",
  },
  {
    slug: "redux",
    name: "Redux",
    img: "/assets/icons/redux.svg",
  },
  {
    slug: "tailwind",
    name: "Tailwind",
    img: "/assets/icons/tailwind.svg",
  },
  {
    slug: "typescript",
    name: "Typescript",
    img: "/assets/icons/typescript.svg",
  },
  {
    slug: "prismic",
    name: "Prismic",
    img: "/assets/icons/prismic.svg",
  },
  {
    slug: "framer",
    name: "Framer Motion",
    img: "/assets/icons/framer.svg",
    invertDark: true,
  },
];
export function getSkillBySlug(slug: string) {
  return skills.find((skill) => skill.slug == slug);
}
