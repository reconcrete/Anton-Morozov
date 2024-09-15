"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import type { Project } from "@entities/projects";

import { getRandomTilt } from "../../utils";

type ProjectCardProps = Project;

export const ProjectCard: React.FC<ProjectCardProps> = (project) => {
  const projectCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectCardRef.current) {
      const randomTilt = getRandomTilt();

      setTimeout(() => {
        if (!projectCardRef.current) return;

        const rotationTransform = `rotate(${randomTilt}deg)`;
        projectCardRef.current!.style.transform = rotationTransform;
      }, 500);
    }
  }, []);

  return (
    <div className="flex gap-5 rounded-lg border-2 border-gray-500 p-4 dark:border-gray-300">
      <div className="flex items-center justify-center ">
        <div
          ref={projectCardRef}
          className="lg flex aspect-[3/4] w-[70px] items-center justify-center rounded border-2 border-gray-500 transition-all duration-500 dark:border-gray-300"
        >
          {project.iconSvg}
        </div>
      </div>

      <div className="w-full">
        <Link href={project.url} target="_blank">
          <h2 className="text-xl font-bold hover:underline">{project.name}</h2>
        </Link>
        <p className="text-base">{project.description}</p>

        <div className="mt-4 flex items-center gap-3">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="rounded-lg bg-black px-2 py-1  text-white hover:underline dark:bg-white dark:text-black"
            >
              Live
            </Link>
          )}
          {project.codeUrl && (
            <Link href={project.codeUrl} target="_blank" className="hover:underline">
              Code
            </Link>
          )}
          {project.blogPostUrl && (
            <Link href={project.blogPostUrl} target="_blank" className="hover:underline">
              Read
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
