import { Project } from "@/src/constants/index";
import { useEffect, useRef } from "react";

type ProjectDescriptionProps = { project: Project };

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ project }) => {
  const projectDescriptionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="project-description"
      ref={projectDescriptionRef}
      className="ml-auto hidden min-h-[30%] w-[60%] flex-1 gap-[50px] pt-[70px] transition-all duration-300 ease-in-out lg:flex"
    >
      <h1>{project.name}</h1>
      <p>{project.longDescription}</p>{" "}
    </div>
  );
};
