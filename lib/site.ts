const fallbackUrl = "http://localhost:3000";
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl;
const siteUrl = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;

export const SITE = {
  name: "Abubeker Abduljelil",
  title: "Abubeker Abduljelil — Full Stack TypeScript Developer",
  description:
    "Full Stack TypeScript developer crafting high-performance, scalable web applications with clean architecture and great UX.",
  url: siteUrl,
  locale: "en_US",
  socialImage: "/assets/image.png",
  author: {
    name: "Abubeker Abduljelil",
    email: "AbubekerCorax@gmail.com",
    phone: "+251916115888",
  },
} as const;
