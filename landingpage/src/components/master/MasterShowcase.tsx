"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Terminal, Shield, Zap, ExternalLink, MonitorPlay } from "lucide-react";

export function MasterShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  const ecosystems = [
    {
      title: "Fintech & Alta Frequência",
      tag: "FINTECH CORE",
      desc: "Processamento de liquidação financeira instantânea, concorrência pesada com transações distribuídas (Saga), mensageria Kafka e tolerância a falhas estrita.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Inteligência Artificial & Agentes",
      tag: "AI COPILOTS",
      desc: "Pipelines completos de RAG corporativo, busca semântica em bancos vetoriais, agentes autônomos para automação de tarefas e fine-tuning de modelos locais.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SaaS Corporativo & Escala Global",
      tag: "GLOBAL SAAS",
      desc: "Aplicações multi-tenant distribuídas globalmente na nuvem, com roteamento de baixa latência, Docker, Kubernetes e monitoramento de telemetria em tempo real.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 relative bg-[#0B131E] overflow-hidden border-t border-[#33465C]/60">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182332] border border-[#38BDF8]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              VERSATILIDADE DE PRODUÇÃO
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Uma Engenharia, Todos os Ecossistemas.
          </h2>

          <p className="font-inter text-base text-[#94A3B8] leading-relaxed">
            Ao dominar os princípios fundamentais de arquitetura e computação distribuída, você é capaz de construir qualquer produto digital em nível corporativo de classe mundial.
          </p>
        </div>

        {/* 3 Large Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {ecosystems.map((eco, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl overflow-hidden border border-[#33465C] bg-[#142030] shadow-xl flex flex-col justify-end aspect-[3/4] cursor-default hover:border-[#38BDF8]/60 transition-all"
            >
              {/* Background Photo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                style={{ backgroundImage: `url(${eco.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071423] via-[#071423]/70 to-transparent" />

              {/* Content Overlay */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <span className="font-mono text-[10px] font-bold text-[#38BDF8] tracking-widest uppercase px-2.5 py-1 rounded bg-[#0F1722]/90 border border-[#38BDF8]/40 w-fit mb-2">
                  {eco.tag}
                </span>
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2 leading-tight group-hover:text-[#38BDF8] transition-colors">
                  {eco.title}
                </h3>
                <p className="font-inter text-xs text-[#CBD5E1] leading-relaxed opacity-90">
                  {eco.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinema Video Row: Veja Onde Você Pode Chegar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-[#141E2B] border border-[#33465C] shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase flex items-center gap-2">
              <MonitorPlay className="w-4 h-4 text-[#38BDF8]" />
              <span>SHOWREEL DOS ENGENHEIROS MASTER</span>
            </span>

            <h3 className="font-montserrat font-black text-2xl sm:text-4xl text-white leading-tight">
              Veja o Nível das Aplicações Que Você Irá Construir
            </h3>

            <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">
              Assista à demonstração real de microsserviços, telemetria em tempo real, copilotos com IA e deploys automatizados desenvolvidos pelos alunos nas squads da Formação Master.
            </p>

            <div className="pt-2 flex items-center gap-3 font-mono text-xs text-[#E2E8F0]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Projetos 100% em código aberto e portfólio corporativo</span>
            </div>
          </div>

          {/* Interactive Simulated Video Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#33465C] bg-[#0A0F17] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
                alt="Demonstração prática de código e arquitetura distribuída"
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F17] via-transparent to-[#0A0F17]/50" />

              {/* Play Button Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-[#38BDF8] text-[#071423] flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.7)] group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Assistir Showreel"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>

              {/* Bottom HUD Bar on Video */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-[#0F1722]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#33465C]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>SQUAD DEMO REEL // 4K 60FPS</span>
                </div>
                <span className="text-[#38BDF8]">03:45 / 03:45</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
