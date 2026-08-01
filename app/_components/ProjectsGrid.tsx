"use client";
import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import { SkillCategories, getSkillBySlug } from "@/data/skills";
import { Input } from "@/components/ui/input";
import MultipleSelector, { Option } from "@/components/ui/multi-select";
import ProjectCard from "./ProjectCard";

const TOOLS_PARAM = "tools";
const QUERY_PARAM = "q";

const toolOptions: Option[] = Array.from(
  new Set(SkillCategories.flatMap((category) => category.skillSlugs)),
)
  .map((slug) => ({ value: slug, label: getSkillBySlug(slug)?.name ?? slug }))
  .sort((a, b) => a.label.localeCompare(b.label));

const ProjectsGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get(QUERY_PARAM) ?? "";
  const toolsParam = searchParams.get(TOOLS_PARAM) ?? "";

  const selectedTools = useMemo(
    () => (toolsParam ? toolsParam.split(",").filter(Boolean) : []),
    [toolsParam],
  );

  const selectedOptions = useMemo(
    () => toolOptions.filter((option) => selectedTools.includes(option.value)),
    [selectedTools],
  );

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTools =
        selectedTools.length === 0 ||
        project.toolsId.some((toolId) => selectedTools.includes(toolId));

      if (!matchesTools) return false;
      if (!search) return true;

      const toolNames = project.toolsId
        .map((toolId) => getSkillBySlug(toolId)?.name ?? "")
        .join(" ");

      const haystack = [
        project.title,
        project.description,
        project.projectSource,
        toolNames,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(search);
    });
  }, [query, selectedTools]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl w-full mx-auto items-start">
        <div className="relative w-full flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(e) => updateParams({ [QUERY_PARAM]: e.target.value })}
            placeholder="Search projects by name, tech, or description..."
            className="rounded-xs pl-9"
          />
        </div>

        <div className="w-full sm:w-64 sm:shrink-0">
          <MultipleSelector
            value={selectedOptions}
            options={toolOptions}
            onChange={(options) =>
              updateParams({
                [TOOLS_PARAM]: options.map((option) => option.value).join(","),
              })
            }
            placeholder="Filter by skills/tools..."
            hidePlaceholderWhenSelected
            className="rounded-xs"
            badgeClassName="rounded-xs"
            emptyIndicator={
              <p className="text-center text-sm text-muted-foreground">
                No matching tools.
              </p>
            }
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} compact />
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-muted-foreground py-16"
        >
          No projects match your search.
        </motion.p>
      )}
    </div>
  );
};

export default ProjectsGrid;
