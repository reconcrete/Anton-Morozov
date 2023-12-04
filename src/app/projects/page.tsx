"use client";

import { useState } from "react";
import { projects } from "@/src/constants/index";
import { ProjectDescription } from "@/src/components/ProjectDescription";
import { ProjectCards } from "@/src/components/ProjectCards";

export default function Projects() {
  const [currentSelectedProject, setcurrentSelectedProject] = useState<(typeof projects)[number]>(projects[0]);

  return (
    <main className="flex h-[calc(100dvh-90px)] flex-col">
      <ProjectDescription project={currentSelectedProject} />

      <ProjectCards setCurrentSelectedProject={setcurrentSelectedProject} projects={projects} />
    </main>
  );
}
