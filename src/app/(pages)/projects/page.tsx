"use client";

import { ProjectCard } from "@widgets/projectCard";
import { projects } from "@entities/projects";

export default function Projects() {
  return (
    <main className="flex grid-cols-2 flex-col gap-4 pt-16 lg:grid lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </main>
  );
}
