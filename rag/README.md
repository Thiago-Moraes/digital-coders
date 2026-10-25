# Digital Coders - RAG + LLM Chat Environment

Ambiente completo em Docker contendo **Python (FastAPI)**, **PostgreSQL 16** e **pgvector** para criação de aplicações de Chat com RAG (Retrieval-Augmented Generation) e LLMs.

---

## 🚀 Arquitetura

- **Python (FastAPI + Uvicorn)**: API assíncrona de alta performance com hot-reload ativo para desenvolvimento rápido.
- **PostgreSQL 16 + pgvector**: Banco vetorial com extensão oficial `vector` habilitada para indexação e busca por similaridade de cosseno (`<=>`).
- **OpenAI / Ollama / Groq / VLLM**: Suporte a embeddings (`text-embedding-3-small`) e LLMs (`gpt-4o-mini`) com fallback automático para testes locais sem chave.
- **Interface Web Integrada**: Interface gráfica moderna para teste imediato de indexação de documentos e chat interativo.

---

## 📁 Estrutura de Pastas

```text
rag/
├── app/
│   ├── main.py              # Aplicação FastAPI, CORS, rotas e inicialização
│   ├── config.py            # Configurações com Pydantic Settings
│   ├── database.py          # Conexão SQLAlchemy e inicialização do pgvector
│   ├── models.py            # Modelos de banco de dados (Vector column)
│   ├── schemas.py           # Schemas Pydantic de entrada/saída
│   ├── services/
│   │   ├── embedding_service.py # Serviço de embeddings (OpenAI / Mock fallback)
│   │   ├── llm_service.py       # Serviço de chat e prompt contextual
│   │   └── rag_service.py       # Chunking, ingestão e busca vetorial
│   ├── routers/
│   │   ├── documents.py     # Endpoints de upload e listagem de documentos
│   │   └── chat.py          # Endpoints do chat RAG e histórico
│   └── static/
│       └── index.html       # Interface web para testar no navegador
├── docker-compose.yml       # Orquestração do PostgreSQL (pgvector) e FastAPI
├── Dockerfile               # Container da aplicação Python
├── init.sql                 # Script SQL para habilitar extensões
├── requirements.txt         # Dependências Python
├── .env.example             # Modelo de variáveis de ambiente
└── .env                     # Variáveis de ambiente ativas
```

---

## 🛠️ Como Iniciar

### 1. Iniciar os Containers Docker

Execute na pasta `rag`:

```bash
docker compose up -d --build
```

### 2. Acessar os Serviços

- **Interface de Chat**: [http://localhost:8000](http://localhost:8000)
- **Documentação Interativa (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Documentação ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
- **Health Check da API & pgvector**: [http://localhost:8000/health](http://localhost:8000/health)
- **PostgreSQL com pgvector**: `localhost:5432` (Usuário: `postgres`, Senha: `postgres`, DB: `rag_db`)

---

## ⚙️ Configuração do `.env`

O arquivo `.env` já vem pré-configurado com valores padrão para rodar localmente.

Para habilitar respostas reais de IA com OpenAI:

```env
OPENAI_API_KEY=sk-...
EMBEDDING_MODEL=text-embedding-3-small
LLM_MODEL=gpt-4o-mini
```

> **Dica**: Caso não forneça `OPENAI_API_KEY`, o ambiente funcionará no modo de demonstração/fallback local, gerando pseudo-vetores determinísticos e respostas mock com o contexto recuperado do PostgreSQL.

### Usando com Ollama ou Provedores Locais
Se você usa Ollama ou APIs compatíveis com OpenAI:
```env
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://host.docker.internal:11434/v1
EMBEDDING_MODEL=nomic-embed-text
LLM_MODEL=llama3
```

---

## 📡 Exemplos de Uso via API

### 1. Ingerir um Documento (Chunking + Embeddings no pgvector)

```bash
curl -X POST "http://localhost:8000/api/documents" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Manual Digital Coders",
    "source": "manual.pdf",
    "content": "A Digital Coders é um ecossistema focado na formação de desenvolvedores de elite, conectando teoria avançada e prática em projetos reais com inteligência artificial."
  }'
```

### 2. Conversar com o Chat RAG

```bash
curl -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Qual é o foco da Digital Coders?"
  }'
```

### 3. Verificar Status do pgvector

```bash
curl "http://localhost:8000/health"
```

---

## 🛑 Parar o Ambiente

```bash
docker compose down
```

Para remover também os dados persistidos do PostgreSQL:
```bash
docker compose down -v
```
