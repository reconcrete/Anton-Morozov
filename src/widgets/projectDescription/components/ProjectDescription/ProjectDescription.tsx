import { useProject } from "@entities/projects";
import { useRef } from "react";

export const ProjectDescription = () => {
  const currentProject = useProject((state) => state.curentProject);

  const projectDescriptionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="project-description"
      ref={projectDescriptionRef}
      className="ml-auto hidden min-h-[30%] w-[60%] flex-1 gap-[50px] pt-[70px] transition-all duration-300 ease-in-out lg:flex"
    > 
      <h1 className="-translate-y-3 text-[34px] font-[600]">{currentProject.name}</h1>
      <p>{currentProject.longDescription}</p>{" "}
    </div>
  );
};
