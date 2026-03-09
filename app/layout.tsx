import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johann Zitouni — Senior Front-end Developer",
  description:
    "Portfolio de Johann Zitouni, développeur Front-end Senior spécialisé en React, TypeScript et Next.js. 10+ ans d'expérience en architecture front-end scalable.",
  openGraph: {
    title: "Johann Zitouni — Senior Front-end Developer",
    description: "React · TypeScript · Next.js · 10+ ans d'expérience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
