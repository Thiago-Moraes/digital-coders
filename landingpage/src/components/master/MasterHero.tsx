"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Play, 
  CheckCircle2,
  Workflow,
  Radio
} from "lucide-react";

export function MasterHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-20 overflow-hidden flex flex-col justify-center bg-[#141E2B] min-h-[92vh]">
      
      {/* Background Cinematic Backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 scale-105">
          <Image
            src="/images/master-hero.jpg"
            alt="Digital Coders Master Command Center"
            fill
            priority
            className="object-cover object-center filter brightness-[0.75] contrast-[1.15]"
            sizes="100vw"
          />
        </div>

        {/* Cinematic Vignettes & Tech Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141E2B]/95 via-[#141E2B]/85 to-[#141E2B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141E2B] via-transparent to-[#141E2B]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(56,189,248,0.15),transparent_60%)]" />
        
        {/* Animated Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Kicker with Neon Pulse & Diamond Reticle */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2838]/90 border border-[#38BDF8]/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#38BDF8] uppercase">
              FORMAÇÃO MASTER · UPGRADE DE ALTA PERFORMANCE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>TURMA 2026 ABERTA</span>
          </div>
        </motion.div>

        {/* Grid 2-Columns: Headlines on left, Telemetry Core on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14">
          
          {/* Left Column: Headlines & High-Conversion Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h1 className="font-montserrat font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white drop-shadow-md">
              NÃO BASTA CODIFICAR.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-white">
                É HORA DE DOMINAR
              </span>{" "}
              A ENGENHARIA.
            </h1>

            <p className="font-inter text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
              Você já programa e conhece a sintaxe. Na <strong className="text-white font-semibold">Formação Master</strong>, você transcende: projeta arquiteturas distribuídas de alta escala, orquestra copilotos e agentes autônomos de IA e assume a liderança técnica de squads corporativas de elite.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a
                href="#planos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="min-h-[54px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284c7] text-[#071423] font-montserrat text-sm sm:text-base font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-all group"
              >
                <span>Destravar Formação Master</span>
                <ArrowRight className="w-5 h-5 text-[#071423] group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#grade"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="min-h-[54px] px-7 py-4 rounded-xl bg-[#1C2838]/90 backdrop-blur-md border border-[#33465C] text-[#E2E8F0] font-montserrat text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#243447] hover:border-[#38BDF8]/60 transition-all"
              >
                <Terminal className="w-4 h-4 text-[#38BDF8]" />
                <span>Explorar Grade (21 Módulos)</span>
              </motion.a>
            </div>

            {/* Badges Rápidos / Checklist Pill List */}
            <div className="flex flex-wrap gap-2.5 pt-3">
              {[
                "+300 Horas Práticas",
                "6 Squads Corporativas",
                "Tutor IA 24/7 Exclusivo",
                "Comunidade Tech Leads",
                "Certificação Master Oficial",
              ].map((badge, idx) => (
                <div 
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#182332]/90 border border-[#33465C]/80 text-xs font-inter text-[#E2E8F0]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Holographic Mission Control / Telemetry Cockpit */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl border border-[#33465C] bg-[#142030]/90 backdrop-blur-xl shadow-2xl p-6 relative overflow-hidden group hover:border-[#38BDF8]/50 transition-all">
              
              {/* Corner Tech Reticles */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#38BDF8]/60" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#38BDF8]/60" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#38BDF8]/60" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#38BDF8]/60" />

              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-[#33465C] mb-5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#38BDF8] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    SQUAD TELEMETRY // MASTER RUNTIME
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  ONLINE 99.99%
                </span>
              </div>

              {/* Real-time Simulated Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-[#101C2C] border border-[#33465C]/80">
                  <span className="font-mono text-[10px] text-[#94A3B8] block uppercase">Vazão Distribuída</span>
                  <span className="font-montserrat text-xl font-black text-white">48.2k <span className="text-xs text-[#38BDF8] font-mono">req/s</span></span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    ↑ Zero latência de gargalo
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#101C2C] border border-[#33465C]/80">
                  <span className="font-mono text-[10px] text-[#94A3B8] block uppercase">Tempo de Resposta P99</span>
                  <span className="font-montserrat text-xl font-black text-[#38BDF8]">3.4 <span className="text-xs text-[#94A3B8] font-mono">ms</span></span>
                  <span className="text-[10px] text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    ● Cluster Otimizado
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#101C2C] border border-[#33465C]/80">
                  <span className="font-mono text-[10px] text-[#94A3B8] block uppercase">Cobertura de Testes</span>
                  <span className="font-montserrat text-xl font-black text-white">100%</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    ✓ E2E & Integração
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#101C2C] border border-[#33465C]/80">
                  <span className="font-mono text-[10px] text-[#94A3B8] block uppercase">AI Copilot Coprocessor</span>
                  <span className="font-montserrat text-xl font-black text-[#38BDF8]">Active</span>
                  <span className="text-[10px] text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    ⚡ RAG Neural + LLM
                  </span>
                </div>
              </div>

              {/* Code Snippet Box with Running Simulation */}
              <div className="p-3.5 rounded-xl bg-[#0B131E] border border-[#33465C] font-mono text-xs space-y-1.5 text-[#94A3B8]">
                <div className="flex items-center justify-between text-[10px] text-[#38BDF8]">
                  <span>// deploy-pipeline.master.ts</span>
                  <span className="animate-pulse">RUNNING</span>
                </div>
                <p className="text-white">
                  <span className="text-[#38BDF8]">const</span> cluster = <span className="text-[#38BDF8]">await</span> Mesh.orchestrate(&#123;
                </p>
                <p className="pl-4 text-[#CBD5E1]">
                  region: <span className="text-emerald-400">&quot;global-multi-cloud&quot;</span>,
                </p>
                <p className="pl-4 text-[#CBD5E1]">
                  aiAgents: <span className="text-amber-400">true</span>,
                </p>
                <p className="pl-4 text-[#CBD5E1]">
                  resilience: <span className="text-emerald-400">&quot;chaos-engineering-proof&quot;</span>
                </p>
                <p className="text-white">&#125;);</p>
                <p className="text-emerald-400 pt-1 text-[11px]">
                  [✓] Cluster distribuído pronto para escala de milhões de usuários.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
