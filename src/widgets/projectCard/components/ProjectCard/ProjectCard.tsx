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
        projectCardRef.current!.style.transform = `rotate(${randomTilt}deg) scale(1.02)`;
      };

      mouseLeaveEventListener = () => {
        projectCardRef.current!.style.transform = `rotate(${randomTilt}deg)`;
      };

      setTimeout(() => {
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
    <div className="flex rounded-lg border-2 border-gray-500 dark:border-gray-300 p-4 gap-4">
      <div className="flex items-center justify-center ">
        <div ref={projectCardRef} className="flex aspect-[3/4] w-[50px] items-center justify-center border-2 border-gray-500 dark:border-gray-300 rounded lg">
          {project.iconSvg}
        </div>
      </div>

      <div className="w-full">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
