import { Swiper, SwiperSlide } from "swiper/react";

import { useProject } from "@entities/projects";

import { ProjectCard } from "../ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export const ProjectCards = () => {
  const projects = useProject((state) => state.projects);

  return (
    <>
      {/* Desktop */}
      <div className="hidden h-full items-center justify-around lg:flex">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex h-full items-center justify-center lg:hidden">
        <Swiper
          slidesPerView={1}
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-full w-full p-8">
              <ProjectCard project={project}></ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
