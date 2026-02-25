"use client";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import AnimationContainer from "./AnimationContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";
const Hero = () => {
  return (
    <div className="min-h-screen  w-full flex items-center justify-center relative ">
      <AnimatedGridPattern
        // numSquares={6}
        maxOpacity={0.1}
        // duration={10}
        // repeatDelay={10}
        className={cn(
          "mask-[radial-gradient(400px_circle_at_center,black,transparent)] md:mask-[radial-gradient(700px_circle_at_center,black,transparent)]",
          "inset-0 w-full h-dvh inset-y-[-15%] md:inset-y-[-30%]  -z-10 ",
        )}
      />
      <MaxWidthWrapper className="">
        <div className="flex flex-col items-center justify-center w-full text-center bg-linear-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4 mt-4"
            >
              <Badge
                variant="outline"
                className=" px-3 relative shadow-sm dark:bg-black bg-white text-black dark:text-white"
              >
                <span className="text-sm text-muted-foreground">
                  Available for freelance & contract work
                </span>
                <BorderBeam duration={20} size={25} className="m-1" />
              </Badge>
            </motion.div>

            <h1 className="text-foreground text-center py-6 text-5xl font-bold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl leading-[1.15]! w-full font-heading">
              Hi, I&apos;m <AuroraText speed={3}>Abubeker</AuroraText>
            </h1>

            <p className="mb-12 text-lg  text-muted-foreground md:text-xl text-balance  relative max-w-3xl">
              A{" "}
              <Highlighter
                action="underline"
                color="#FF9800"
                animationDuration={1000}
              >
                <span className="pr-2">full-stack </span>
              </Highlighter>
              developer specializing in building high-performance, scalable web
              applications using{" "}
              <Highlighter
                action="highlight"
                color="#007acc"
                animationDuration={1000}
              >
                <span className=" text-white">TypeScript.</span>
              </Highlighter>
              From dashboards to internal tools, I focus on clean architecture,
              great UX, and production-ready solutions.
            </p>

            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
              <Button asChild>
                <Link href="#experience" className="flex items-center">
                  View My Work
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="#contact" className="flex items-center">
                  Hire Me
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
