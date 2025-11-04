import CT02 from "@/app/svgs/ct02";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Interface NG.Cash",
    description: "Interface aaaaaaaaaaaaaaaaaaaaaaaaaaa",
    image: "/placeholder-2.png",
    tags: ["Design"],
  },
  {
    title: "Portfolio",
    description: "Meu portfolio, o site que você está agora.",
    image: "/placeholder.png",
    tags: ["Design", "Programação"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center border-b px-5 py-20 pl-120 min-h-[75dvh]"
    >
      <div className="w-full">
        <h2 className="text-6xl font-semibold mb-10 flex items-start">
          Projetos <CT02 className="inline size-6 ml-2" />
        </h2>
      </div>
      <div className="flex flex-wrap justify-start gap-8 w-full">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
