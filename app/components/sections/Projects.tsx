import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Painel ArtixCloud",
    description:
      "Painel moderno e otimizado para gerenciamento de servidores de Minecraft.",
    image: "/placeholder.png",
    tags: ["Design", "Programação"],
  },
  {
    title: "API Billing System",
    description:
      "Sistema de cobrança e automação financeira para provedores de hospedagem.",
    image: "/placeholder.png",
    tags: ["Design", "Programação"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center border-b px-5 py-20 pl-90"
    >
      <h2 className="text-5xl font-semibold mb-10">Projetos</h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
