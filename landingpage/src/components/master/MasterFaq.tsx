"use client";

import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: "Já fiz outros cursos e bootcamps básicos. O que muda na Formação Master?",
    a: "Muda o patamar por completo. Cursos introdutórios ensinam apenas a sintaxe de linguagens e CRUDs simples. A Formação Master ensina você a pensar como um Arquiteto de Software: modelagem DDD, microsserviços tolerantes a falhas, concorrência extrema, orquestração de IA corporativa com RAG e pipelines DevOps completos com Kubernetes. É a diferença entre apenas 'digitar código' e dominar a engenharia."
  },
  {
    q: "Por quanto tempo eu tenho acesso ao conteúdo?",
    a: "Depende do plano escolhido: 1 ano ou 2 anos de acesso irrestrito. O Plano de 2 Anos VIP é a opção de melhor custo-benefício e te garante folga total para implementar os 6 projetos de squad no seu ritmo, receber mentorias 1:1 e acompanhar todas as novas atualizações da stack."
  },
  {
    q: "E se eu não me adaptar ou achar que não é para mim?",
    a: "Você tem 7 dias de garantia incondicional total. Você pode entrar, assistir às aulas, testar a comunidade e explorar os projetos. Se achar que a Formação Master não atende às suas expectativas, basta enviar um e-mail para o suporte e devolveremos 100% do valor pago, sem burocracia."
  },
  {
    q: "Preciso ter um computador topo de linha para rodar os projetos?",
    a: "Não! Qualquer computador intermediário com 8GB a 16GB de RAM e processador moderno suporta os exercícios. Além disso, ensinamos você a rodar contêineres e clusters diretamente em instâncias gratuitas de Cloud (AWS/GCP e GitHub Codespaces), reduzindo o peso na sua máquina local."
  },
  {
    q: "Como funciona o suporte a dúvidas?",
    a: "Você tem dois caminhos ativos 24 horas por dia: o Tutor IA Copilot (treinado com toda a documentação, padrões arquiteturais e código do curso para tirar dúvidas de sintaxe e bugs na hora) e a Comunidade Exclusiva de Tech Leads (no Discord/Telegram), onde você tem contato direto com os instrutores e engenheiros seniores do mercado."
  },
  {
    q: "Nunca mexi com Kubernetes, Kafka ou IA generativa. Conseguirei acompanhar?",
    a: "Sim, com certeza! O método da Digital Coders parte dos princípios e fundamentos até a implementação em larga escala. Cada módulo possui aulas teóricas explicativas com diagramas visuais e laboratórios práticos passo a passo com código comentado."
  },
  {
    q: "Quanto tempo de dedicação semanal é recomendado?",
    a: "Recomendamos entre 4 e 6 horas semanais para você absorver os conceitos e codificar os laboratórios de squad com consistência. O curso é 100% gravado com sessões ao vivo complementares, permitindo que você estude no seu próprio ritmo sem conflitar com seu trabalho atual."
  },
  {
    q: "Consigo concorrer a vagas de Tech Lead ou posições remotas internacionais?",
    a: "Com certeza. O programa foi desenhado com base nos requisitos reais de testes técnicos de System Design de grandes big techs e multinacionais. Os 6 projetos corporativos que você constrói formam um portfólio de alta densidade no GitHub que comprova senioridade imediata para recrutadores técnicos."
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Aceitamos Cartão de Crédito (com parcelamento em até 12x, inclusive com múltiplos cartões se necessário), PIX com liberação instantânea e Boleto Bancário. O processamento é realizado por checkout criptografado de padrão bancário."
  },
  {
    q: "A formação possui certificado de conclusão?",
    a: "Sim! Ao concluir a grade curricular e a entrega dos projetos de squad, você recebe o Certificado Oficial de Conclusão da Formação Master pela Digital Coders, com carga horária de 300 horas e código de autenticidade para anexar ao seu LinkedIn."
  }
];

export function MasterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#141E2B] overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-blueprint-lines opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182332] border border-[#38BDF8]/40 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              TRANSPARÊNCIA TOTAL
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Dúvidas Frequentes
          </h2>

          <p className="font-inter text-base text-[#94A3B8]">
            Tudo o que você precisa saber antes de dar esse salto definitivo na sua carreira.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#142030] border border-[#33465C]/80 overflow-hidden transition-all hover:border-[#38BDF8]/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-montserrat font-bold text-sm sm:text-base text-white">
                    {item.q}
                  </span>
                  <span className={`text-[#38BDF8] text-xl font-bold transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-45" : ""
                  }`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#33465C]/40 bg-[#0F1722]/50">
                    <p className="font-inter text-sm text-[#CBD5E1] leading-relaxed pt-2">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
