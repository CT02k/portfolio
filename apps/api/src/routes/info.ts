import { Hono } from "hono";
import { InfoResponseSchema } from "../types.js";

const estudos = [
  {
    title: "Engenharia de Software",
    description: "FIAP",
    credentials: {
      url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=e900db0dc20465bd3e2b85001421fc45&action=view",
      id: "e900db0dc20465bd3e2b85001421fc45",
    },
    year: "Nov. 2025",
  },
];

const empresas = [
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

const infoRoutes = new Hono();

infoRoutes.get("/", (c) => {
  const data = { studies: estudos, works: empresas };
  return c.json(InfoResponseSchema.parse(data));
});

export default infoRoutes;
