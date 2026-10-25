import logging
import uuid
from typing import List, Tuple, Optional
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.config import settings
from app.models import Document, DocumentChunk
from app.services.embedding_service import embedding_service
from app.schemas import ChunkResponse

logger = logging.getLogger(__name__)


class RAGService:
    def chunk_text(self, text: str, chunk_size: int = None, chunk_overlap: int = None) -> List[str]:
        """Split text into overlapping chunks."""
        size = chunk_size or settings.CHUNK_SIZE
        overlap = chunk_overlap or settings.CHUNK_OVERLAP

        if not text or not text.strip():
            return []

        words = text.split()
        if len(words) <= size:
            return [text.strip()]

        chunks = []
        start = 0
        while start < len(words):
            end = start + size
            chunk = " ".join(words[start:end])
            chunks.append(chunk.strip())
            start += size - overlap

        return chunks

    def ingest_document(
        self,
        db: Session,
        title: str,
        content: str,
        source: Optional[str] = None
    ) -> Document:
        """Process, chunk, embed, and store a document in Postgres + pgvector."""
        doc = Document(
            id=uuid.uuid4(),
            title=title,
            source=source
        )
        db.add(doc)
        db.flush()  # Get document ID

        chunks_text = self.chunk_text(content)
        if not chunks_text:
            chunks_text = [content.strip()]

        # Generate embeddings in batch
        embeddings = embedding_service.get_embeddings(chunks_text)

        for idx, (chunk_text, emb) in enumerate(zip(chunks_text, embeddings)):
            chunk = DocumentChunk(
                id=uuid.uuid4(),
                document_id=doc.id,
                content=chunk_text,
                chunk_index=idx,
                embedding=emb,
                metadata_json={"title": title, "source": source}
            )
            db.add(chunk)

        db.commit()
        db.refresh(doc)
        logger.info(f"Ingested document '{title}' ({doc.id}) with {len(chunks_text)} chunks.")
        return doc

    def search_similar_chunks(
        self,
        db: Session,
        query: str,
        top_k: int = None
    ) -> List[Tuple[DocumentChunk, float]]:
        """Retrieve most similar chunks to the query using pgvector cosine distance."""
        k = top_k or settings.TOP_K_RESULTS
        query_vector = embedding_service.get_embedding(query)

        # Use cosine distance operator (<=>) via pgvector-python
        distance_col = DocumentChunk.embedding.cosine_distance(query_vector).label("distance")

        stmt = (
            select(DocumentChunk, distance_col)
            .order_by(distance_col)
            .limit(k)
        )

        results = db.execute(stmt).all()

        scored_chunks = []
        for chunk, distance in results:
            # Cosine distance ranges [0, 2]; similarity = 1 - distance
            similarity = max(0.0, 1.0 - float(distance))
            scored_chunks.append((chunk, similarity))

        return scored_chunks


rag_service = RAGService()
