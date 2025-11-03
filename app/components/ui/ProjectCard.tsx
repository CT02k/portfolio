import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href="/"
      className="border border-black rounded-lg h-fit cursor-pointer transition-all overflow-hidden bg-white max-w-lg w-full"
    >
      <div className="relative w-full h-64">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="p-4 absolute bottom-0 bg-linear-to-t from-black/10 opacity-0 hover:opacity-100 transition duration-400 to-transparent backdrop-blur-[2px] z-10 h-full flex flex-col justify-end">
          <div className="bg-white border-white backdrop-blur-lg p-3 rounded-lg">
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
