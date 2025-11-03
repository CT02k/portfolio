import Navbar from "@/app/components/Navbar";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Info from "@/app/components/sections/Info";
import Contact from "@/app/components/sections/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <Link
        href="https://cal.com/joaop"
        className="fixed bottom-5 right-5 size-16 rounded-full transition hover:opacity-90 bg-cover bg-[url('/cal.jpg')]"
      ></Link>

      <About />
      <Projects />
      <Info />
      <Contact />
    </main>
  );
}
