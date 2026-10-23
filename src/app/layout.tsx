import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#141E2B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Digital Coders | Acelere sua Carreira na Tecnologia",
  description: "Formação presencial com metodologia de software house: projetos corporativos complexos, mentoria individual sênior e integração com copilotos de inteligência artificial. Sede em Juiz de Fora, MG.",
  keywords: [
    "Digital Coders",
    "Escola de Programação",
    "Bootcamp Fullstack",
    "Juiz de Fora",
    "Software House",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Grupo T2C2TECH"
  ],
  authors: [{ name: "Digital Coders Team" }],
  openGraph: {
    title: "Digital Coders | Acelere sua Carreira na Tecnologia",
    description: "Codifique com inteligência. Formação técnica de alta densidade em software engineering.",
    url: "https://digitalcoders.com.br",
    siteName: "Digital Coders",
    locale: "pt_BR",
    type: "website",
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
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#141E2B] text-[#E2E8F0] font-sans antialiased selection:bg-[#38BDF8] selection:text-[#141E2B]">
        {children}
      </body>
    </html>
  );
}
