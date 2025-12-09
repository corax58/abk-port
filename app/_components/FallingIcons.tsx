"use client";
import { tools } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const FallingIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="absolute animate-fall"
      style={{
        animationDuration: `${Math.random() * 3 + 2}s`,
        left: `${Math.random() * 100}vw`,
        fontSize: `${Math.random() * 50 + 20}px`,
      }}
    >
      {children}
    </div>
  );
};

const FallingTechIconsAnimation = () => {
  return (
    <div className="relative flex-1  flex h-24  overflow-visible ">
      {tools.map((tool, index) => (
        <FallingIcon key={index}>
          <div className=" bg-white size-12 p-2 flex items-center justify-center relative shadow border rounded-2xl overflow-hidden">
            <Image fill src={tool.img} alt={tool.name} />
          </div>
        </FallingIcon>
      ))}
      {tools.map((tool, index) => (
        <FallingIcon key={index}>
          <div className=" bg-white size-14 p-2 flex items-center justify-center relative shadow border rounded-2xl overflow-hidden">
            <Image fill src={tool.img} alt={tool.name} />
          </div>
        </FallingIcon>
      ))}
      {tools.map((tool, index) => (
        <FallingIcon key={index}>
          <div className=" bg-white size-20 p-2 flex items-center justify-center relative shadow border rounded-2xl overflow-hidden">
            <Image fill src={tool.img} alt={tool.name} />
          </div>
        </FallingIcon>
      ))}
      {tools.map((tool, index) => (
        <FallingIcon key={index}>
          <div className=" bg-white size-2 p-2 flex items-center justify-center relative shadow border rounded-2xl overflow-hidden">
            <Image fill src={tool.img} alt={tool.name} />
          </div>
        </FallingIcon>
      ))}
    </div>
  );
};

export default FallingTechIconsAnimation;
