import { Hono } from "hono";
import { ProjectsResponseSchema } from "../types.js";

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

const projectsRoutes = new Hono();

projectsRoutes.get("/", (c) => {
  const data = { projects };
  return c.json(ProjectsResponseSchema.parse(data));
});

export default projectsRoutes;
