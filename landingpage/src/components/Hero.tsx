"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Play, 
  Copy, 
  Check, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

interface CodeTab {
  id: string;
  filename: string;
  code: string;
  output: string[];
}

const CODE_TABS: CodeTab[] = [
  {
    id: "system-config",
    filename: "system.config.ts",
    code: `const engineer = await DigitalCoders.qualify({
  campus: "Juiz de Fora",
  methodology: "SoftwareHouse_Immersive",
  readyForMarket: true
});

console.log(\`Status de Contratação: \${engineer.status}\`);`,
    output: [
      "[✓] Validando arquitetura de software e rigor de engenharia...",
      "[✓] Testes unitários e de integração: 100% aprovados.",
      "[Status] Aluno qualificado e pronto para atuar em squads corporativas."
    ]
  },
  {
    id: "copilot",
    filename: "copilot.engine.ts",
    code: `import { AICopilot } from "@digitalcoders/enterprise";

export const copilot = new AICopilot({
  hub: "Juiz de Fora - MG",
  standards: "Clean_Architecture_DDD"
});

export const prReview = await copilot.inspectPR({
  squad: "squad-03-fintech",
  branch: "feature/distributed-transactions"
});`,
    output: [
      "[AI Copilot] Inspecionando consistência de transações distribuídas...",
      "[✓] Princípios SOLID e desacoplamento de domínio validados.",
      "[Nota] Qualidade Arquitetural: 9.9/10."
    ]
  }
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>("system-config");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showOutput, setShowOutput] = useState<boolean>(true);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const currentTab = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 overflow-hidden flex flex-col justify-center bg-[#141E2B] bg-blueprint-grid">
      {/* Glow corporativo sutil azul celeste */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#1C2838]/80 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Badge de Localização / Status */}
        <div className="self-start mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1C2838] border border-[#33465C] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-montserrat font-bold text-[10px] tracking-[0.18em] text-[#E2E8F0] uppercase">
              Campus Presencial • Juiz de Fora, MG
            </span>
          </div>
        </div>

        {/* Top Section: Headlines & Interactive IDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12">
          
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight text-white">
              Acelere sua carreira na tecnologia.{" "}
              <span className="text-[#94A3B8] font-extrabold">
                Codifique com inteligência.
              </span>
            </h1>

            <p className="font-inter text-sm sm:text-base leading-relaxed text-[#94A3B8] max-w-2xl">
              Formação presencial com metodologia de software house: projetos corporativos complexos, mentoria individual sênior e integração com copilotos de inteligência artificial.
            </p>

            {/* Botões de Ação Estilo Corporativo */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#inscricao"
                className="min-h-[48px] px-6 py-3.5 rounded-xl bg-white text-[#1C2838] font-montserrat text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-black/25 hover:bg-[#E2E8F0] active:scale-[0.98] transition-all"
              >
                <span>Candidatar-se ao Processo</span>
                <ArrowRight className="w-4 h-4 text-[#1C2838]" />
              </a>

              <a
                href="#trilhas"
                className="min-h-[48px] px-6 py-3.5 rounded-xl bg-[#1C2838] border border-[#33465C] text-[#E2E8F0] font-montserrat text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#243447] active:scale-[0.98] transition-all"
              >
                <Terminal className="w-4 h-4 text-[#38BDF8]" />
                <span>Ver Programas Imersivos</span>
              </a>
            </div>

            {/* Métricas Horizontais Corporativas */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
              <div className="p-3.5 rounded-xl bg-[#1C2838] border border-[#33465C] flex flex-col">
                <span className="font-montserrat text-xl sm:text-2xl font-extrabold text-white">85%+</span>
                <span className="font-inter text-[11px] text-[#94A3B8] leading-tight mt-0.5">Taxa de contratação</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C2838] border border-[#33465C] flex flex-col">
                <span className="font-montserrat text-xl sm:text-2xl font-extrabold text-[#38BDF8]">100%</span>
                <span className="font-inter text-[11px] text-[#94A3B8] leading-tight mt-0.5">Projetos reais</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C2838] border border-[#33465C] flex flex-col">
                <span className="font-montserrat text-xl sm:text-2xl font-extrabold text-[#E2E8F0]">1:1</span>
                <span className="font-inter text-[11px] text-[#94A3B8] leading-tight mt-0.5">Mentorias sênior</span>
              </div>
            </div>

          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-5 relative">
            
            <div className="rounded-2xl border border-[#33465C] bg-[#182332] shadow-2xl overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141E2B] border-b border-[#33465C]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#33465C]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#33465C]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                  <span className="ml-2 font-mono text-xs text-[#94A3B8]">Digital Coders Core</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded text-[#94A3B8] hover:text-white hover:bg-[#243447] transition-colors"
                    title="Copiar"
                    aria-label="Copiar código"
                  >
                    {hasCopied ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1C2838] border border-[#33465C] text-[#38BDF8] hover:text-white text-xs font-mono font-medium transition-colors"
                  >
                    <Play className="w-3 h-3" />
                    <span>{isRunning ? "Executando..." : "Executar"}</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center px-2 bg-[#101C2C] border-b border-[#33465C]/60 text-xs font-mono">
                {CODE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-[#38BDF8] text-[#38BDF8] bg-[#182332]"
                        : "border-transparent text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>{tab.filename}</span>
                  </button>
                ))}
              </div>

              {/* Code Body */}
              <div className="p-4 font-mono text-xs text-[#94A3B8] leading-relaxed overflow-x-auto bg-[#182332]">
                <pre className="whitespace-pre">
                  <code>{currentTab.code}</code>
                </pre>
              </div>

              {/* Output Tray */}
              <div className="border-t border-[#33465C] bg-[#0F1722] p-3.5 font-mono text-xs text-[#94A3B8] space-y-1">
                <div className="text-[10px] text-[#38BDF8] font-bold uppercase tracking-wider mb-1">
                  Terminal & Telemetria v4.0.0
                </div>
                {isRunning ? (
                  <div className="text-[#38BDF8]">Validando pipeline corporativo...</div>
                ) : showOutput ? (
                  currentTab.output.map((line, idx) => (
                    <p key={idx} className={line.startsWith("[✓]") ? "text-[#38BDF8]" : "text-[#E2E8F0]"}>
                      {line}
                    </p>
                  ))
                ) : null}
              </div>
            </div>

          </div>

        </div>

        {/* Lab Campus Preview */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#33465C] bg-[#243447] shadow-xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA41w4OQxegyeXJeQqMXEeIE_1-9eFSd7rTDHJdZomyPsZsCkUtSg6SCJW1qnp-rtajPYPyLv2XeTBiAcebtB5MamXe-48vO8llvzWKNPzktknZVr4TBS3506-QMW7Drox4jzvkCEH5KYN2MZStqIC9f048LLm47nmR_dHo1o09lwk2UenU2-2Jm65LkkOFbmjg9kNpsGgDG-pAbH0eaIlsnxtj8Fdp8uJHDFaAF--8yzgdDojrFjHYBQ"
            alt="Infraestrutura moderna e devs codificando na Digital Coders Campus"
            className="w-full h-56 sm:h-72 object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141E2B] via-[#141E2B]/40 to-transparent" />
          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-montserrat font-semibold text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Hub Tech Corporativo • Sede Polo Juiz de Fora</span>
            </div>
            <span className="font-mono text-[10px] bg-[#1C2838]/90 border border-[#33465C] px-2.5 py-1 rounded text-[#38BDF8]">
              v4.0.0 active
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
