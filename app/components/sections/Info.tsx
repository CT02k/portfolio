import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import TimelineItem from "../ui/TimelineItem";

const estudos = [
  {
    title: "Engenharia de Software",
    description: "FIAP",
    year: "Nov. 2025 - Atual",
  },
];

const empresas = [
  { title: "CTO", description: "Artix Cloud", year: "Set. 2025 - Atual" },
];

export default function Info() {
  return (
    <section
      id="info"
      className="flex justify-between gap-10 ml-90 items-stretch h-full"
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
