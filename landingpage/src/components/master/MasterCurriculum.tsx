"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";

interface CurriculumModule {
  num: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  lessons: string[];
}

const MODULES_DATA: CurriculumModule[] = [
  {
    num: "01",
    title: "Boas-Vindas e Arquitetura de Carreira Master",
    badge: "Fundamentos",
    lessons: [
      "Metodologia de Software House da Digital Coders",
      "Setup do Ambiente de Alta Produtividade (Linux, Neovim/VSCode, Docker)",
      "Roadmap individual do Desenvolvedor para Tech Lead"
    ]
  },
  {
    num: "02",
    title: "TypeScript Avançado & Internals do Runtime Node.js",
    lessons: [
      "Event Loop, Libuv, Worker Threads e Streams de Alta Velocidade",
      "Tipos Utilitários, Generics Complexos e Type Narrowing Estrito",
      "Gerenciamento de Memória, Garbage Collector e Memory Leaks"
    ]
  },
  {
    num: "03",
    title: "Clean Architecture, DDD & Arquitetura Hexagonal",
    badge: "Essencial",
    lessons: [
      "Princípios SOLID aplicados em cenários reais corporativos",
      "Domain-Driven Design (DDD): Entidades, Value Objects e Bounded Contexts",
      "Desacoplamento de Casos de Uso e Adaptadores de Infraestrutura"
    ]
  },
  {
    num: "04",
    title: "Bancos de Dados Relacionais & Otimização de Performance",
    lessons: [
      "Modelagem Avançada com PostgreSQL em Escala",
      "Particionamento de Tabelas, Índices B-Tree, GIN e GiST",
      "Otimização de Queries com EXPLAIN ANALYZE e Connection Pooling (PgBouncer)"
    ]
  },
  {
    num: "05",
    title: "Mensageria e Event-Driven Architecture (Kafka & RabbitMQ)",
    badge: "Prático",
    lessons: [
      "Arquiteturas Orientadas a Eventos e CQRS",
      "Apache Kafka: Tópicos, Partições, Consumer Groups e Idempotência",
      "Padrão Outbox Transacional e Garantia de Entrega Exactly-Once"
    ]
  },
  {
    num: "06",
    title: "Comunicação de Alta Performance: gRPC, GraphQL & REST",
    lessons: [
      "APIs RESTful corporativas com OpenAPI e documentação viva",
      "gRPC e Protocol Buffers (Protobuf) para comunicação inter-serviços ultra-rápida",
      "GraphQL Federation para agregação de microsserviços"
    ]
  },
  {
    num: "07",
    title: "Inteligência Artificial Aplicada & Engenharia de Prompt",
    badge: "Inovação",
    lessons: [
      "Fundamentos de LLMs modernas (OpenAI, Claude, Llama 3 locais)",
      "Técnicas de Prompting Avançado (Chain of Thought, ReAct, Few-Shot)",
      "Validação e Sanitização de Saídas de IA com Zod e Pydantic"
    ]
  },
  {
    num: "08",
    title: "Criação de Agentes Autônomos de IA & RAG Corporativo",
    badge: "Avançado",
    lessons: [
      "Orquestração de Agentes com LangChain e LangGraph",
      "Bancos Vetoriais (Pgvector, Pinecone) e Embeddings Semânticos",
      "Implementação de Copiloto de Código e Assistente Técnico Privado"
    ]
  },
  {
    num: "09",
    title: "Padrões de Resiliência em Microsserviços",
    lessons: [
      "Circuit Breaker, Bulkhead, Retry com Backoff Exponencial",
      "Gerenciamento de Transações Distribuídas com o Padrão Saga",
      "Service Discovery e Roteamento Dinâmico"
    ]
  },
  {
    num: "10",
    title: "Docker e Conteinerização Profissional",
    badge: "Hands-on",
    lessons: [
      "Multi-stage Builds para Imagens Docker Leves e Seguras",
      "Docker Compose para Simulação Completa de Ambientes Corporativos",
      "Auditoria de Vulnerabilidades em Containers (Trivy)"
    ]
  },
  {
    num: "11",
    title: "Kubernetes (K8s) do Zero ao Cluster Corporativo",
    badge: "Avançado",
    lessons: [
      "Pods, Deployments, Services, ConfigMaps e Secrets",
      "Ingress Controllers, Cert-Manager e Gestão de Certificados SSL",
      "Horizontal Pod Autoscaler (HPA) baseado em CPU e métricas customizadas"
    ]
  },
  {
    num: "12",
    title: "Pipeline CI/CD Automatizado com GitHub Actions & ArgoCD",
    lessons: [
      "Pipelines de Validação Contínua (Linter, Testes, Build, Vulnerabilidades)",
      "GitOps em Produção: Deploy Declarativo no Kubernetes com ArgoCD",
      "Estratégias de Canary Release e Blue/Green Deployments"
    ]
  },
  {
    num: "13",
    title: "Cloud Computing (AWS/GCP) & Infraestrutura como Código",
    lessons: [
      "Provisionamento Automatizado com Terraform",
      "VPCs, Subnets, Security Groups e Arquitetura de Nuvem Segura",
      "Armazenamento de Objetos (S3) e Distribuição Global com CDN"
    ]
  },
  {
    num: "14",
    title: "Observabilidade Total: Datadog, Prometheus & Grafana",
    badge: "Essencial",
    lessons: [
      "Os 3 Pilares da Observabilidade: Logs, Métricas e Tracing Distribuído",
      "Instrumentação de Aplicações com OpenTelemetry",
      "Criação de Dashboards de Telemetria e Alertas Proativos"
    ]
  },
  {
    num: "15",
    title: "Segurança Ofensiva e Arquitetura Zero Trust",
    lessons: [
      "Autenticação e Autorização com OAuth 2.1 e Keycloak",
      "Mitigação prática do OWASP Top 10 (SQL Injection, XSS, CSRF)",
      "Gestão de Segredos com HashiCorp Vault e Rotação de Chaves"
    ]
  },
  {
    num: "16",
    title: "Engenharia de Testes, Qualidade & Testes de Carga com k6",
    badge: "Hands-on",
    lessons: [
      "Test-Driven Development (TDD) e Pirâmide de Testes",
      "Testes End-to-End resilientes com Playwright",
      "Simulação de Carga Extrema e Testes de Estresse com k6"
    ]
  },
  {
    num: "17",
    title: "Front-end de Alta Performance com Next.js 15 & React 19",
    lessons: [
      "Server Components (RSC), Suspense e Streaming SSR",
      "Turbopack e Otimizações de Build",
      "Acessibilidade (a11y), SEO Avançado e Core Web Vitals"
    ]
  },
  {
    num: "18",
    title: "Gerenciamento de Estado Distribuído & Cache no Client",
    lessons: [
      "TanStack Query (React Query) para Cache Server-State",
      "Zustand para Estado Global Leve",
      "Sincronização em Tempo Real via WebSockets e Server-Sent Events"
    ]
  },
  {
    num: "19",
    title: "Projetos Corporativos Reais (6 Squads Hands-On)",
    badge: "Projetos",
    badgeColor: "bg-[#38BDF8] text-[#071423]",
    lessons: [
      "Squad 01: Core Banking & Sistema de Liquidação PIX",
      "Squad 02: Plataforma de Agentes de IA com RAG Corporativo",
      "Squad 03: Motor de E-commerce com Alta Disponibilidade e Black Friday",
      "Squad 04: SaaS Multi-tenant B2B com Faturamento Recorrente",
      "Squad 05: Pipeline de Dados em Tempo Real com Kafka & ClickHouse",
      "Squad 06: App Mobile & Web com Offline-First e Sincronização"
    ]
  },
  {
    num: "20",
    title: "Liderança Técnica, Code Review & Gestão de Squads",
    lessons: [
      "Como conduzir Code Reviews formativos e elevação de padrão técnico",
      "RFCs (Request for Comments) e Tomada de Decisão Arquitetural",
      "Mentoria de Desenvolvedores Júnior e Pleno"
    ]
  },
  {
    num: "21",
    title: "Carreiras Globais & Negociação Executiva",
    badge: "Carreira",
    lessons: [
      "Portfólio Corporativo no GitHub que chama atenção de Tech Recruiters",
      "Simulação de Entrevistas de Arquitetura de Sistemas (System Design)",
      "Estratégia para Conquistar Vagas Remotas Internacionais em Dólar/Euro"
    ]
  }
];

export function MasterCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="grade" className="py-24 relative bg-[#0F1722] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2838] border border-[#38BDF8]/40 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
              MATRIZ CURRICULAR DE ELITE
            </span>
          </div>

          <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            A Grade Mais Completa do Mercado
          </h2>

          <p className="font-inter text-base text-[#94A3B8] max-w-2xl mx-auto">
            Do código limpo à arquitetura distribuída, telemetria em tempo real, inteligência artificial corporativa e liderança técnica.
          </p>

          {/* 4 Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-xl bg-[#142030] border border-[#33465C]">
              <span className="font-montserrat font-black text-4xl text-[#38BDF8] block">21</span>
              <span className="font-inter text-xs text-[#94A3B8] font-medium">Módulos Estruturados</span>
            </div>
            <div className="p-4 rounded-xl bg-[#142030] border border-[#33465C]">
              <span className="font-montserrat font-black text-4xl text-white block">+20</span>
              <span className="font-inter text-xs text-[#94A3B8] font-medium">Projetos Reais</span>
            </div>
            <div className="p-4 rounded-xl bg-[#142030] border border-[#33465C]">
              <span className="font-montserrat font-black text-4xl text-[#38BDF8] block">+300h</span>
              <span className="font-inter text-xs text-[#94A3B8] font-medium">Prática Imersiva</span>
            </div>
            <div className="p-4 rounded-xl bg-[#142030] border border-[#33465C]">
              <span className="font-montserrat font-black text-4xl text-white block">100%</span>
              <span className="font-inter text-xs text-[#94A3B8] font-medium">Código de Produção</span>
            </div>
          </div>
        </div>

        {/* 21 Modules Accordion List */}
        <div className="space-y-2.5">
          {MODULES_DATA.map((mod, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#182332] border border-[#33465C]/80 overflow-hidden transition-all hover:border-[#38BDF8]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] shrink-0">
                      Módulo {mod.num}
                    </span>
                    <span className="font-montserrat font-bold text-sm sm:text-base text-white truncate">
                      {mod.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {mod.badge && (
                      <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        mod.badgeColor || "bg-[#243447] text-[#38BDF8] border border-[#33465C]"
                      }`}>
                        {mod.badge}
                      </span>
                    )}
                    <span className={`text-[#38BDF8] text-lg font-bold transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}>
                      +
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#33465C]/40 bg-[#121B28]/60">
                    <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] font-inter pt-3">
                      {mod.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
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
