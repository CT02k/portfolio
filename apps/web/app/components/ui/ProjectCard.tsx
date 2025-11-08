import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={url ? url + "?ref=ct02" : ""}
      target="_blank"
      rel="noopener"
      className="group border border-black rounded-lg cursor-pointer transition-all overflow-hidden bg-white w-full max-w-md"
    >
      <div className="relative w-full h-auto">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="p-4 absolute bottom-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[2px] z-10 w-full h-full flex flex-col justify-end">
          <div className="bg-white border p-3 rounded-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-zinc-600 text-sm mt-1">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 absolute bottom-2 right-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-black/75 border border-black text-white backdrop-blur-lg px-2 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
