import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import TimelineItem from "../ui/TimelineItem";

const estudos = [
  {
    title: "Mestrado em Ciência da Computação",
    description: "UniEsquina",
    year: "2017 - Atual",
  },
  {
    title: "Bacharelado em ChatGPT",
    description: "UniEsquina",
    year: "2017 - Atual",
  },
];

const empresas = [
  { title: "Gerente de Projetos", description: "Google", year: "2021 - Atual" },
  { title: "CTO", description: "General Motors", year: "2019 - 2021" },
];

export default function Info() {
  return (
    <section
      id="info"
      className="h-fit flex items-center justify-between gap-10 ml-90"
    >
      <div className="flex flex-col w-full h-full">
        <div className="px-5 pt-20 border-l">
          <GraduationCap size={64} />
        </div>
        {estudos.map((item) => (
          <TimelineItem
            title={item.title}
            description={item.description}
            year={item.year}
            key={item.title}
          />
        ))}
        <div className="h-full border-l pb-20"></div>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="px-5 pt-20 border-l">
          <BriefcaseBusiness size={64} />
        </div>
        {empresas.map((item) => (
          <TimelineItem
            title={item.title}
            description={item.description}
            year={item.year}
            key={item.title}
          />
        ))}
        <div className="h-full border-l pb-20"></div>
      </div>
    </section>
  );
}
