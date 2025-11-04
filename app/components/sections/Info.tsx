import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import TimelineItem from "../ui/TimelineItem";

const estudos = [
  {
    title: "Engenharia de Software",
    description: "FIAP",
    year: "Nov. 2025 - Atual",
  },
  {
    title: "Desenvolvimento Fullstack",
    description: "Estudo Independente",
    year: "2016 - Atual",
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

export default function Info() {
  return (
    <section
      id="info"
      className="flex flex-col md:flex-row justify-between self-center md:gap-64 items-stretch h-full"
    >
      <div className="flex flex-col w-full border-l border-dashed">
        <div className="px-10 pt-20">
          <GraduationCap size={64} />
        </div>
        {estudos.map((item) => (
          <TimelineItem {...item} key={item.title} />
        ))}
        <div className="flex-1 border-l border-dashed pb-20"></div>
      </div>

      <div className="flex flex-col w-full border-l border-dashed">
        <div className="px-10 pt-20">
          <BriefcaseBusiness size={64} />
        </div>
        {empresas.map((item) => (
          <TimelineItem {...item} key={item.title} />
        ))}
        <div className="flex-1 border-l border-dashed pb-20"></div>
      </div>
    </section>
  );
}
