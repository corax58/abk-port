"use client";
import { SkillCategories } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCategoryCard";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="py-20  border-y  w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Skills" subtitle="Technical" />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            My preferred stack for building reliable, high-performance web
            applications.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SkillCategories.map((skill, index) => (
            <SkillCard key={index} skillCategory={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
