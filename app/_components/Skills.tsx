import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SKILLS } from "@/data";
import SectionTitle from "./SectionTitle";
import { tools } from "../../data";
import Image from "next/image";
import ToolBubble from "./ToolBubble";

export const Skills = () => {
  return (
    <section id="skills" className="py-20  border-y  w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Skills" subtitle="Skills" />
          <p className="text-secondary-foreground mt-4 max-w-2xl mx-auto">
            My preferred stack for building reliable, high-performance web
            applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {tools.map((tool) => (
            <ToolBubble
              key={tool.id}
              name={tool.name}
              imageLink={tool.img}
              needRound={tool.needRound}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
