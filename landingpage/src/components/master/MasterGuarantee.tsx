"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export function MasterGuarantee() {
  return (
    <section className="py-24 relative bg-[#0F1722] overflow-hidden border-t border-[#33465C]/60">
      
      {/* Background Subtle Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Monumental Number "7" Visual */}
        <div className="relative inline-block mb-6 select-none">
          <span className="font-montserrat font-black text-8xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-[#38BDF8] to-transparent opacity-80">
            7
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheck className="w-16 h-16 text-[#38BDF8] drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
          </div>
        </div>

        <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
          7 Dias. Incondicional. Sem Burocracia.
        </h2>

        <p className="font-inter text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto mb-8">
          Entre na plataforma, explore a arquitetura dos módulos, comece a codificar e participe da comunidade. Se em até 7 dias você avaliar que a Formação Master não é exatamente o salto de nível que você buscava, devolvemos 100% do seu dinheiro. Sem formulários intermináveis e sem perguntas.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#182332] border border-[#33465C] text-xs font-mono text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Garantia respaldada por contrato oficial Digital Coders</span>
        </div>

      </div>
    </section>
  );
}
