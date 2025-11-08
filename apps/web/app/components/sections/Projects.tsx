import CT02 from "@/app/svgs/ct02";
import ProjectCard from "../ui/ProjectCard";
import { apiRequest, ProjectsResponse } from "@/app/lib/api";

export default async function Projects() {
  const { projects } = await apiRequest<ProjectsResponse>("/projects");
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center border-b py-48"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-semibold mb-10 flex px-10">
          Projetos <CT02 className="inline size-6 ml-2" />
        </h2>
        <div className="justify-start gap-8 grid md:grid-cols-2 lg:grid-cols-3 px-10">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
