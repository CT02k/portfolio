interface TimelineItemProps {
  title: string;
  description: string;
  year: string;
}

export default function TimelineItem({
  title,
  description,
  year,
}: TimelineItemProps) {
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
