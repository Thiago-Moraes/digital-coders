import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formação Master: Arquitetura, IA & Engenharia de Elite | Digital Coders",
  description: "Você já programa. Na Formação Master você projeta arquiteturas distribuídas, orquestra IA em produção e lidera squads de alta performance. 21 módulos, +300h de imersão, 6 squads corporativas.",
  keywords: [
    "Formação Master",
    "Digital Coders",
    "Engenharia de Software",
    "Arquitetura de Software",
    "Clean Architecture",
    "Kubernetes",
    "Kafka",
    "Inteligência Artificial",
    "Tech Lead",
    "Juiz de Fora"
  ],
  openGraph: {
    title: "Formação Master: Arquitetura, IA & Engenharia de Elite | Digital Coders",
    description: "Upgrade definitivo de carreira. 21 módulos práticos com metodologia de Software House corporativa.",
    images: ["/images/master-hero.jpg"],
  }
};

export default function UpgradeMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
