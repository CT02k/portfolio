import type { Project, ProjectsResponse } from "../types.js";

export interface ProjectsSource {
  getProjects(): Project[];
}

export class StaticProjectsRepository implements ProjectsSource {
  constructor(private readonly projects: ReadonlyArray<Project>) {}

  getProjects(): Project[] {
    return [...this.projects];
  }
}

export class ProjectsService {
  constructor(private readonly repository: ProjectsSource) {}

  getProjects(): ProjectsResponse {
    return {
      projects: this.repository.getProjects(),
    };
  }
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "Meu portfolio, o site que voce esta agora.",
    image: "/projetos/ct02.png",
    url: "https://ct02.work",
    tags: ["Design", "Programação"],
  },
  {
    title: "Flow Finance",
    description: "Aplicacao de gestao financeira pessoal inteligente.",
    image: "/projetos/flow-finance.png",
    tags: ["Design", "Programação"],
  },
  {
    title: "Goanime",
    description:
      "Design da logo, icone e tipografia da Goanime, um player de anime para terminal feito em Golang.",
    image: "/projetos/go-anime.png",
    url: "https://goanime.fun",
    tags: ["Design"],
  },
];

export const projectsService = new ProjectsService(
  new StaticProjectsRepository(projects)
);
