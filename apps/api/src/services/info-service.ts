import type { InfoResponse, Study, Work } from "../types.js";

export interface StudiesProvider {
  getStudies(): Study[];
}

export interface WorksProvider {
  getWorks(): Work[];
}

export interface InfoRepository extends StudiesProvider, WorksProvider {}

export interface InfoProvider {
  getInfo(): InfoResponse;
}

export class StaticInfoRepository implements InfoRepository {
  constructor(
    private readonly studies: ReadonlyArray<Study>,
    private readonly works: ReadonlyArray<Work>
  ) {}

  getStudies() {
    return [...this.studies];
  }

  getWorks() {
    return [...this.works];
  }
}

export class InfoService implements InfoProvider {
  constructor(private readonly repository: InfoRepository) {}

  getInfo(): InfoResponse {
    return {
      studies: this.repository.getStudies(),
      works: this.repository.getWorks(),
    };
  }
}

const studies: Study[] = [
  {
    title: "Engenharia de Software",
    description: "FIAP",
    credentials: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=e900db0dc20465bd3e2b85001421fc45&action=view",
      id: "e900db0dc20465bd3e2b85001421fc45",
    },
    year: "Out. 2025",
  },
];

const works: Work[] = [
  {
    title: "Fundador",
    description: "Arsenic Studio",
    year: "Out. 2025 - Atual",
  },
  {
    title: "Tech Lead",
    description: "Artix Cloud",
    year: "Dez. 2024 - Set. 2025",
  },
  {
    title: "Desenvolvedor Fullstack",
    description: "Whirl",
    year: "Set. 2023 - Dez. 2024",
  },
];

export const infoService = new InfoService(
  new StaticInfoRepository(studies, works)
);
