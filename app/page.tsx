"use client";
import { useEffect, useState } from "react";
import CT02 from "./svgs/ct02";
import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

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

const estudos = [
  {
    title: "Mestrado em ciência da computação",
    description: "UniEsquina",
    year: "2017 - Atual",
  },
  {
    title: "Bacharelado em chatgpt",
    description: "UniEsquina",
    year: "2017 - Atual",
  },
];

const empresas = [
  {
    title: "Gerente de Projetos",
    description: "Google",
    year: "2021 - Atual",
  },
  {
    title: "CTO",
    description: "General Motors",
    year: "2019 - 2021",
  },
];

export function Navbar() {
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
        <div className="h-full w-px bg-black"></div>
      </div>
      <nav className="w-64 bg-white backdrop-blur-md h-10 md:h-4/5 items-center z-50 border py-10 border-black rounded-md flex justify-center contain-content m-5 md:m-10">
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

export default function Home() {
  return (
    <main className="flex flex-col">
      <Link
        href="https://cal.com/joaop"
        className="fixed bottom-5 right-5 size-16 rounded-full transition hover:opacity-90 bg-cover bg-[url('/cal.jpg')]"
      ></Link>
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center border-b"
      >
        <div className="flex flex-col w-1/2">
          <h1 className="text-6xl font-semibold text-black flex items-start">
            CT02 <CT02 className="inline size-6" />
          </h1>
          <p className="text-xl">
            Sou um desenvolvedor fullstack apaixonado em criar aplicações
            rápidas, estáveis e bem construídas, do visual à arquitetura.
            Trabalho com tecnologias como React, Next.js, Node.js e TypeScript,
            sempre buscando o equilíbrio entre desempenho, design e
            funcionalidade real.
          </p>
          <Link
            href="/cv.pdf"
            className="flex w-fit bg-linear-to-b from-black to-zinc-800 border border-zinc-800 text-white text-lg px-4 py-2 rounded-full mt-5 transition hover:opacity-90 hover:text-white"
          >
            Baixar currículo
          </Link>
        </div>
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center border-b"
      >
        <h1 className="text-8xl">b</h1>
      </section>
      <section
        id="info"
        className="h-fit flex items-center justify-between gap-10 ml-90"
      >
        <div className="flex flex-col w-full h-full">
          <div className="px-5 pt-5 border-l">
            <GraduationCap size={64} />
          </div>
          {estudos.map((item) => (
            <div key={item.title} className="border-l relative p-6">
              <div className="absolute -left-1.5 top-8 w-3 h-3 bg-black rounded-full"></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-zinc-600">{item.description}</p>
              <span className="text-sm text-zinc-500">{item.year}</span>
            </div>
          ))}
          <div className="h-full border-l"></div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="px-5 pt-5 border-l">
            <BriefcaseBusiness size={64} />
          </div>
          {empresas.map((item) => (
            <div key={item.title} className="border-l relative p-6">
              <div className="absolute -left-1.5 top-8 w-3 h-3 bg-black rounded-full"></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-zinc-600">{item.description}</p>
              <span className="text-sm text-zinc-500">{item.year}</span>
            </div>
          ))}
          <div className="h-full border-l"></div>
        </div>
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center border-y"
      >
        <h1 className="text-8xl">d</h1>
      </section>
    </main>
  );
}
