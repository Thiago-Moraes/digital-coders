import React from "react";
import { Building2, ArrowRight, ShieldCheck, Code2, Users2, Zap, CheckCircle2 } from "lucide-react";

export function B2BSection() {
  return (
    <section id="b2b" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Box */}
        <div className="rounded-3xl border border-[#33465C] bg-[#1C2838] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243447] border border-[#33465C] text-xs font-montserrat font-bold text-[#38BDF8] uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Digital Coders Corporate • B2B</span>
              </div>

              <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white leading-tight">
                Eleve a maturidade e a densidade técnica da sua equipe de engenharia
              </h2>

              <p className="font-inter text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Desenvolvemos programas de aceleração in-company personalizados para os desafios da sua empresa: migração de sistemas legados, Clean Architecture, microsserviços orientados a eventos (RabbitMQ) e adoção de IA na esteira de desenvolvimento.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Currículos calibrados para a stack da sua organização</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
                  <span>Laboratório presencial em Juiz de Fora ou In-Company</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Aceleração de onboarding de novos desenvolvedores</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter">
                  <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
                  <span>Métricas de evolução e testes práticos de homologação</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#inscricao"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold font-montserrat text-xs uppercase tracking-wider text-[#1C2838] bg-white hover:bg-[#E2E8F0] active:scale-95 transition-all shadow"
                >
                  <span>Solicitar Proposta Corporativa Customizada</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Metric Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 sm:p-5 rounded-xl bg-[#243447] border border-[#33465C] flex flex-col justify-between">
                <Zap className="w-6 h-6 text-[#38BDF8] mb-3" />
                <div>
                  <span className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white block">
                    -40%
                  </span>
                  <span className="text-xs font-inter text-[#94A3B8]">
                    Tempo de onboarding de novos engenheiros na squad
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#243447] border border-[#33465C] flex flex-col justify-between">
                <ShieldCheck className="w-6 h-6 text-[#CBD5E1] mb-3" />
                <div>
                  <span className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white block">
                    99.8%
                  </span>
                  <span className="text-xs font-inter text-[#94A3B8]">
                    Satisfação dos gestores técnicos e CTOs parceiros
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#243447] border border-[#33465C] flex flex-col justify-between">
                <Code2 className="w-6 h-6 text-[#38BDF8] mb-3" />
                <div>
                  <span className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white block">
                    100%
                  </span>
                  <span className="text-xs font-inter text-[#94A3B8]">
                    Casos reais extraídos do repositório da sua organização
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#243447] border border-[#33465C] flex flex-col justify-between">
                <Users2 className="w-6 h-6 text-[#E2E8F0] mb-3" />
                <div>
                  <span className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white block">
                    +40
                  </span>
                  <span className="text-xs font-inter text-[#94A3B8]">
                    Squads corporativas aceleradas em todo o país
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
