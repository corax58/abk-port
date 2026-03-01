import { getSkillBySlug } from "@/data/skills";
import { Project } from "@/types";
import { Globe, Link, SquareTerminal, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div className="relative w-full aspect-video border rounded-3xl overflow-hidden">
        <Image src={project.imgSrc} alt={project.alt} fill className="" />
        <div className=" absolute bottom-5 px-5 w-full text-sm flex items-center gap-4">
          {project.status === "inProgress" && (
            <div className=" bg-orange-200 text-orange-500 border border-amber-600  w-fit  rounded-full px-3 font-bold hover:scale-105 transition-all py-1">
              In Progress
            </div>
          )}
          {project.status === "live" && (
            <div className=" bg-green-200 text-green-500 border border-green-600  w-fit  rounded-full px-3 font-bold hover:scale-105 transition-all py-1">
              Live
            </div>
          )}
          {project.liveLink && (
            <Button className="aspect-square bg-background border size-8 group transition-all">
              <a href={project.liveLink} target="_blank">
                <Link className="text-foreground  group-hover:text-white" />
              </a>
            </Button>
          )}
        </div>
      </div>
      <div className="w-full">
        <p className="text-3xl font-semibold mb-1">{project.title}</p>
        <p className="text-sm text-primary mb-2">{project.projectSource}</p>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="bg-sky-500/5 p-4 rounded-3xl border-l-4 border-blue-500 mb-4">
          <div className=" font-semibold flex items-center gap-2 mb-2">
            <User size={16} className="text-blue-600 fill-blue-600" />
            Role & Contribution
          </div>
          <p className="text-sm">{project.contribution}</p>
        </div>
        <div>
          <p className="font-semibold flex items-center gap-2 mb-2">
            <SquareTerminal size={16} className="text-pink-600" />
            Tools & Technologies
          </p>
          <div className="flex gap-4">
            {project.toolsId.map((toolId) => {
              const tool = getSkillBySlug(toolId);
              if (!tool) return null;
              return (
                <div key={toolId} className="flex flex-col items-center gap-2">
                  <div className="  h-min  border-border dark:bg-secondary border rounded-2xl p-2 overflow-clip">
                    <div className="relative ">
                      <Image
                        src={tool.img}
                        className={cn(
                          `size-8 rounded-md hover:scale-110 transition-all `,
                          tool.invertDark && "dark:invert",
                        )}
                        alt={tool.name}
                        width={32}
                        height={32}
                      ></Image>
                    </div>
                  </div>
                  <p className="text-sm ">{tool.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
