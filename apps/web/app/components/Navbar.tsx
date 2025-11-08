"use client";
import { useEffect, useState } from "react";
import CT02 from "../svgs/ct02";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "about", name: "Sobre mim" },
  { id: "projects", name: "Projetos" },
  { id: "info", name: "Informações" },
  { id: "contact", name: "Contato" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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
      setWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 font-mono flex flex-col items-center">
      <nav className="w-full bg-white/50 backdrop-blur border-b border-black flex items-center justify-between px-6 py-3">
        <div className="md:flex gap-3 hidden">
          <Link
            href="https://github.com/ct02k"
            className="transition hover:opacity-90 bg-black p-2 rounded-lg text-white"
          >
            <Github className="size-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ct02/"
            className="transition hover:opacity-90 bg-black p-2 rounded-lg text-white"
          >
            <Linkedin className="size-5" />
          </Link>
          <Link
            href="mailto:contato@ct02.work"
            className="transition hover:opacity-90 bg-black p-2 rounded-lg text-white"
          >
            <Mail className="size-5" />
          </Link>
        </div>

        <ul className="flex flex-wrap md:flex-nowrap gap-6 text-sm md:text-base">
          {sections.map(({ name, id }) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={`cursor-pointer transition relative flex items-center gap-2 ${
                active === id
                  ? "text-black font-semibold"
                  : "text-zinc-600 hover:opacity-75"
              }`}
            >
              <CT02
                className={`size-3 md:size-5 transition ${
                  active === id ? "fill-black animate-spin" : "fill-white"
                }`}
                style={{ animationDuration: "4s" }}
              />
              {name}
            </Link>
          ))}
        </ul>

        <span className="font-sans text-green-700 text-lg">
          <span className="text-red-600">@</span>
          {"}"}-,-{"'"}---
        </span>
      </nav>
      <div className="relative w-1/2 h-1 border-b border-x rounded-b-full bg-white/50 backdrop-blur">
        <div
          className="absolute top-0 left-0 h-1 bg-black transition-all duration-75"
          style={{ width: width + "%" }}
        ></div>
      </div>
    </div>
  );
}
