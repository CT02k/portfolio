import "./globals.css"

import RandomText from "@/components/randomText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>CT02</title>
        <meta property="og:title" content="CT02" />
        <meta property="og:description" content="Sou um desenvolvedor apaixonado por tecnologia e inovação. Atualmente sou um desenvolvedor fullstack, com foco em desenvolvimento web." />
        <meta property="og:image" content="/og.png" />
        <meta property="theme-color" content="#93c5fd" />
      </head>
      <body>
        {children}
        <footer>
          <RandomText />
        </footer>
      </body>
    </html>
  );
}
