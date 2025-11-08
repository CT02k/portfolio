import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - CT02",
  description:
    "Sou um desenvolvedor fullstack apaixonado em criar aplicações rápidas, estáveis e bem construídas — do visual à arquitetura. Trabalho com tecnologias como React, Next.js, Node.js e TypeScript, sempre buscando o equilíbrio entre desempenho, design e funcionalidade real.",
  openGraph: {
    type: "website",
    url: "https://ct02.work",
    title: "Portfolio - CT02",
    description:
      "Sou um desenvolvedor fullstack apaixonado em criar aplicações rápidas, estáveis e bem construídas — do visual à arquitetura. Trabalho com tecnologias como React, Next.js, Node.js e TypeScript, sempre buscando o equilíbrio entre desempenho, design e funcionalidade real.",
    siteName: "Portfolio - CT02",
    images: [{ url: "https://ct02.work/og.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="selection:bg-black/25 scroll-smooth">
      <body className={`${bricolageGrotesque.className} antialiased`}>
        <Navbar />
        {children}
        <Script
          src="https://tracking.arsenic.cv/api/script.js"
          data-site-id="1d1f08109333"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
