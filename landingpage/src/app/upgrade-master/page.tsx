"use client";

import React from "react";
import { MasterTopBar } from "@/components/master/MasterTopBar";
import { MasterHero } from "@/components/master/MasterHero";
import { MasterMindset } from "@/components/master/MasterMindset";
import { MasterBlueprint } from "@/components/master/MasterBlueprint";
import { MasterShowcase } from "@/components/master/MasterShowcase";
import { MasterCurriculum } from "@/components/master/MasterCurriculum";
import { MasterPricing } from "@/components/master/MasterPricing";
import { MasterGuarantee } from "@/components/master/MasterGuarantee";
import { MasterFaq } from "@/components/master/MasterFaq";
import { MasterClosing } from "@/components/master/MasterClosing";
import { MasterFooter } from "@/components/master/MasterFooter";

export default function UpgradeMasterPage() {
  return (
    <main className="min-h-screen bg-[#141E2B] text-[#E2E8F0] flex flex-col selection:bg-[#38BDF8] selection:text-[#071423] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Sticky Top Countdown Banner */}
      <MasterTopBar />

      {/* 2. Cinematic Hero with Video/Visual HUD and Real-time Metrics */}
      <MasterHero />

      {/* 3. Mindset Shift: O Que Te Falta Para Virar a Chave */}
      <MasterMindset />

      {/* 4. Raio-X Interativo 3D: Anatomia de um Sistema de Produção */}
      <MasterBlueprint />

      {/* 5. Estilos & Produções Reais: Um Engenheiro, Todos os Ecossistemas + Showreel */}
      <MasterShowcase />

      {/* 6. Grade Mais Completa do Mercado (21 Módulos Detalhados) */}
      <MasterCurriculum />

      {/* 7. Planos & Oferta Especial de Upgrade com Timer de 48h */}
      <MasterPricing />

      {/* 8. Garantia Incondicional de 7 Dias */}
      <MasterGuarantee />

      {/* 9. FAQ Completo (Dúvidas Frequentes) */}
      <MasterFaq />

      {/* 10. O Pouso Final: Chamada Conclusiva Noturna */}
      <MasterClosing />

      {/* 11. Footer Institucional Oficial */}
      <MasterFooter />

    </main>
  );
}
