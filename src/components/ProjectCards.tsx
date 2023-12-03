import { Project } from "@/src/constants/index";
import { ProjectCard } from "@components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

type ProjectCardsProps = {
  projects: Project[];
  setCurrentSelectedProject: (project: Project) => void;
};

export const ProjectCards: React.FC<ProjectCardsProps> = ({ projects, setCurrentSelectedProject }) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden h-full items-center justify-around lg:flex">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            setCurrentSelectedProject={setCurrentSelectedProject}
          ></ProjectCard>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex h-full items-center justify-center lg:hidden">
        <Swiper
          slidesPerView={1}
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="p-8 w-full h-full">
              <ProjectCard project={project} setCurrentSelectedProject={setCurrentSelectedProject}></ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
