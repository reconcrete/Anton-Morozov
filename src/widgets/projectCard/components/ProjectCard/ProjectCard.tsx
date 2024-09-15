import type { Project } from "@entities/projects";
import { useEffect, useRef } from "react";

type ProjectCardProps = Project;

const getRandomTilt = () => {
  const tilt = Math.floor(Math.random() * 5) + 1;
  return tilt % 2 === 0 ? tilt : tilt * -1;
};

export const ProjectCard: React.FC<ProjectCardProps> = (project) => {
  const projectCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseEnterEventListener: EventListener;
    let mouseLeaveEventListener: EventListener;

    if (projectCardRef.current) {
      const randomTilt = getRandomTilt();

      mouseEnterEventListener = () => {
        if (!projectCardRef.current) return;

        projectCardRef.current.style.transform = `rotate(${randomTilt}deg) scale(1.02)`;
      };

      mouseLeaveEventListener = () => {
        if (!projectCardRef.current) return;

        projectCardRef.current.style.transform = `rotate(${randomTilt}deg)`;
      };

      setTimeout(() => {
        if (!projectCardRef.current) return;

        const rotationTransform = `rotate(${randomTilt}deg)`;

        projectCardRef.current!.style.transform = rotationTransform;

        projectCardRef.current!.addEventListener("mouseenter", mouseEnterEventListener);

        projectCardRef.current!.addEventListener("mouseleave", mouseLeaveEventListener);
      }, 500);
    }

    return () => {
      if (projectCardRef.current) {
        projectCardRef.current.removeEventListener("mouseenter", mouseEnterEventListener);
        projectCardRef.current.removeEventListener("mouseleave", mouseLeaveEventListener);
      }
    };
  }, []);

  return (
    <div className="flex gap-4 rounded-lg border-2 border-gray-500 p-4 dark:border-gray-300">
      <div className="flex items-center justify-center ">
        <div
          ref={projectCardRef}
          className="lg flex aspect-[3/4] w-[70px] items-center justify-center rounded border-2 border-gray-500 dark:border-gray-300"
        >
          {project.iconSvg}
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-base">{project.description}</p>
      </div>
    </div>
  );
};
