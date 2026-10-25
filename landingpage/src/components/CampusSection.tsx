import React from "react";
import { MapPin, Wifi, MonitorCheck, Coffee, Navigation, Globe } from "lucide-react";

export function CampusSection() {
  return (
    <section id="campus" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 max-w-3xl">
          <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-[#38BDF8] uppercase">
            Campus Presencial & Hub Tecnológico
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl leading-tight text-white">
            Sede em Juiz de Fora (MG), Atendimento para Todo o Brasil
          </h2>
          <p className="font-inter text-sm text-[#94A3B8]">
            Um ecossistema planejado como uma Software House de padrão internacional para você respirar código de alta densidade técnica todos os dias.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Campus Feature Badges */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-[#243447] border border-[#33465C]">
                <div className="p-2.5 rounded-lg bg-[#1C2838] text-[#38BDF8] w-fit mb-3 border border-[#33465C]">
                  <MonitorCheck className="w-5 h-5" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white mb-1">
                  Bancadas High-Performance
                </h4>
                <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
                  Estações de trabalho ergonômicas preparadas para maratonas de pair-programming com monitores duplos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#243447] border border-[#33465C]">
                <div className="p-2.5 rounded-lg bg-[#1C2838] text-[#E2E8F0] w-fit mb-3 border border-[#33465C]">
                  <Wifi className="w-5 h-5" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white mb-1">
                  Fibra Óptica Dedicada
                </h4>
                <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
                  Rede de ultra-baixa latência com redundância para deploys instantâneos e testes de carga contínuos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#243447] border border-[#33465C]">
                <div className="p-2.5 rounded-lg bg-[#1C2838] text-[#38BDF8] w-fit mb-3 border border-[#33465C]">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white mb-1">
                  Hub & Dev Lounge
                </h4>
                <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
                  Ambiente de convivência para networking de verdade, hackathons e discussões arquiteturais.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#243447] border border-[#33465C]">
                <div className="p-2.5 rounded-lg bg-[#1C2838] text-[#E2E8F0] w-fit mb-3 border border-[#33465C]">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-montserrat font-bold text-sm text-white mb-1">
                  Acesso Híbrido Nacional
                </h4>
                <p className="font-inter text-xs text-[#94A3B8] leading-relaxed">
                  Alunos fora de Juiz de Fora participam ativamente das squads remotas com transmissão em tempo real.
                </p>
              </div>

            </div>

            {/* Address Banner */}
            <div className="p-4 rounded-xl bg-[#1C2838] border border-[#33465C] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <div>
                  <span className="font-montserrat text-xs text-[#38BDF8] block font-bold uppercase tracking-wider">
                    Localização da Sede Física:
                  </span>
                  <span className="font-inter text-xs text-[#E2E8F0]">
                    Polo Tecnológico Central • Juiz de Fora, Minas Gerais (MG) - Brasil
                  </span>
                </div>
              </div>
              <a
                href="#inscricao"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#243447] hover:bg-[#2c3d52] text-[#38BDF8] border border-[#33465C] font-montserrat text-xs font-bold transition-colors"
              >
                <span>Agendar Visita</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Campus Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#33465C] bg-[#243447] shadow-xl">
              <div
                className="w-full h-72 sm:h-80 bg-cover bg-center relative flex items-end p-4"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuADAAnc8AP5MdJMjMHl5vILtBAjlLLSpwG0Bt6F5DBDDIi-v6pqXitSHnzQ68i7NOOCCz-jbQO1QmlFZqxPxRheVEsEZU--PkNXg_NZSG77BjebsvDq1_D-5003isejr-ph9UKOX_bK3_1S5hCKGQXFL_s5sudkXLmbGtGQdaJaaWZeW8BTAO4CGzWcebE_OejNNGUB8M8vUhNzbvTAWyl525UPyO6NqJUhR1qKS22SmEcJANFa3DDq5g')`
                }}
              >
                <div className="w-full bg-[#1C2838]/90 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between border border-[#33465C] shadow-lg">
                  <div className="flex flex-col">
                    <span className="font-montserrat text-xs font-bold text-white">Polo de Inovação • Centro</span>
                    <span className="font-inter text-xs text-[#94A3B8]">Salas com infraestrutura de fibra óptica dedicada</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#243447] text-[#38BDF8]">
                    <Navigation className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#243447]">
                <h4 className="font-montserrat font-bold text-base text-white mb-1.5">
                  Vivência real de Software House
                </h4>
                <p className="font-inter text-xs text-[#94A3B8] leading-relaxed mb-3">
                  Conecte-se com mentores, acompanhe um Coding Dojo presencial e conheça nosso hub estruturado sob as diretrizes do Grupo T2C2TECH.
                </p>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#94A3B8] border-t border-[#33465C]/60 pt-2.5">
                  <span>Horário: 08:00 às 22:00</span>
                  <span className="text-[#38BDF8] font-bold">Segunda a Sábado</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
