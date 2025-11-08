import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { TimelineStudyItem, TimelineWorkItem } from "../ui/TimelineItem";
import { apiRequest, InfoResponse } from "@/app/lib/api";

export default async function Info() {
  const { studies, works } = await apiRequest<InfoResponse>("/info");
  return (
    <section
      id="info"
      className="flex flex-col md:flex-row justify-between self-center md:gap-64 items-stretch h-full"
    >
      <div className="flex flex-col w-full border-l border-dashed">
        <div className="px-10 pt-20">
          <GraduationCap size={64} />
        </div>
        {studies.map((item) => (
          <TimelineStudyItem {...item} key={item.title} />
        ))}
        <div className="flex-1 border-l border-dashed pb-20"></div>
      </div>

      <div className="flex flex-col w-full border-l border-dashed">
        <div className="px-10 pt-20">
          <BriefcaseBusiness size={64} />
        </div>
        {works.map((item) => (
          <TimelineWorkItem {...item} key={item.title} />
        ))}
        <div className="flex-1 border-l border-dashed pb-20"></div>
      </div>
    </section>
  );
}
