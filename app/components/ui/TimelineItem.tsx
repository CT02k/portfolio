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
    <div className="border-l relative p-6">
      <div className="absolute -left-1.5 top-8 w-3 h-3 bg-black rounded-full"></div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-600">{description}</p>
      <span className="text-sm text-zinc-500">{year}</span>
    </div>
  );
}
