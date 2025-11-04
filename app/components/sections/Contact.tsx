import CT02 from "@/app/svgs/ct02";
import { ArrowBigDown } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center border-y px-120 h-dvh"
    >
      <h2 className="text-6xl font-semibold text-black flex items-start mb-6">
        Contato <CT02 className="inline size-6 ml-2" />
      </h2>
      <p className="text-zinc-700 text-lg max-w-xl leading-relaxed">
        Quer discutir um projeto, colaboração ou ideia? Entre em contato comigo
        via{" "}
        <a
          href="mailto:contato@ct02.work"
          className="text-black underline underline-offset-4 hover:opacity-80"
        >
          contato@ct02.work
        </a>{" "}
        ou agende uma conversa <ArrowBigDown className="inline" />
      </p>

      <Link
        href="https://cal.com/joaop"
        className="flex w-fit bg-linear-to-b from-black to-zinc-800 border border-zinc-800 text-white text-lg px-5 py-2 rounded-full mt-6 transition hover:opacity-90 hover:text-white"
      >
        Agendar
      </Link>
    </section>
  );
}
