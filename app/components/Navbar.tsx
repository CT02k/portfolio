"use client";
import { useEffect, useState } from "react";
import CT02 from "../svgs/ct02";
import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "about",
    name: "Sobre mim",
  },
  {
    id: "projects",
    name: "Projetos",
  },
  {
    id: "info",
    name: "Informações",
  },
  {
    id: "contact",
    name: "Contato",
  },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setHeight(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-fit md:h-full w-full md:w-auto fixed items-center justify-center md:justify-start font-mono">
      <div className="flex w-full h-full justify-center absolute">
        <div className="h-10 md:h-full w-px bg-black"></div>
      </div>
      <nav className="w-64 bg-white backdrop-blur-md h-10 md:h-4/5 items-center z-50 border py-10 border-black rounded-md flex justify-center contain-content m-5 md:m-10">
        <div className="p-4 w-9/12 absolute top-0 lg:flex justify-center gap-3 hidden">
          <Link
            href={"https://github.com/ct02k"}
            className="transition hover:opacity-90 bg-black p-2.5 rounded-lg text-white"
          >
            <Github className="size-5" />
          </Link>
          <Link
            href={"https://github.com/ct02k"}
            className="transition hover:opacity-90 bg-black p-2.5 rounded-lg text-white"
          >
            <Github className="size-5" />
          </Link>
          <Link
            href={"https://github.com/ct02k"}
            className="transition hover:opacity-90 bg-black p-2.5 rounded-lg text-white"
          >
            <Github className="size-5" />
          </Link>
        </div>
        <ul className="flex flex-wrap md:flex-nowrap md:flex-col justify-start gap-4 w-full h-fit text-white relative px-5">
          <div className="h-full border-r border-y rounded-r border-black absolute left-0">
            <div
              className="transition-all duration-75 bg-black w-1"
              style={{ height: height + "%" }}
            ></div>
          </div>
          {sections.map(({ name, id }) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer text-sm md:text-xl transition relative hover:opacity-75
              ${active === id ? "text-black font-semibold" : "text-zinc-600"}`}
            >
              <CT02
                className={`size-3 md:size-7 inline mr-2 ${
                  active === id && "fill-black animate-spin"
                }`}
                style={{ animationDuration: "4s" }}
              />
              {name}
            </li>
          ))}
        </ul>
        <Image
          src="/cat.png"
          alt="cat"
          className="absolute -bottom-4 grayscale hidden lg:block"
          height={160}
          width={160}
        />
      </nav>
    </div>
  );
}
