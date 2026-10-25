"use client";

import React, { useState } from "react";
import { Sparkles, Bot, Send, User, Check, Terminal } from "lucide-react";

interface PromptScenario {
  id: string;
  label: string;
  userPrompt: string;
  aiResponse: {
    analysis: string;
    codeDiff?: string;
    recommendation: string;
  };
}

const SCENARIOS: PromptScenario[] = [
  {
    id: "pr-review",
    label: "Revisão de Pull Request",
    userPrompt: "Tutor IA, revisei meu PR da API de Pagamentos com Node.js e Prisma. Como está a arquitetura?",
    aiResponse: {
      analysis: "Identifiquei que a transação bancária não está isolada em bloco atômico (ACID). Caso o webhook caia no meio do processamento, você terá inconsistência de saldo.",
      codeDiff: `// [Refatoração corporativa sugerida pelo Copilot Digital Coders]
await prisma.$transaction(async (tx) => {
  const wallet = await tx.wallet.update({
    where: { userId },
    data: { balance: { decrement: amount } }
  });
  await tx.auditLog.create({ data: { type: "DEBIT", amount } });
});`,
      recommendation: "Excelente separação de DTOs! Com o bloco de transação acima, seu código atinge padrão de segurança bancária corporativa."
    }
  },
  {
    id: "sala-invertida",
    label: "Dúvida Pré-Aula",
    userPrompt: "Por que não devo acoplar o framework web diretamente ao Use Case de negócio?",
    aiResponse: {
      analysis: "Princípio da Inversão de Dependência (DIP do SOLID): O core de negócio (Use Case) deve ser agnóstico a ferramentas externas. Se amanhã a empresa trocar Express por Fastify ou PostgreSQL por DynamoDB, seu core permanece intacto.",
      codeDiff: `// Interface (Porta) desacoplada do framework
interface UserRepository {
  findById(id: string): Promise<User | null>;
}

export class GetUserProfileUseCase {
  constructor(private userRepo: UserRepository) {}
}`,
      recommendation: "No laboratório prático presencial no Hub, vamos aplicar isso na refatoração da squad. Leve sua dúvida para a daily!"
    }
  },
  {
    id: "junior-pleno",
    label: "Diferencial de Engenharia",
    userPrompt: "Como o programa da Digital Coders acelera a maturidade técnica para o mercado?",
    aiResponse: {
      analysis: "Ensinamos o ciclo completo de engenharia: testes automatizados, CI/CD, observabilidade, microsserviços e resiliência de falhas.",
      recommendation: "Você programa no campus com os mesmos padrões e ferramentas corporativas utilizadas pelo Grupo T2C2TECH."
    }
  }
];

export function AiCopilotDemo() {
  const [selectedScenario, setSelectedScenario] = useState<PromptScenario>(SCENARIOS[0]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>("");
  const [customResponse, setCustomResponse] = useState<PromptScenario["aiResponse"] | null>(null);

  const handleSelectScenario = (scenario: PromptScenario) => {
    setIsTyping(true);
    setCustomResponse(null);
    setSelectedScenario(scenario);
    setTimeout(() => {
      setIsTyping(false);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setCustomResponse({
        analysis: `Excelente pergunta sobre "${customInput}". Na metodologia Digital Coders, nossos mentores e o agente IA combinam análise estática de código com boas práticas de engenharia de software para desbloquear seu avanço sem dar respostas prontas.`,
        recommendation: "Você pratica isso ao vivo no campus com acompanhamento de Tech Leads seniores!"
      });
      setCustomInput("");
    }, 600);
  };

  const activeResponse = customResponse || selectedScenario.aiResponse;

  return (
    <section id="simulador" className="py-20 relative bg-[#141E2B] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2838] border border-[#33465C] text-xs font-montserrat font-bold text-[#38BDF8] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Copilot & Agente de IA</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Experimente o Tutor IA 24/7 da Digital Coders
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#94A3B8] font-inter">
            Orientação contínua e análise estática de código com inteligência artificial calibrada para a metodologia de software house.
          </p>
        </div>

        {/* Preset Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-mono text-[#94A3B8] mr-2 flex items-center gap-1 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
            Cenários de Teste:
          </span>
          {SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => handleSelectScenario(scenario)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat transition-all ${
                selectedScenario.id === scenario.id && !customResponse
                  ? "bg-[#38BDF8] text-[#141E2B] font-bold shadow-md"
                  : "bg-[#1C2838] text-[#94A3B8] border border-[#33465C] hover:text-white hover:border-[#38BDF8]"
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>

        {/* Chat / Terminal Window */}
        <div className="rounded-2xl border border-[#33465C] bg-[#182332] shadow-2xl overflow-hidden max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#141E2B] border-b border-[#33465C]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#243447] border border-[#33465C] flex items-center justify-center text-[#38BDF8]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="font-montserrat text-xs font-bold text-white block">
                  Digital Coders Copilot AI
                </span>
                <span className="font-mono text-[10px] text-[#38BDF8] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  Online • Telemetria Ativa
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#94A3B8] bg-[#1C2838] px-2 py-0.5 rounded border border-[#33465C]">
              v4.0.0
            </span>
          </div>

          {/* Messages */}
          <div className="p-5 sm:p-6 space-y-4 min-h-[300px] bg-[#182332]">
            {/* User */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-[#243447] border border-[#33465C] text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-md font-inter leading-relaxed shadow">
                <span className="text-[10px] font-mono text-[#38BDF8] block mb-1 font-semibold">
                  Aluno Digital Coders
                </span>
                {customResponse ? "Pergunta personalizada enviada" : selectedScenario.userPrompt}
              </div>
              <div className="w-7 h-7 rounded-full bg-[#1C2838] border border-[#33465C] flex items-center justify-center shrink-0 text-[#94A3B8]">
                <User className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* AI */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#1C2838] border border-[#38BDF8] flex items-center justify-center shrink-0 text-[#38BDF8]">
                <Bot className="w-3.5 h-3.5" />
              </div>

              <div className="bg-[#1C2838] border border-[#33465C] text-[#E2E8F0] p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm max-w-xl space-y-3 font-inter leading-relaxed shadow-md">
                <div className="flex items-center justify-between border-b border-[#33465C]/60 pb-1.5">
                  <span className="text-[10px] font-montserrat text-[#38BDF8] font-bold uppercase tracking-wider">
                    Parecer do Copilot IA
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">
                    120ms
                  </span>
                </div>

                {isTyping ? (
                  <div className="flex items-center gap-2 text-[#38BDF8] font-mono py-2">
                    <span className="animate-spin text-sm">⟳</span>
                    <span>Analisando sintaxe e arquitetura de software...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-[#94A3B8]">{activeResponse.analysis}</p>

                    {activeResponse.codeDiff && (
                      <div className="p-3 rounded-lg bg-[#0F1722] border border-[#33465C] font-mono text-[11px] text-[#38BDF8] overflow-x-auto">
                        <pre>{activeResponse.codeDiff}</pre>
                      </div>
                    )}

                    <div className="p-2.5 rounded-lg bg-[#243447] border border-[#33465C] text-xs text-[#E2E8F0] flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{activeResponse.recommendation}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Prompt Input Form */}
          <form onSubmit={handleCustomSubmit} className="p-3 bg-[#141E2B] border-t border-[#33465C] flex items-center gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Digite uma dúvida de código ou arquitetura..."
              className="flex-1 bg-[#182332] border border-[#33465C] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#38BDF8] transition-colors"
            />
            <button
              type="submit"
              disabled={!customInput.trim()}
              className="px-4 py-2 rounded-lg bg-white text-[#1C2838] font-montserrat text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#E2E8F0] transition-all"
            >
              <span>Consultar</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
