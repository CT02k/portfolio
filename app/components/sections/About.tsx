import Link from "next/link";
import CT02 from "@/app/svgs/ct02";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center border-b px-6"
    >
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-6xl font-semibold text-black flex items-start">
          CT02 <CT02 className="inline size-6 ml-2" />
        </h1>

        <p className="text-xl mt-4 text-zinc-800 leading-relaxed">
          Sou um desenvolvedor fullstack apaixonado em criar aplicações rápidas,
          estáveis e bem construídas — do visual à arquitetura. Trabalho com
          tecnologias como <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong> e <strong>TypeScript</strong>, sempre
          buscando o equilíbrio entre desempenho, design e funcionalidade real.
        </p>

        <Link
          href="/cv.pdf"
          className="flex w-fit bg-linear-to-b from-black to-zinc-800 border border-zinc-800 text-white text-lg px-5 py-2 rounded-full mt-6 transition hover:opacity-90 hover:text-white"
        >
          Baixar currículo
        </Link>
      </div>
    </section>
  );
}
