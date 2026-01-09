export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    img: string;
  }[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Javascript",
        img: "/assets/icons/javascript.svg",
      },
      {
        name: "Typescript",
        img: "/assets/icons/typescript.svg",
      },
      {
        name: "Reactjs",
        img: "/assets/icons/react.svg",
      },
      {
        name: "NextJs",
        img: "/assets/icons/nextjs.svg",
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      {
        name: "Python",
        img: "/assets/icons/python.svg",
      },

      {
        name: "ExpressJs",
        img: "/assets/icons/expressjs.png",
      },
      {
        name: "Nodejs",
        img: "/assets/icons/nodejs.svg",
      },
    ],
  },
];
