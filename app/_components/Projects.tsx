"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="skills" className="py-20  bg-secondary  w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Experience" subtitle="Professional" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Here is collect of projects I worked on or controbuted to.
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-5"></div>
      </div>
    </section>
  );
};

export default Projects;
