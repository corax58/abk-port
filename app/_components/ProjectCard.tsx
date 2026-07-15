import { getSkillBySlug } from "@/data/skills";
import { Project } from "@/types";
import { Eye, Link, SquareTerminal, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 border rounded-xs overflow-hidden bg-background"
      >
        <div className="relative w-full min-h-[280px] max-md:border-b md:border-r">
          <Image
            src={project.featuredImage}
            alt={project.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-primary font-semibold tracking-wide mb-2">
            {project.projectSource}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className=" border p-3 rounded-xs mb-4 flex items-start gap-3 bg-secondary">
            <p className="text-sm">
              <span className="font-semibold">Role & Contribution — </span>
              {project.contribution}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold flex items-center gap-2 mb-2">
              <SquareTerminal size={16} className="text-pink-600" />
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {project.toolsId.map((toolId) => {
                const tool = getSkillBySlug(toolId);
                if (!tool) return null;
                return (
                  <Image
                    key={toolId}
                    src={tool.img}
                    className={cn(
                      "size-8 hover:scale-110 transition-all",
                      tool.invertDark && "dark:invert",
                    )}
                    alt={tool.name}
                    title={tool.name}
                    width={32}
                    height={32}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center sm:justify-end gap-3">
            {project.liveLink && (
              <Button asChild className="rounded-xs gap-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link />
                  Visit Live Site
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              className="rounded-xs gap-2 hover:bg-primary hover:text-primary-foreground transition-colors! duration-300 "
              onClick={() => setOpen(true)}
            >
              <Eye />
              View Project
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "rounded-xs sm:max-w-3xl max-h-[90vh] overflow-y-auto",
            "[scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]",
            "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full",
          )}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          </DialogHeader>

          <Carousel opts={{ loop: project.images.length > 1 }}>
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full aspect-video border rounded-xs overflow-hidden">
                    <Image
                      src={image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="rounded-xs left-3 bg-background!" />
                <CarouselNext className="rounded-xs right-3 bg-background!" />
              </>
            )}
          </Carousel>

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-semibold flex items-center gap-2 mb-2">
                <SquareTerminal size={16} className="text-pink-600" />
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {project.toolsId.map((toolId) => {
                  const tool = getSkillBySlug(toolId);
                  if (!tool) return null;
                  return (
                    <Image
                      key={toolId}
                      src={tool.img}
                      className={cn(
                        "size-8 hover:scale-110 transition-all",
                        tool.invertDark && "dark:invert",
                      )}
                      alt={tool.name}
                      title={tool.name}
                      width={32}
                      height={32}
                    />
                  );
                })}
              </div>
            </div>

            {project.liveLink && (
              <Button asChild className="rounded-xs gap-2 shrink-0">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link />
                  Visit Live Site
                </a>
              </Button>
            )}
          </div>

          <p className="text-sm text-primary font-semibold tracking-wide">
            {project.projectSource}
          </p>
          <div className="text-sm text-muted-foreground [&>p]:mb-3 last:[&>p]:mb-0">
            <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
          </div>

          <div className="bg-background border p-3 rounded-xs flex items-start gap-3">
            <div className="border bg-secondary rounded-xs p-2 shrink-0">
              <User size={16} className="text-primary" />
            </div>
            <p className="text-sm">
              <span className="font-semibold">Role & Contribution — </span>
              {project.contribution}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
