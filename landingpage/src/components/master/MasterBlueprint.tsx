"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Bot, 
  Database, 
  GitBranch, 
  ShieldCheck, 
  Server, 
  Radio, 
  CheckCircle2,
  Terminal,
  Activity,
  Zap
} from "lucide-react";

interface ComponentDetail {
  id: string;
  number: number;
  name: string;
  shortName: string;
  modules: string;
  desc: string;
  skills: string[];
  deliverable: string;
}

const BLUEPRINT_COMPONENTS: ComponentDetail[] = [
  {
    id: "mainframe",
    number: 1,
    name: "Core Neural Mainframe & Microsserviços",
    shortName: "Mainframe & DDD",
    modules: "Módulos 03 e 09",
    desc: "A fundação arquitetural da squad corporativa. Implemente Clean Architecture, Domain-Driven Design (DDD) e microsserviços desacoplados capazes de suportar milhões de transações com tolerância a falhas.",
    skills: ["Clean Architecture", "Bounded Contexts", "Event Sourcing", "Saga Pattern"],
    deliverable: "Arquitetura distribuída com microsserviços desacoplados e mensageria assíncrona."
  },
  {
    id: "ai-agents",
    number: 2,
    name: "Agentes Autônomos de IA & RAG",
    shortName: "Agentes IA & RAG",
    modules: "Módulos 07 e 08",
    desc: "Vá além de simples prompts. Aprenda a orquestrar redes de agentes autônomos que realizam tarefas complexas, conectando LLMs a bancos vetoriais (Pgvector, Pinecone) com técnicas avançadas de RAG corporativo.",
    skills: ["LangChain & LlamaIndex", "Vector Search", "Embeddings Corporativos", "Function Calling"],
    deliverable: "Sistema multiagente corporativo com busca semântica e copiloto de código proprietário."
  },
  {
    id: "kafka",
    number: 3,
    name: "Central Data Bus & Mensageria Kafka",
    shortName: "Kafka & Streaming",
    modules: "Módulo 05",
    desc: "A espinha dorsal de streaming de eventos em tempo real. Configure tópicos particionados no Apache Kafka e RabbitMQ com garantia de entrega, sem perda de mensagens e concorrência massiva.",
    skills: ["Apache Kafka", "RabbitMQ", "Consumers Concorrentes", "Idempotência"],
    deliverable: "Pipeline de streaming de alta velocidade para liquidação financeira ou dados em tempo real."
  },
  {
    id: "database",
    number: 4,
    name: "Database Services & Distributed Caching",
    shortName: "PostgreSQL & Redis",
    modules: "Módulos 04 e 06",
    desc: "Armazenamento estruturado de missão crítica. Modelagem avançada de PostgreSQL com particionamento de tabelas, índices B-Tree/GIN e camadas de cache ultra-rápidas com Redis Cluster.",
    skills: ["PostgreSQL Tuning", "Redis Cluster", "Replicação Read/Write", "Connection Pooling"],
    deliverable: "Cluster de banco otimizado respondendo queries analíticas em sub-milissegundos."
  },
  {
    id: "api-gateway",
    number: 5,
    name: "API Gateway & Service Mesh (Istio / gRPC)",
    shortName: "Gateway & gRPC",
    modules: "Módulo 06",
    desc: "Ponto único de entrada e comunicação inter-serviços de ultra-baixa latência com buffers binários gRPC (Protocol Buffers), rate limiting adaptativo e roteamento inteligente com Envoy.",
    skills: ["gRPC / Protobuf", "Envoy Proxy", "Mutual TLS (mTLS)", "Rate Limiting"],
    deliverable: "Gateway corporativo com autenticação centralizada e telemetria por requisição."
  },
  {
    id: "kubernetes",
    number: 6,
    name: "Pipeline CI/CD, Docker & Kubernetes",
    shortName: "Docker & K8s",
    modules: "Módulos 10, 11 e 12",
    desc: "Orquestração profissional de contêineres na nuvem. Crie clusters K8s de produção, gerencie deployments com Helm, configure pipelines no GitHub Actions e implemente GitOps com ArgoCD.",
    skills: ["Kubernetes (Pods, Services)", "Helm Charts", "ArgoCD GitOps", "Zero Downtime Deploy"],
    deliverable: "Cluster Kubernetes com autoscaling horizontal de pods e deploy contínuo automatizado."
  },
  {
    id: "observability",
    number: 7,
    name: "Observabilidade, Datadog & Prometheus",
    shortName: "Observabilidade",
    modules: "Módulo 14",
    desc: "Visibilidade total do sistema 24/7. Colete métricas de infraestrutura, trace distributed spans com OpenTelemetry, configure dashboards no Grafana e receba alertas proativos antes dos usuários.",
    skills: ["OpenTelemetry", "Grafana & Prometheus", "Distributed Tracing", "Alertmanager"],
    deliverable: "Cockpit de observabilidade em tempo real com mapa de dependências de microsserviços."
  },
  {
    id: "security",
    number: 8,
    name: "Segurança Ofensiva & Arquitetura Zero Trust",
    shortName: "Zero Trust & Auth",
    modules: "Módulo 15",
    desc: "Blindagem de dados e conformidade corporativa. Implemente autenticação com OAuth 2.1, rotação automática de JWTs, controle de acesso baseado em papéis (RBAC) e proteção contra OWASP Top 10.",
    skills: ["OAuth 2.1 / OIDC", "Vault Secret Management", "OWASP Hardening", "Criptografia em Repouso"],
    deliverable: "Infraestrutura com auditoria contínua e conformidade de segurança bancária."
  },
  {
    id: "testing",
    number: 9,
    name: "Rigor de Testes E2E, Carga & k6",
    shortName: "Testes & k6",
    modules: "Módulo 16",
    desc: "Garantia matemática de estabilidade. Desenvolva suítes completas de testes unitários com Vitest, fluxos ponta a ponta com Playwright e testes de estresse com k6 simulando dezenas de milhares de usuários virtuais.",
    skills: ["TDD & BDD", "Playwright E2E", "k6 Load Testing", "Chaos Testing"],
    deliverable: "Relatório de teste de estresse validando capacidade máxima de 50.000 requisições simultâneas."
  }
];

export function MasterBlueprint() {
  const [selectedId, setSelectedId] = useState<string>("mainframe");
  const activeComponent = BLUEPRINT_COMPONENTS.find((c) => c.id === selectedId) || BLUEPRINT_COMPONENTS[0];

  return (
    <section id="raio-x" className="py-24 relative bg-[#141E2B] overflow-hidden">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2838] border border-[#38BDF8]/40 mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              RAIO-X INTERATIVO DE ENGENHARIA
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            A Anatomia de um Sistema de Produção Master
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Selecione qualquer componente do esquema arquitetural abaixo para inspecionar os módulos práticos, competências técnicas e entregáveis que você construirá com as próprias mãos.
          </p>
        </div>

        {/* Interactive Chips Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-5xl mx-auto">
          {BLUEPRINT_COMPONENTS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#38BDF8] text-[#071423] font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105"
                    : "bg-[#182332] text-[#CBD5E1] border border-[#33465C] hover:border-[#38BDF8]/60 hover:text-white hover:bg-[#1E2B3C]"
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected ? "bg-[#071423] text-[#38BDF8]" : "bg-[#243447] text-[#94A3B8]"
                }`}>
                  {item.number}
                </span>
                <span>{item.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Blueprint Visualizer & Detail Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3D Exploded Blueprint Graphic */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#33465C] bg-[#0E1724] relative shadow-2xl flex flex-col justify-between group">
            
            {/* Visual Scheme with Dynamic Hover Glow */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/master-blueprint.jpg"
                alt="3D Exploded Architecture Blueprint"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1724] via-transparent to-transparent pointer-events-none" />
              
              {/* Telemetry Indicator Overlay */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1722]/85 backdrop-blur-md border border-[#38BDF8]/40 text-[11px] font-mono text-[#38BDF8]">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>3D BLUEPRINT // EXPLODED SQUAD VIEW</span>
              </div>
            </div>

            {/* Bottom Bar on Blueprint Graphic */}
            <div className="p-4 sm:p-5 border-t border-[#33465C] bg-[#142030]/90 flex items-center justify-between text-xs font-mono">
              <span className="text-[#94A3B8]">
                MODO ATIVO: <strong className="text-white font-semibold">{activeComponent.name}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#182332] text-[#38BDF8] border border-[#38BDF8]/30">
                {activeComponent.modules}
              </span>
            </div>

          </div>

          {/* Right Column: Dynamic Deep-Dive Inspection Card */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-[#38BDF8]/40 bg-[#142030]/95 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,34,0.6)]"
              >
                <div>
                  {/* Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#182332] text-xs font-mono text-[#38BDF8] font-bold border border-[#38BDF8]/30">
                      COMPONENTE #{activeComponent.number}
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">
                      {activeComponent.modules}
                    </span>
                  </div>

                  {/* Component Title */}
                  <h3 className="font-montserrat font-black text-2xl text-white mb-4 leading-tight">
                    {activeComponent.name}
                  </h3>

                  {/* Technical Description */}
                  <p className="font-inter text-sm text-[#CBD5E1] leading-relaxed mb-6">
                    {activeComponent.desc}
                  </p>

                  {/* Skills Grid */}
                  <div className="mb-6">
                    <span className="font-mono text-[11px] text-[#38BDF8] uppercase tracking-wider block mb-2.5 font-bold">
                      Competências de Engenharia Trabalhadas:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeComponent.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-[#182332] border border-[#33465C] text-xs font-inter text-[#E2E8F0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tangible Deliverable */}
                  <div className="p-4 rounded-xl bg-[#0F1722] border border-[#33465C] space-y-1">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                      Entregável Prático da Squad:
                    </span>
                    <p className="font-inter text-xs text-[#E2E8F0] leading-relaxed">
                      {activeComponent.deliverable}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-[#33465C] flex items-center justify-between">
                  <a
                    href="#grade"
                    className="font-montserrat text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ver este módulo na grade detalhada</span>
                    <Terminal className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#planos"
                    className="px-4 py-2 rounded-lg bg-[#38BDF8] text-[#071423] font-montserrat text-xs font-black uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    Destravar
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
