import hashlib
import logging
from typing import List
import numpy as np
from openai import OpenAI
from app.config import settings

logger = logging.getLogger(__name__)


class EmbeddingService:
    def __init__(self):
        self.api_key = settings.OPENAI_API_KEY
        self.base_url = settings.OPENAI_BASE_URL
        self.dimensions = settings.EMBEDDING_DIMENSIONS
        self.model = settings.EMBEDDING_MODEL

        if self.api_key:
            self.client = OpenAI(
                api_key=self.api_key,
                base_url=self.base_url if self.base_url else None
            )
        else:
            self.client = None
            logger.warning(
                "OPENAI_API_KEY not configured. EmbeddingService running in mock/fallback mode for development testing."
            )

    def get_embedding(self, text: str) -> List[float]:
        """Generate embedding vector for a single string."""
        embeddings = self.get_embeddings([text])
        return embeddings[0]

    def get_embeddings(self, texts: List[str]) -> List[List[float]]:
        """Generate embedding vectors for a batch of strings."""
        if not texts:
            return []

        # Sanitize texts (replace newlines as recommended by OpenAI)
        clean_texts = [t.replace("\n", " ") for t in texts]

        if self.client:
            try:
                response = self.client.embeddings.create(
                    input=clean_texts,
                    model=self.model
                )
                return [data.embedding for data in response.data]
            except Exception as e:
                logger.error(f"Error calling OpenAI embeddings API: {e}. Falling back to mock embeddings.")

        # Fallback / Development mode: Deterministic normalized pseudo-vector
        return [self._generate_mock_embedding(t) for t in clean_texts]

    def _generate_mock_embedding(self, text: str) -> List[float]:
        """Generates a reproducible, unit-normalized vector based on sha256 of text."""
        seed = int(hashlib.sha256(text.encode("utf-8")).hexdigest(), 16) % (2**32)
        rng = np.random.RandomState(seed)
        vec = rng.randn(self.dimensions)
        norm = np.linalg.norm(vec)
        if norm > 0:
            vec = vec / norm
        return vec.tolist()


embedding_service = EmbeddingService()
