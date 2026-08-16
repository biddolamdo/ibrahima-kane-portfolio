import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ibrahima KANE | Admin Réseau-Système & Programmeur Jeux Vidéo",
    template: "%s | Ibrahima KANE",
  },
  description:
    "Portfolio d'Ibrahima KANE – Développeur de jeux vidéo (C#, Unity, Flutter) et Administrateur Systèmes / Réseaux (Linux, Windows, SQL). Projets : Samba le Berger, Mot Caché, KALILOU et plus.",
  keywords: [
    "Ibrahima Kane",
    "Game Developer",
    "SysAdmin",
    "C#",
    "Unity",
    "Linux",
    "Portfolio",
    "Sénégal",
    "Développeur jeux vidéo",
  ],
  authors: [{ name: "Ibrahima KANE" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Ibrahima KANE | Game Dev & SysAdmin",
    description:
      "Portfolio professionnel – Développement de jeux vidéo et administration système / réseau.",
    siteName: "Ibrahima KANE Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
