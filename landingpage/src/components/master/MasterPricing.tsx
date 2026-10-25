"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";

export function MasterPricing() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "47",
    minutes: "59",
    seconds: "59",
  });

  useEffect(() => {
    const PROMO_MS = 48 * 60 * 60 * 1000;
    const STORAGE_KEY = "digitalcoders_master_upgrade_start";
    
    let startTime: number;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && !isNaN(Number(stored))) {
        startTime = Number(stored);
      } else {
        startTime = Date.now();
        localStorage.setItem(STORAGE_KEY, String(startTime));
      }
    } catch {
      startTime = Date.now();
    }

    const deadline = startTime + PROMO_MS;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="planos" className="py-24 relative bg-[#141E2B] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-blueprint-lines opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182332] border border-[#38BDF8]/40 mb-3">
            <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              CONDIÇÃO EXCLUSIVA DE UPGRADE
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Destrave Agora com o Maior Desconto
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#94A3B8]">
            Esta oferta com cupom especial de upgrade é única e individual por visitante. Quando o contador zerar, o acesso volta à tabela normal.
          </p>
        </div>

        {/* Promo Timer Box */}
        <div className="max-w-md mx-auto mb-14 p-5 rounded-2xl bg-gradient-to-r from-[#182332] via-[#1C2838] to-[#182332] border border-[#38BDF8]/40 text-center shadow-lg">
          <p className="font-mono text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-3">
            A OFERTA DE UPGRADE ENCERRA EM:
          </p>
          <div className="flex items-center justify-center gap-3 font-mono">
            <div className="px-3.5 py-2 rounded-xl bg-black/80 border border-[#38BDF8]/40 text-center min-w-[70px]">
              <span className="font-montserrat font-black text-3xl text-white block leading-none">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] text-[#94A3B8] uppercase font-sans tracking-wider">horas</span>
            </div>
            <span className="text-2xl text-[#38BDF8] font-bold">:</span>
            <div className="px-3.5 py-2 rounded-xl bg-black/80 border border-[#38BDF8]/40 text-center min-w-[70px]">
              <span className="font-montserrat font-black text-3xl text-white block leading-none">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] text-[#94A3B8] uppercase font-sans tracking-wider">min</span>
            </div>
            <span className="text-2xl text-[#38BDF8] font-bold">:</span>
            <div className="px-3.5 py-2 rounded-xl bg-black/80 border border-[#38BDF8]/40 text-center min-w-[70px]">
              <span className="font-montserrat font-black text-3xl text-white block leading-none">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] text-[#94A3B8] uppercase font-sans tracking-wider">seg</span>
            </div>
          </div>
        </div>

        {/* 2 Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          
          {/* Plan 1: 1 Ano */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#142030] border border-[#33465C] p-8 flex flex-col justify-between relative shadow-xl hover:border-[#38BDF8]/50 transition-all"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#182332] text-xs font-mono font-bold text-[#38BDF8] border border-[#38BDF8]/30 mb-4">
                60% OFF · OFERTA UPGRADE
              </span>

              <h3 className="font-montserrat font-black text-2xl text-white mb-1">
                Plano 1 Ano
              </h3>

              <p className="font-inter text-xs text-[#94A3B8] mb-4">
                De <s className="text-[#94A3B8]">R$ 1.997</s>
              </p>

              <div className="mb-2">
                <span className="font-montserrat font-black text-4xl sm:text-5xl text-white">
                  R$ 797
                </span>
                <span className="text-xs text-[#94A3B8] ml-1">à vista</span>
              </div>

              <p className="font-inter text-xs text-[#CBD5E1] mb-6">
                ou <strong className="text-white font-semibold">12x de R$ 79,90</strong> no cartão
              </p>

              <div className="space-y-3 pt-4 border-t border-[#33465C]/60 text-xs sm:text-sm text-[#E2E8F0] font-inter">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Acesso completo à Formação Master por <strong>1 ano</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Todos os 21 módulos estruturados e atualizações</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Tutor IA Copilot 24/7 exclusivo para alunos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Acesso à Comunidade de Tech Leads no Discord</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Certificação Master Oficial Digital Coders</span>
                </div>
              </div>
            </div>

            <a
              href="#inscricao"
              className="mt-8 w-full min-h-[50px] rounded-xl bg-transparent border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#071423] font-montserrat font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Destravar por 1 Ano</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Plan 2: 2 Anos VIP (Hot / Best Value) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-gradient-to-b from-[#18273A] to-[#101C2C] border-2 border-[#38BDF8] p-8 flex flex-col justify-between relative shadow-[0_0_35px_rgba(56,189,248,0.25)]"
          >
            {/* Top Float Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#38BDF8] text-[#071423] font-montserrat font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#38BDF8]/40 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Melhor Custo-Benefício</span>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#38BDF8]/15 text-xs font-mono font-bold text-[#38BDF8] border border-[#38BDF8]/40 mb-4">
                65% OFF · OFERTA UPGRADE VIP
              </span>

              <h3 className="font-montserrat font-black text-2xl text-white mb-1">
                Plano 2 Anos VIP
              </h3>

              <p className="font-inter text-xs text-[#94A3B8] mb-4">
                De <s className="text-[#94A3B8]">R$ 3.497</s> · melhor valor por mês
              </p>

              <div className="mb-2">
                <span className="font-montserrat font-black text-4xl sm:text-5xl text-[#38BDF8]">
                  R$ 1.197
                </span>
                <span className="text-xs text-[#94A3B8] ml-1">à vista</span>
              </div>

              <p className="font-inter text-xs text-[#CBD5E1] mb-6">
                ou <strong className="text-white font-semibold">12x de R$ 119,80</strong> no cartão
              </p>

              <div className="space-y-3 pt-4 border-t border-[#33465C]/60 text-xs sm:text-sm text-[#E2E8F0] font-inter">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Tudo do plano de 1 ano com <strong>2 anos de acesso completo</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Mais tempo para construir os 6 projetos de squad no seu ritmo</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span><strong>Mentorias individuais 1:1</strong> com Tech Leads do mercado</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Indicação prioritária no Banco de Talentos corporativo</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>O menor custo por mês de formação técnica</span>
                </div>
              </div>
            </div>

            <a
              href="#inscricao"
              className="mt-8 w-full min-h-[50px] rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284c7] text-[#071423] font-montserrat font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.8)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Destravar por 2 Anos VIP</span>
              <ArrowRight className="w-4 h-4 text-[#071423]" />
            </a>
          </motion.div>

        </div>

        {/* Trust Badges Bar */}
        <div className="text-center font-mono text-xs text-[#94A3B8] flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            Garantia Incondicional de 7 Dias
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#38BDF8]" />
            Acesso Imediato ao Painel
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#38BDF8]" />
            Pagamento 100% Criptografado & Seguro
          </span>
        </div>

      </div>
    </section>
  );
}
