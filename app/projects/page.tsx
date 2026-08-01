import type { Metadata } from "next";
import { Suspense } from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import SectionTitle from "../_components/SectionTitle";
import ProjectsGrid from "../_components/ProjectsGrid";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `A full list of projects built or contributed to by ${SITE.author.name}.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <MaxWidthWrapper className="py-32 flex flex-col gap-16 items-center">
      <div className="text-center">
        <SectionTitle title="Projects" subtitle="All" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Every project I have worked on or contributed to.
        </p>
      </div>

      <div className="w-full">
        <Suspense fallback={null}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
}
