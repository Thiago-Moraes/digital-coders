"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export function MasterClosing() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex flex-col justify-center text-center bg-[#071423]">
      
      {/* Background Night City View */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/master-closing.jpg"
          alt="Digital Coders Night Tech Command Center"
          fill
          priority
          className="object-cover object-center filter brightness-[0.6] contrast-[1.15]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071423] via-[#071423]/75 to-[#071423]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071423_85%)] opacity-85" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182332]/90 border border-[#38BDF8]/40 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
            SEU PRÓXIMO SALTO TÉCNICO COMEÇA AGORA
          </span>
        </div>

        {/* Closing Headline */}
        <h2 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
          Não é apenas código. É Engenharia de Alta Densidade. E você já está a um passo.
        </h2>

        {/* Subtitle */}
        <p className="font-inter text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto mb-10">
          Falta só dominar: 6 projetos corporativos do zero, Clean Architecture, microsserviços tolerantes a falhas, Kafka, IA corporativa com RAG e a liderança técnica que o mercado disputa.
        </p>

        {/* Grand CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <motion.a
            href="#planos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto min-h-[58px] px-10 py-4 rounded-xl bg-gradient-to-r from-[#38BDF8] via-[#0ea5e9] to-[#0284c7] text-[#071423] font-montserrat text-base font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:shadow-[0_0_50px_rgba(56,189,248,0.9)] transition-all"
          >
            <span>Destravar a Formação Master</span>
            <ArrowRight className="w-5 h-5 text-[#071423]" />
          </motion.a>
        </div>

        {/* Bottom Trust Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            Garantia Incondicional de 7 Dias
          </span>
          <span className="text-[#33465C]">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
            Acesso Imediato ao Hub e Discord
          </span>
          <span className="text-[#33465C]">•</span>
          <span>Pagamento Seguro Criptografado</span>
        </div>

      </div>
    </section>
  );
}
