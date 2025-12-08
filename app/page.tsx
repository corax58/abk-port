import { cn } from "@/lib/utils";
import AnimatedBackground from "./_components/AnimatedBackground";
import Hero from "./_components/Hero";
import SectionTitle from "./_components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pb-[500px]">
      <AnimatedBackground
        numSquares={6}
        maxOpacity={0.2}
        duration={10}
        repeatDelay={10}
        className={cn(
          "mask-[radial-gradient(400px_circle_at_center,black,transparent)] md:mask-[radial-gradient(700px_circle_at_center,black,transparent)]",
          "inset-0 w-full h-dvh inset-y-[-15%] md:inset-y-[-30%]  -z-10 "
        )}
      />
      <Hero />
      <SectionTitle
        title="Experience"
        subtitle="Professional"
        className="text-5xl"
      />
    </main>
  );
}
