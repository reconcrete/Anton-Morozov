import { ProjectCard } from "@widgets/projectCard";
import { projects } from "@entities/projects";

export default function Projects() {
  return (
    <main className="flex flex-col gap-8 pt-16">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
        {projects
          .filter((project) => project.type === "my-stuff")
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </main>
  );
}
