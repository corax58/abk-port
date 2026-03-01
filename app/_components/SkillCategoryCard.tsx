import { getSkillBySlug } from "@/data/skills";
import { cn } from "@/lib/utils";
import { SkillCategory } from "@/types";
import Image from "next/image";
import React from "react";

interface ToolCardProps {
  skillCategory: SkillCategory;
}
const SkillCategoryCard = ({
  skillCategory: { skillSlugs, title },
}: ToolCardProps) => {
  return (
    <div className=" border rounded-2xl overflow-hidden">
      <div className="w-full p-4 border-b bg-secondary">
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div className="flex flex-wrap gap-4 p-4 ">
        {skillSlugs.map((slug) => {
          const skill = getSkillBySlug(slug);
          if (!skill) return null;
          return (
            <div key={slug} className="flex flex-col items-center gap-2 ">
              <div className="  h-min  border-border border rounded-2xl dark:bg-secondary p-2 overflow-clip">
                <div className="relative ">
                  <Image
                    src={skill.img}
                    className={cn(
                      `size-14 rounded-2xl hover:scale-110 transition-all `,
                      skill.invertDark && "dark:invert",
                    )}
                    alt={skill.name}
                    width={54}
                    height={54}
                  ></Image>
                </div>
              </div>
              <p className="text-sm ">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
