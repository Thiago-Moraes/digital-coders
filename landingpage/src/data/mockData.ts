export interface CourseTrack {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  slug: string;
  highlight?: boolean;
  duration: string;
  format: string;
  workload: string;
  description: string;
  technologies: string[];
  skills: string[];
  targetAudience: string;
  nextCohort: string;
  modules: {
    number: string;
    title: string;
    description: string;
    deliverable: string;
  }[];
}

export interface Differential {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  highlightMetric: string;
  tags: string[];
}

export interface MetricStat {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export const METRIC_STATS: MetricStat[] = [
  {
    value: "89%+",
    label: "Taxa de Contratação",
    subtext: "em até 6 meses após a formação",
    icon: "TrendingUp"
  },
  {
    value: "100%",
    label: "Projetos em Produção",
    subtext: "nada de clone básico de tutorial",
    icon: "Code2"
  },
  {
    value: "24 vagas",
    label: "Por Ciclo Presencial",
    subtext: "turmas densas com acompanhamento 1:1",
    icon: "Users2"
  },
  {
    value: "24/7",
    label: "Tutor IA & Suporte",
    subtext: "feedback contínuo e code reviews",
    icon: "Bot"
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: "sala-invertida",
    iconName: "BookOpenCheck",
    title: "Sala de Aula Invertida",
    subtitle: "Teoria em casa, código vivo no campus",
    badge: "90% Prática Real",
    description: "Você assimila os conceitos teóricos no seu próprio ritmo antes de chegar à sala. No campus presencial, o tempo é 100% focado em codificar, resolver bugs complexos e desenhar arquiteturas com mentores seniores ao seu lado.",
    benefits: [
      "Zero aulas passivas com slides intermináveis",
      "Mentoria individualizada para destravar seu raciocínio",
      "Laboratório com máquinas de alta performance e monitores duplos"
    ]
  },
  {
    id: "squads-ageis",
    iconName: "GitPullRequestDraft",
    title: "Squads Ágeis & PBL",
    subtitle: "Simulação exata do ecossistema de Software House",
    badge: "Sprints & PRs",
    description: "Trabalhe em times multidisciplinares operando com metodologias ágeis (Scrum/Kanban). Você fará daily standups, refinamento técnico, branching strategies (GitFlow) e revisará Pull Requests linha a linha.",
    benefits: [
      "Desenvolvimento de soft skills de liderança e comunicação técnica",
      "Resolução de conflitos de merge e code reviews criteriosos",
      "Portfólio verificado com histórico de commits reais no GitHub"
    ]
  },
  {
    id: "tutor-ia",
    iconName: "Sparkles",
    title: "Tutor IA 24/7 & Copilot",
    subtitle: "Aceleração cognitiva com inteligência artificial",
    badge: "LLM Integrado",
    description: "Aprenda a utilizar IA não como muleta, mas como um copiloto de alto impacto. Nosso agente inteligente personalizado analisa seus erros de compilação, sugere refatorações e orienta seu raciocínio algorítmico 24 horas por dia.",
    benefits: [
      "Orientação instantânea mesmo nas madrugadas de estudos",
      "Treinamento prático em Engenharia de Prompt e LLMOps",
      "Revisões automatizadas de linting, segurança e performance"
    ]
  },
  {
    id: "gamificacao",
    iconName: "Trophy",
    title: "Gamificação & Coding Dojos",
    subtitle: "Evolua suas skills através de desafios competitivos",
    badge: "Leaderboard Tech",
    description: "Suba de nível com desafios de lógica, hackathons internos e coding dojos semanais. Ganhe badges por resolução de algoritmos, otimização de banco de dados e testes unitários com cobertura máxima.",
    benefits: [
      "Ranking semanal de qualidade e velocidade de entrega",
      "Terminal Wars e desafios de refatoração sob pressão",
      "Visibilidade direta para recrutadores de empresas parceiras"
    ]
  }
];

export const COURSE_TRACKS: CourseTrack[] = [
  {
    id: "bootcamp-fullstack",
    slug: "bootcamp-fullstack-web",
    badge: "Mais Procurado",
    badgeColor: "cyan",
    highlight: true,
    title: "Bootcamp Fullstack Web",
    duration: "6 Meses (480 horas)",
    format: "Presencial no Hub JF ou Híbrido",
    workload: "20h semanais com prática diária",
    description: "Formação completa do zero à alta escala. Domine TypeScript, Node.js, React, Next.js, ecossistema PHP moderno com Laravel, bancos de dados relacionais e deploy automatizado em nuvem.",
    targetAudience: "Iniciantes comprometidos e desenvolvedores júnior em busca de rápida ascensão para o nível pleno.",
    nextCohort: "10 de Novembro de 2026",
    technologies: [
      "TypeScript",
      "React 19",
      "Next.js 16",
      "Node.js",
      "PHP 8.3 / Laravel",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "OpenAI API",
      "Git & GitHub Actions"
    ],
    skills: [
      "Desenvolvimento Frontend moderno com SSR e Server Components",
      "Criação de APIs RESTful e GraphQL escaláveis e seguras",
      "Arquitetura MVC no Laravel e microsserviços Node.js",
      "Modelagem e otimização de consultas SQL complexas",
      "Deploy contínuo (CI/CD) com Docker e infraestrutura em nuvem"
    ],
    modules: [
      {
        number: "Módulo 01",
        title: "Fundamentos de Engenharia & Algoritmos Modernos",
        description: "Lógica avançada de programação, estruturas de dados, Git avançado e TypeScript estrito.",
        deliverable: "CLI interativo e motor de regras de negócio em TypeScript."
      },
      {
        number: "Módulo 02",
        title: "Backend Robusto com Node.js & TypeScript",
        description: "Arquitetura limpa, Express/Fastify, autenticação JWT, Prisma ORM e PostgreSQL.",
        deliverable: "API bancária com transações ACID e testes automatizados com Vitest."
      },
      {
        number: "Módulo 03",
        title: "Frontend de Alta Densidade: React 19 & Next.js",
        description: "Server Actions, gerenciamento de estado moderno, Tailwind CSS e acessibilidade avançada.",
        deliverable: "Dashboard corporativo SaaS com gráficos dinâmicos e modo escuro nativo."
      },
      {
        number: "Módulo 04",
        title: "Ecossistema Enterprise: PHP 8 Moderno & Laravel",
        description: "MVC enterprise, filas assíncronas, Eloquent ORM avançado e APIs REST corporativas.",
        deliverable: "Plataforma de e-commerce escalável com gateways de pagamento."
      },
      {
        number: "Módulo 05",
        title: "Containers, CI/CD & Automação com Inteligência Artificial",
        description: "Dockerização multi-stage, pipelines no GitHub Actions e agentes de IA para code review.",
        deliverable: "Infraestrutura resiliente configurada e publicada em nuvem."
      },
      {
        number: "Módulo 06",
        title: "Capston Project em Squad: Produto Real para Empresa Parceira",
        description: "Desenvolvimento de software encomendado por uma empresa parceira com pitch para tech leads.",
        deliverable: "Software completo entregue em produção para cliente real."
      }
    ]
  },
  {
    id: "especializacao-mobile",
    slug: "especializacao-mobile",
    badge: "Foco em Performance",
    badgeColor: "purple",
    highlight: false,
    title: "Especialização Mobile",
    duration: "4 Meses (320 horas)",
    format: "Presencial ou Híbrido",
    workload: "16h semanais",
    description: "Construção de aplicações móveis fluidas para iOS e Android com React Native e Expo. Arquitetura offline-first, integração com recursos de hardware, modelos locais de IA e esteiras de publicação.",
    targetAudience: "Desenvolvedores frontend ou web que desejam dominar o ecossistema móvel com padrões de grandes produtos.",
    nextCohort: "18 de Novembro de 2026",
    technologies: [
      "React Native",
      "Expo SDK",
      "TypeScript",
      "Zustand / TanStack Query",
      "WatermelonDB / SQLite",
      "React Native Reanimated",
      "Expo EAS Build",
      "Apple Store & Play Store Connect"
    ],
    skills: [
      "Desenvolvimento multiplataforma nativo de 60fps",
      "Arquitetura Offline-First com sincronização background resiliente",
      "Animações complexas e gestos naturais com Reanimated",
      "Integração com sensores, biometria facial, câmera e Bluetooth",
      "Publicação automatizada nas lojas com Expo EAS"
    ],
    modules: [
      {
        number: "Módulo 01",
        title: "Arquitetura Mobile & Componentização com React Native",
        description: "Fundamentos de UI nativa, ciclo de vida mobile, navegação tipada com Expo Router.",
        deliverable: "Aplicativo de streaming com navegação dinâmica e animações fluidas."
      },
      {
        number: "Módulo 02",
        title: "Offline-First, Persistência Local & Sincronização",
        description: "SQLite local, WatermelonDB para alto volume de dados e fila de sincronização.",
        deliverable: "App de gestão de ordens de serviço 100% funcional sem conexão com a internet."
      },
      {
        number: "Módulo 03",
        title: "Hardware, Sensores & IA no Dispositivo",
        description: "Acesso a câmera, GPS de alta precisão, biometria e modelos On-Device com TensorFlow Lite.",
        deliverable: "App inteligente de scanner de documentos com OCR e classificação por IA."
      },
      {
        number: "Módulo 04",
        title: "Testes E2E, EAS Build & Publicação Comercial",
        description: "Testes automatizados com Maestro, assinatura de certificados iOS/Android e publicação.",
        deliverable: "App publicado e homologado na Google Play Store e Apple TestFlight."
      }
    ]
  },
  {
    id: "imersoes-b2b",
    slug: "imersoes-b2b",
    badge: "Solução Corporativa",
    badgeColor: "electric",
    highlight: false,
    title: "Imersões Avançadas B2B",
    duration: "Carga Flexível (40h a 160h)",
    format: "In-Company • Presencial no Hub ou Síncrono",
    workload: "Sob demanda corporativa",
    description: "Up-skilling de times de engenharia focado em excelência arquitetural: Clean Architecture, Domain-Driven Design (DDD), microsserviços orientados a eventos com RabbitMQ, observabilidade e fluxos assistidos por IA.",
    targetAudience: "Squads de engenharia, Tech Leads, CTOs e empresas com necessidade de modernização tecnológica e padronização técnica.",
    nextCohort: "Início Imediato sob Demanda",
    technologies: [
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "RabbitMQ / Apache Kafka",
      "Microsserviços Resilientes",
      "Docker / Kubernetes",
      "Redis Caching Avançado",
      "OpenTelemetry & Grafana",
      "AI Workflows & LLMOps"
    ],
    skills: [
      "Decomposição de monólitos em microsserviços desacoplados",
      "Desenho de arquiteturas orientadas a eventos e mensageria assíncrona",
      "Implementação de testes de carga, resiliência e circuit breakers",
      "Implementação de copilotos de IA seguros para repositórios internos",
      "Aumento da velocidade de entrega com padrões corporativos unificados"
    ],
    modules: [
      {
        number: "Módulo 01",
        title: "DDD Prático & Modelagem Estratégica de Domínio",
        description: "Bounded contexts, agregados, entidades ricas e desacoplamento do núcleo de negócio.",
        deliverable: "Refatoração de módulo crítico legado para arquitetura limpa."
      },
      {
        number: "Módulo 02",
        title: "Comunicação Assíncrona & Mensageria com RabbitMQ",
        description: "Filas, exchanges, patterns de retry, dead-letter exchanges e consistência eventual.",
        deliverable: "Pipeline de processamento distribuído capaz de suportar 10k eventos/segundo."
      },
      {
        number: "Módulo 03",
        title: "Resiliência, Cache Distribuído & Observabilidade",
        description: "Patterns de fallback, rate limiting com Redis, tracing distribuído com OpenTelemetry.",
        deliverable: "Painel de telemetria completa com métricas de saturação e latência de serviços."
      },
      {
        number: "Módulo 04",
        title: "IA Aplicada à Engenharia & Automação de Squads",
        description: "Adoção de LLMs para automação de testes, documentação viva e revisão de código proprietário.",
        deliverable: "Agente interno customizado para suporte à arquitetura corporativa da empresa."
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Lucas Mendonça",
    role: "Engenheiro Fullstack",
    company: "Fintech ScaleUp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    content: "O formato de software house muda tudo. Na minha primeira semana de trabalho contratado, parecia que eu já estava na empresa há meses: o ritmo de PRs, daily meetings e deploy automatizado era idêntico ao que vivenciei diariamente no campus da Digital Coders.",
    highlightMetric: "Transição em 5 meses",
    tags: ["Bootcamp Fullstack", "TypeScript", "Next.js"]
  },
  {
    id: "2",
    name: "Beatriz Nogueira",
    role: "Mobile Software Engineer",
    company: "LogTech Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    content: "Eu já sabia um pouco de JavaScript, mas não tinha segurança para concorrer a vagas sérias. Na Digital Coders aprendi arquitetura offline-first com React Native de um jeito que nunca vi em cursos online. O suporte com o tutor IA e os mentores em Juiz de Fora foi o divisor de águas.",
    highlightMetric: "Salário triplicado",
    tags: ["Especialização Mobile", "React Native", "Expo"]
  },
  {
    id: "3",
    name: "Rodrigo Alencar",
    role: "CTO & Co-founder",
    company: "Nexum Soluções Corporativas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    content: "Contratamos a imersão B2B para capacitar nossa squad na transição para microsserviços com RabbitMQ e Clean Architecture. O nível técnico dos instrutores é impressionante, trazendo cenários de falha reais e não apenas teoria de livro.",
    highlightMetric: "+65% produtividade da squad",
    tags: ["Imersão B2B", "DDD", "RabbitMQ"]
  },
  {
    id: "4",
    name: "Camila Guimarães",
    role: "Frontend Developer",
    company: "HealthTech Brasil",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    content: "A sala de aula invertida faz você chegar com a mente afiada para codar. O campus físico em Juiz de Fora tem uma energia inacreditável. Você senta do lado de pessoas que querem construir o futuro e os mentores não te dão a resposta pronta: eles te ensinam a pensar como engenheiro.",
    highlightMetric: "Contratada antes do final do curso",
    tags: ["Bootcamp Fullstack", "React 19", "Node.js"]
  }
];

export const HIRING_PARTNERS = [
  "Fintech ScaleUp",
  "Nexum Tech",
  "LogFlow Global",
  "HealthCore",
  "OmniCloud",
  "ByteData Labs"
];

export const FAQS = [
  {
    question: "Preciso ter conhecimento prévio em programação para o Bootcamp Fullstack?",
    answer: "Não é obrigatório conhecimento avançado, mas avaliamos perfil lógico, curiosidade intelectual e muita dedicação. Nosso processo seletivo inclui um desafio de raciocínio lógico introdutório com material preparatório disponibilizado gratuitamente."
  },
  {
    question: "Como funciona a dinâmica da Sala de Aula Invertida na prática?",
    answer: "Você recebe módulos preparatórios objetivos (vídeos curtos, desafios de leitura e snippets) para consumir antes da aula. No campus, você não assiste palestras monótonas: você senta na sua máquina para resolver problemas reais, fazer pair programming e discutir arquitetura com mentores."
  },
  {
    question: "Moro fora de Juiz de Fora. Posso participar das formações?",
    answer: "Sim! Embora nosso campus principal fique estrategicamente localizado no centro de Juiz de Fora (MG), disponibilizamos vagas para o formato Híbrido com transmissão ao vivo interativa e participação integral nos squads remotos."
  },
  {
    question: "Como funcionam os treinamentos B2B para empresas?",
    answer: "Formatamos o treinamento de acordo com o stack e os desafios imediatos da sua empresa. Pode ser realizado no nosso campus físico, in-company ou em ambiente virtual imersivo com acompanhamento direto de relatórios de evolução de skills dos colaboradores."
  },
  {
    question: "Existe suporte para colocação no mercado de trabalho?",
    answer: "Sim! Mantemos conexões ativas com dezenas de empresas de tecnologia parceiras. Ao longo do curso, realizamos simulações de entrevistas técnicas (mock interviews), revisão de perfis de GitHub/LinkedIn e realizamos Demo Days abertos para recrutadores."
  }
];
