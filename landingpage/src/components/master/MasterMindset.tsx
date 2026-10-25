"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, XCircle, ShieldCheck, Zap } from "lucide-react";

export function MasterMindset() {
  const shifts = [
    {
      from: "Escrever código que funciona 'só na minha máquina'",
      to: "Projetar arquiteturas resilientes com 99.99% uptime",
      desc: "Você aprende a dominar microsserviços, cache distribuído com Redis, concorrência e mensageria assíncrona com Apache Kafka.",
      tag: "Arquitetura",
    },
    {
      from: "Usar IA como um chat comum com respostas genéricas",
      to: "Orquestrar Agentes Autônomos e RAG corporativo",
      desc: "Implemente copilotos integrados ao seu próprio banco vetorial, automação de code-review e geração de código com rigor técnico.",
      tag: "Inteligência Artificial",
    },
    {
      from: "Medo de dar deploy na sexta-feira e quebrar produção",
      to: "Pipelines CI/CD com testes automatizados e rollback zero-downtime",
      desc: "Docker, Kubernetes, ArgoCD e monitoramento em tempo real com Prometheus e Datadog para dormir tranquilo após qualquer release.",
      tag: "DevOps & Cloud",
    },
    {
      from: "Ser apenas um dev tarefeiro que recebe ordens",
      to: "Atuar como Tech Lead de squads de alto nível",
      desc: "Domine Clean Architecture, DDD, modelagem de dados complexos e liderança técnica para negociar prazos e arquitetar grandes produtos.",
      tag: "Liderança",
    },
  ];

  return (
    <section className="py-24 relative bg-[#0F1722] overflow-hidden border-t border-[#33465C]/60">
      
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2838] border border-[#38BDF8]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              O PONTO DE INFLEXÃO
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            O que te falta para virar a chave e se tornar um Engenheiro Master?
          </h2>

          <p className="font-inter text-base text-[#94A3B8] leading-relaxed">
            O mercado está saturado de desenvolvedores superficiais que só repetem tutoriais. Mas as empresas disputam avidamente quem sabe desenhar sistemas complexos sob pressão.
          </p>

          {/* Quotation Block with Accent Neon Border */}
          <div className="mt-8 p-6 rounded-2xl bg-[#142030] border-l-4 border-[#38BDF8] shadow-lg">
            <blockquote className="font-montserrat text-lg sm:text-xl font-bold text-white leading-relaxed mb-3">
              &ldquo;A diferença entre um desenvolvedor comum e um Engenheiro Master não é o tempo de tela. É o rigor arquitetural, a clareza em sistemas de larga escala e a maestria em orquestrar IA em produção.&rdquo;
            </blockquote>
            <cite className="font-inter text-xs text-[#94A3B8] not-italic flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>Conselho de Engenharia de Software da Digital Coders</span>
            </cite>
          </div>
        </div>

        {/* 4 Cards: As Grandes Viradas de Chave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shifts.map((shift, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#182332] border border-[#33465C] hover:border-[#38BDF8]/60 hover:shadow-[0_15px_30px_rgba(15,23,34,0.7)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#243447] text-[11px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                    {shift.tag}
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">0{idx + 1} // SHIFT</span>
                </div>

                {/* From / To Comparison */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2.5 text-xs text-[#94A3B8] line-through opacity-75">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{shift.from}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-base font-montserrat font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{shift.to}</span>
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {shift.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#33465C]/60 flex items-center justify-between text-xs font-mono text-[#38BDF8]">
                <span>Módulo Prático Vinculado</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
