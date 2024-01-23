"use client";

import { ProjectCards } from "@widgets/projectCards";
import { ProjectDescription } from "@widgets/projectDescription";

export default function Projects() {
  return (
    <main className="flex h-[calc(100dvh-90px)] flex-col">
      <ProjectDescription />
      <ProjectCards />
    </main>
  );
}
