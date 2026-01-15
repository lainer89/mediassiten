import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedAssist - Tu Historial Médico Inteligente",
  description: "Organiza, entiende y asegura tus exámenes médicos con ayuda de Inteligencia Artificial. Bóveda segura para tu salud.",
  metadataBase: new URL("https://medassist.lat"), // Placeholder URL
  openGraph: {
    title: "MedAssist - Resultados médicos explicados en simple",
    description: "Sube tus exámenes, entiéndelos con IA y lleva tu historial siempre contigo.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
