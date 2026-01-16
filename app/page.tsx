import AboutMe from "./_components/AboutMe";
import ContactMe from "./_components/ContactMe";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pb-[500px]">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
