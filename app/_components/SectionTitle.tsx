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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col text-7xl font-black items-center",
        className
      )}
    >
      <motion.div
        className="bg-linear-to-b from-foreground/35 text-transparent  to-transparent  bg-clip-text"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        {subtitle}
      </motion.div>
      <div className="-mt-5 text-primary">{title}</div>
    </motion.div>
  );
};

export default SectionTitle;
