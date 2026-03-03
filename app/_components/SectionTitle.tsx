"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}
const SectionTitle = ({ subtitle, title, className }: SectionTitleProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col text-5xl font-black items-center font-heading",
        className
      )}
    >
      <motion.p
        className="bg-linear-to-b from-foreground/35 text-transparent  to-transparent  bg-clip-text"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>
      <h2 className="-mt-5 text-primary">{title}</h2>
    </motion.header>
  );
};

export default SectionTitle;
