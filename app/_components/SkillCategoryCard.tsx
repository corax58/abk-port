import { getSkillBySlug } from "@/data/skills";
import { cn } from "@/lib/utils";
import { SkillCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ToolCardProps {
  skillCategory: SkillCategory;
}
const SkillCategoryCard = ({
  skillCategory: { skillSlugs, title },
}: ToolCardProps) => {
  return (
    <div className=" border rounded-xs overflow-hidden">
      <div className="w-full p-4 border-b bg-secondary">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-4 p-4 ">
        {skillSlugs.map((slug) => {
          const skill = getSkillBySlug(slug);
          if (!skill) return null;
          return (
            <Link
              key={slug}
              href={`/projects?tools=${slug}`}
              aria-label={`Filter projects by ${skill.name}`}
              className="flex flex-col items-center gap-2 group "
            >
              <div className="  h-min  border-border border rounded-xs dark:bg-secondary p-4 overflow-clip">
                <div className="relative flex items-center justify-center">
                  <div className="bg-white size-10 absolute blur-[55px] group-hover:blur-2xl"></div>
                  <Image
                    src={skill.img}
                    className={cn(
                      `size-14 rounded-xs group-hover:scale-110 transition-all z-10`,
                      skill.invertDark && "",
                    )}
                    alt={skill.name}
                    width={54}
                    height={54}
                  ></Image>
                </div>
              </div>
              <p className="text-sm ">{skill.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
