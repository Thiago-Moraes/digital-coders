"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  ArrowRight, 
  Lock, 
  Clock,
  HelpCircle,
  Check,
  CheckCircle2
} from "lucide-react";
import { FAQS } from "@/data/mockData";

interface ApplicationFormProps {
  selectedTrackId?: string;
}

export function ApplicationForm({ selectedTrackId = "bootcamp-fullstack" }: ApplicationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [track, setTrack] = useState(selectedTrackId);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  React.useEffect(() => {
    if (selectedTrackId) {
      setTrack(selectedTrackId);
    }
  }, [selectedTrackId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#38BDF8", "#FFFFFF", "#94A3B8"]
        });
      } catch (err) {
        // fallback
      }
    }, 600);
  };

  return (
    <section id="inscricao" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Application Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#243447] border border-[#33465C] shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Context & Guidelines */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded bg-[#1C2838] border border-[#33465C] text-[#38BDF8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-montserrat font-bold text-[10px] tracking-wider uppercase">
                  Processo Seletivo Aberto
                </span>
              </div>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white leading-tight">
                Pronto para construir sistemas de classe mundial?
              </h2>

              <p className="font-inter text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Turmas restritas a 24 desenvolvedores por ciclo presencial. Preencha seus dados para receber o teste de raciocínio lógico e orientações do campus.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]">
                  <span className="font-mono text-xs font-bold text-[#38BDF8] w-6 h-6 rounded-md bg-[#243447] flex items-center justify-center">1</span>
                  <span className="font-inter text-xs text-[#E2E8F0]">Inscrição no Formulário de Admissão</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]">
                  <span className="font-mono text-xs font-bold text-[#38BDF8] w-6 h-6 rounded-md bg-[#243447] flex items-center justify-center">2</span>
                  <span className="font-inter text-xs text-[#E2E8F0]">Avaliação Diagnóstica de Lógica</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1C2838] border border-[#33465C]">
                  <span className="font-mono text-xs font-bold text-[#38BDF8] w-6 h-6 rounded-md bg-[#243447] flex items-center justify-center">3</span>
                  <span className="font-inter text-xs text-[#E2E8F0]">Entrevista com Tech Lead & Início no Hub</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-inter text-[#94A3B8] pt-2">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Sem taxa de inscrição</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Retorno em até 24h</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-6">
              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#182332] border border-[#33465C] text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1C2838] border border-[#38BDF8] flex items-center justify-center mx-auto text-[#38BDF8]">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">Inscrição Confirmada!</h3>
                  <p className="font-inter text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Nossa equipe de admissão entrará em contato com <strong className="text-white">{name}</strong> via WhatsApp e e-mail com as instruções do desafio diagnóstico.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-montserrat text-[#38BDF8] hover:underline pt-2 block mx-auto uppercase tracking-wider font-semibold"
                  >
                    Enviar nova candidatura
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1">
                    <label className="font-montserrat text-[11px] font-semibold text-[#94A3B8]" htmlFor="studentName">
                      Nome Completo
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Felipe Costa"
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#182332] border border-[#33465C] text-white placeholder:text-[#94A3B8]/50 text-xs font-inter focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-montserrat text-[11px] font-semibold text-[#94A3B8]" htmlFor="studentEmail">
                      E-mail Profissional
                    </label>
                    <input
                      id="studentEmail"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="felipe@email.com"
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#182332] border border-[#33465C] text-white placeholder:text-[#94A3B8]/50 text-xs font-inter focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-montserrat text-[11px] font-semibold text-[#94A3B8]" htmlFor="studentWhatsapp">
                      WhatsApp com DDD
                    </label>
                    <input
                      id="studentWhatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(32) 99999-9999"
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#182332] border border-[#33465C] text-white placeholder:text-[#94A3B8]/50 text-xs font-inter focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-montserrat text-[11px] font-semibold text-[#94A3B8]" htmlFor="studentTrilha">
                      Programa Desejado
                    </label>
                    <select
                      id="studentTrilha"
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#182332] border border-[#33465C] text-white text-xs font-inter focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    >
                      <option value="bootcamp-fullstack">Bootcamp Fullstack Web (Presencial - 6 Meses)</option>
                      <option value="especializacao-mobile">Especialização Mobile (Híbrido - 4 Meses)</option>
                      <option value="imersoes-b2b">Treinamento Corporativo In-Company B2B</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[50px] mt-2 rounded-xl bg-white text-[#1C2838] font-montserrat text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform hover:bg-[#E2E8F0]"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Garantir Minha Vaga"}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#1C2838]" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[#94A3B8] font-inter text-[11px] pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Processo seletivo sem taxa • Campus Juiz de Fora, MG</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-[#38BDF8] uppercase block mb-1">
              Esclarecimentos
            </span>
            <h3 className="font-montserrat font-extrabold text-2xl text-white">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#1C2838] border border-[#33465C] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between text-sm font-montserrat font-semibold text-white hover:text-[#38BDF8] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#38BDF8] font-mono text-base shrink-0 ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs font-inter text-[#94A3B8] leading-relaxed border-t border-[#33465C]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
