import { getSkillBySlug } from "@/data/skills";
import { Project } from "@/types";
import { SquareTerminal, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="relative w-full aspect-video">
        <Image
          src={project.imgSrc}
          alt={project.alt}
          fill
          className="rounded-3xl"
        ></Image>
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
                  <div className="  h-min  border-border border rounded-2xl p-2 overflow-clip">
                    <div className="relative ">
                      <Image
                        src={tool.img}
                        className={`size-8 rounded-md hover:scale-110 transition-all `}
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
