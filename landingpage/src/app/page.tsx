"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Tracks } from "@/components/Tracks";
import { AiCopilotDemo } from "@/components/AiCopilotDemo";
import { Testimonials } from "@/components/Testimonials";
import { B2BSection } from "@/components/B2BSection";
import { CampusSection } from "@/components/CampusSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
import { BottomMobileNav } from "@/components/BottomMobileNav";

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<string>("bootcamp-fullstack");

  const handleSelectTrackForApplication = (trackId: string) => {
    setSelectedTrack(trackId);
  };

  return (
    <main className="min-h-screen bg-[#141E2B] text-[#E2E8F0] flex flex-col selection:bg-[#38BDF8] selection:text-[#141E2B]">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Hero Section with metrics and lab campus preview */}
      <Hero />

      {/* Section 2: Dinâmica de Software House Corporativa */}
      <Differentials />

      {/* Section 3: Programas Imersivos de Alta Densidade */}
      <Tracks onSelectTrackForApplication={handleSelectTrackForApplication} />

      {/* Interactive Feature: Tutor IA 24/7 & Copilot Simulator */}
      <AiCopilotDemo />

      {/* Section 4: Depoimento Aluno & Casos Reais */}
      <Testimonials />

      {/* B2B Soluções Corporativas */}
      <B2BSection />

      {/* Campus Físico em Juiz de Fora & Atendimento Nacional */}
      <CampusSection />

      {/* Formulário de Candidatura Executiva & FAQ */}
      <ApplicationForm selectedTrackId={selectedTrack} />

      {/* Footer Corporativo Oficial */}
      <Footer />

      {/* Barra de Navegação Inferior Mobile */}
      <BottomMobileNav />
    </main>
  );
}
