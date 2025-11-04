import CT02 from "@/app/svgs/ct02";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Portfolio",
    description: "Meu portfolio, o site que você está agora.",
    image: "/projetos/ct02.png",
    tags: ["Design", "Programação"],
  },
  {
    title: "Flow Finance",
    description: "Aplicação de gestão financeira pessoal inteligente.",
    image: "/projetos/flow-finance.png",
    tags: ["Design", "Programação"],
  },
  {
    title: "Goanime",
    description:
      "Design da logo, icone e tipografia da Goanime, um player de anime para terminal feito em Golang.",
    image: "/projetos/go-anime.png",
    tags: ["Design"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center border-b py-48"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-6xl font-semibold mb-10 flex items-start w-full">
          Projetos <CT02 className="inline size-6 ml-2" />
        </h2>
        <div className="justify-start gap-8 grid grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
