"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [loaded, setLoaded] = useState(false);

  const filteredProjects = loaded ? projects : projects.slice(0, 3);
  return (
    <section id="experience" className="py-20  bg-secondary  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 items-center">
        <div className="text-center ">
          <SectionTitle title="Experience" subtitle="Professional" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Projects I have worked on or controbuted to.
          </motion.div>
        </div>

        <div className=" flex flex-col gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <Button
          className="rounded-xs"
          onClick={() => setLoaded((prev) => !prev)}
        >
          {loaded ? "Show Less" : "Load More"}
        </Button>
      </div>
    </section>
  );
};

export default Projects;
