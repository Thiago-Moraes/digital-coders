"use client";

import React, { useState } from "react";
import { 
  BookOpenCheck, 
  GitPullRequestDraft, 
  Sparkles, 
  Trophy, 
  CheckCircle, 
  ChevronRight, 
  Terminal,
  Code
} from "lucide-react";
import { DIFFERENTIALS } from "@/data/mockData";

const ICON_MAP = {
  BookOpenCheck,
  GitPullRequestDraft,
  Sparkles,
  Trophy
};

export function Differentials() {
  const [activeDifferential, setActiveDifferential] = useState<string>(DIFFERENTIALS[0].id);

  const selectedDiff = DIFFERENTIALS.find((d) => d.id === activeDifferential) || DIFFERENTIALS[0];

  return (
    <section id="metodologia" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 max-w-3xl">
          <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-[#38BDF8] uppercase">
            Metodologia Exclusiva
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl leading-tight text-white">
            Dinâmica de Software House Corporativa
          </h2>
          <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">
            Sem aulas passivas. Você ingressa com mentalidade de engenharia, entregando código em squads com rotinas diárias idênticas às das big techs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = ICON_MAP[diff.iconName as keyof typeof ICON_MAP] || Code;
            const isSelected = diff.id === activeDifferential;

            const badgeLabels = [
              "90% Prática",
              "Sprints Reais",
              "IA Copilot",
              "Engenharia"
            ];

            return (
              <div
                key={diff.id}
                onClick={() => setActiveDifferential(diff.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#243447] border-[#38BDF8] shadow-lg shadow-black/20 scale-[1.02]"
                    : "bg-[#243447] border-[#33465C] hover:border-[#38BDF8]/60 hover:bg-[#28384d]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1C2838] border border-[#33465C] flex items-center justify-center text-[#38BDF8]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-montserrat text-[10px] font-bold text-[#94A3B8] bg-[#1C2838] border border-[#33465C]/80 px-2 py-0.5 rounded uppercase">
                    {badgeLabels[index % 4]}
                  </span>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-base text-white mb-2 flex items-center justify-between">
                    <span>{diff.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#38BDF8] translate-x-1" : "text-[#94A3B8]"
                      }`}
                    />
                  </h3>
                  <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-[#33465C] flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>Módulo Selecionado</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clean Console Snippet */}
        <div className="rounded-xl bg-[#182332] border border-[#33465C] p-4 flex flex-col gap-2 font-mono text-xs mb-8 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#33465C]/60 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#33465C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#33465C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
              <span className="text-[11px] text-[#94A3B8] ml-2">system.config.ts</span>
            </div>
            <span className="text-[10px] text-[#94A3B8] uppercase">Digital Coders Core</span>
          </div>
          <div className="text-[#94A3B8] overflow-x-auto py-1 leading-relaxed">
            <span className="text-[#38BDF8]">const</span> <span className="text-white">engineer</span> = <span className="text-[#38BDF8]">await</span> DigitalCoders.<span className="text-[#E2E8F0]">qualify</span>(&#123;<br/>
            &nbsp;&nbsp;campus: <span className="text-[#38BDF8]">&quot;Juiz de Fora&quot;</span>,<br/>
            &nbsp;&nbsp;methodology: <span className="text-[#38BDF8]">&quot;SoftwareHouse_Immersive&quot;</span>,<br/>
            &nbsp;&nbsp;readyForMarket: <span className="text-white">true</span><br/>
            &#125;);
          </div>
        </div>

        {/* Selected Pillar Details */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1C2838] border border-[#33465C] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="font-montserrat font-bold text-xs text-[#38BDF8] uppercase tracking-wider">
              Detalhamento Operacional: {selectedDiff.title}
            </span>
          </div>

          <p className="font-inter text-sm text-[#E2E8F0] leading-relaxed">
            {selectedDiff.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {selectedDiff.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#243447] border border-[#33465C]/80">
                <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="font-inter text-xs text-[#E2E8F0]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
