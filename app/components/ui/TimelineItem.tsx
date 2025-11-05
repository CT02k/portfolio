import { ExternalLink } from "lucide-react";

interface TimelineWorkItemProps {
  title: string;
  description: string;
  year: string;
}

interface TimelineStudyItemProps {
  title: string;
  description: string;
  year: string;
  credentials: {
    url: string;
    id: string;
  };
}

export function TimelineWorkItem({
  title,
  description,
  year,
}: TimelineWorkItemProps) {
  return (
    <div className="border-l border-dashed relative pr-6 py-6">
      <div className="absolute -left-1.5 top-8 w-3 h-3 border bg-white rounded-full"></div>
      <h3 className="text-xl font-semibold w-full flex items-center">
        <div className="border-t inline pr-8 mr-2 border-dashed"></div>
        {title}
      </h3>
      <div className="pl-10">
        <p className="text-zinc-600">{description}</p>
        <span className="text-sm text-zinc-500">{year}</span>
      </div>
    </div>
  );
}

export function TimelineStudyItem({
  title,
  description,
  year,
  credentials,
}: TimelineStudyItemProps) {
  return (
    <div className="border-l border-dashed relative pr-6 py-6">
      <div className="absolute -left-1.5 top-8 w-3 h-3 border bg-white rounded-full"></div>
      <h3 className="text-xl font-semibold w-full flex items-center">
        <div className="border-t inline pr-8 mr-2 border-dashed"></div>
        {title}
      </h3>
      <div className="pl-10">
        <p className="text-zinc-600">{description}</p>
        <span className="text-sm text-zinc-500">Emitido {year}</span>
        <div className="flex flex-col mt-2">
          <a
            href={credentials.url}
            className="px-3 py-1 text-sm bg-black text-white flex justify-center items-center gap-1 rounded-full w-fit transition hover:opacity-90"
          >
            Ver credencial <ExternalLink size={14} />
          </a>
          <p className="text-[0.65rem] text-zinc-500 mt-1">{credentials.id}</p>
        </div>
      </div>
    </div>
  );
}
