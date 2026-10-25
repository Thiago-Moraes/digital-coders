import logging
from typing import List, Dict, Any
from openai import OpenAI
from app.config import settings

logger = logging.getLogger(__name__)


class LLMService:
    def __init__(self):
        self.api_key = settings.OPENAI_API_KEY
        self.base_url = settings.OPENAI_BASE_URL
        self.model = settings.LLM_MODEL

        if self.api_key:
            self.client = OpenAI(
                api_key=self.api_key,
                base_url=self.base_url if self.base_url else None
            )
        else:
            self.client = None
            logger.warning(
                "OPENAI_API_KEY not configured. LLMService running in mock/fallback mode for development testing."
            )

    def generate_rag_response(
        self,
        query: str,
        context_chunks: List[str],
        chat_history: List[Dict[str, str]] = None
    ) -> str:
        """
        Generate answer based on retrieved context chunks and chat history.
        """
        context_text = "\n\n---\n\n".join(context_chunks) if context_chunks else "Nenhum contexto encontrado."

        system_prompt = (
            "Você é um assistente inteligente e prestativo especializado em responder perguntas "
            "com base no contexto fornecido.\n\n"
            "Diretrizes:\n"
            "1. Responda em português de forma clara, objetiva e profissional.\n"
            "2. Utilize primariamente as informações do Contexto abaixo.\n"
            "3. Se o contexto não contiver a resposta, indique educadamente o que sabe ou que a informação não foi encontrada no contexto.\n\n"
            f"=== CONTEXTO DISPONÍVEL ===\n{context_text}\n==========================="
        )

        messages = [{"role": "system", "content": system_prompt}]

        if chat_history:
            for msg in chat_history:
                messages.append({"role": msg["role"], "content": msg["content"]})

        messages.append({"role": "user", "content": query})

        if self.client:
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=messages,
                    temperature=0.3
                )
                return response.choices[0].message.content
            except Exception as e:
                logger.error(f"Error calling OpenAI Chat Completions API: {e}. Falling back to mock answer.")

        # Fallback / Development mode response
        return (
            f"[MODO DE DESENVOLVIMENTO - OPENAI_API_KEY não configurada]\n\n"
            f"Sua pergunta foi: '{query}'\n\n"
            f"Foram recuperados {len(context_chunks)} trechos de contexto via pgvector:\n\n"
            f"{context_text[:400]}...\n\n"
            f"💡 Para habilitar respostas reais de IA com GPT/LLM, configure a variável OPENAI_API_KEY no arquivo .env."
        )


llm_service = LLMService()
