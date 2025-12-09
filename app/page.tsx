import { cn } from "@/lib/utils";
import AnimatedBackground from "./_components/AnimatedBackground";
import Hero from "./_components/Hero";
import SectionTitle from "./_components/SectionTitle";
import AboutMe from "./_components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pb-[500px]">
      <Hero />
      <AboutMe />
    </main>
  );
}
