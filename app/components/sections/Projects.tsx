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
    description: "Yy",
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
