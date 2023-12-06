import { Project } from "@/src/constants/index";
import { useEffect, useRef } from "react";

type ProjectCardProps = { project: Project; setCurrentSelectedProject: (project: Project) => void };

const getRandomTilt = () => {
  const tilt = Math.floor(Math.random() * 5) + 1;
  return tilt % 2 === 0 ? tilt : tilt * -1;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, setCurrentSelectedProject }) => {
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

  const onClickProjectCard = () => {
    const projectDescriptionRef = document.getElementById("project-description")!;

    projectDescriptionRef!.style.opacity = "0";
    projectDescriptionRef!.style.transform = "translateY(-50px)";

    setTimeout(() => {
      projectDescriptionRef!.style.opacity = "1";
      projectDescriptionRef!.style.transform = "translateY(0px)";
      setCurrentSelectedProject(project);
    }, 500);
  };

  return (
    <div
      ref={projectCardRef}
      className="duration-400 flex aspect-[3/4] w-full cursor-pointer flex-col items-center rounded-[58px] border-[3px] border-[white] p-8 transition-transform ease-in-out lg:h-auto lg:w-1/5 2xl:w-[300px]"
      onClick={onClickProjectCard}
    >
      <div className="pb-4">{project.iconSvg}</div>
      <p className="flex-1 text-center text-[16px]">{project.description}</p>

      <p className="pb-3 text-center text-[14px] text-white opacity-70">{project.technologies.join(", ")}</p>

      <div className="flex gap-x-5">
        {project.url && (
          <a href={project.url} target="_blank" className="flex items-center gap-x-1 hover:underline">
            Site
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.9811 12.3934L18.244 17.8871C18.2672 18.3728 18.0966 18.8478 17.7696 19.2077C17.4426 19.5675 16.9861 19.7828 16.5004 19.806L6.42859 20.288C5.94292 20.3113 5.4679 20.1406 5.10804 19.8136C4.74818 19.4867 4.53296 19.0301 4.50972 18.5444L4.02769 8.47262C4.00445 7.98695 4.17509 7.51193 4.50208 7.15207C4.82907 6.79222 5.28562 6.57699 5.77129 6.55375L11.265 6.29083M14.796 3.36869L20.2897 3.10577M20.2897 3.10577L20.5527 8.59948M20.2897 3.10577L10.6999 13.6596"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" className="flex items-center gap-x-1  hover:underline">
            Code
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.9811 12.3934L18.244 17.8871C18.2672 18.3728 18.0966 18.8478 17.7696 19.2077C17.4426 19.5675 16.9861 19.7828 16.5004 19.806L6.42859 20.288C5.94292 20.3113 5.4679 20.1406 5.10804 19.8136C4.74818 19.4867 4.53296 19.0301 4.50972 18.5444L4.02769 8.47262C4.00445 7.98695 4.17509 7.51193 4.50208 7.15207C4.82907 6.79222 5.28562 6.57699 5.77129 6.55375L11.265 6.29083M14.796 3.36869L20.2897 3.10577M20.2897 3.10577L20.5527 8.59948M20.2897 3.10577L10.6999 13.6596"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
