import { cn } from "@/lib/utils";
import AnimatedBackground from "./_components/AnimatedBackground";
import { Hero } from "./_components/Hero";
import HeroComponent from "./_components/HeroComponent";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden ">
      <AnimatedBackground
        numSquares={6}
        maxOpacity={0.2}
        duration={10}
        repeatDelay={10}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,black,transparent)]",
          "inset-0 w-full h-dvh inset-y-[-30%] hidden md:block -z-10 "
        )}
      />
      <HeroComponent />
    </main>
  );
}
