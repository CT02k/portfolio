export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center border-y px-6"
    >
      <h2 className="text-5xl font-semibold mb-6">Contato</h2>
      <p className="text-zinc-700 text-lg text-center max-w-xl leading-relaxed">
        Quer discutir um projeto, colaboração ou ideia? Entre em contato comigo
        via{" "}
        <a
          href="mailto:ct02@artixcloud.com"
          className="text-black underline underline-offset-4 hover:opacity-80"
        >
          ct02@artixcloud.com
        </a>{" "}
        ou agende uma conversa pelo link no canto inferior direito.
      </p>
    </section>
  );
}
