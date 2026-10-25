import uuid
from datetime import datetime
from typing import List, Optional, Any
from pydantic import BaseModel, Field


# Document Schemas
class DocumentCreate(BaseModel):
    title: str = Field(..., description="Document title or identifier")
    content: str = Field(..., description="Raw text content to ingest and embed")
    source: Optional[str] = Field(default=None, description="Optional source URL or filename")


class ChunkResponse(BaseModel):
    id: uuid.UUID
    content: str
    chunk_index: int
    similarity: Optional[float] = None
    metadata_json: Optional[Any] = None

    class Config:
        from_attributes = True


class DocumentResponse(BaseModel):
    id: uuid.UUID
    title: str
    source: Optional[str]
    created_at: datetime
    total_chunks: int

    class Config:
        from_attributes = True


# Chat Schemas
class ChatRequest(BaseModel):
    message: str = Field(..., description="User message or question")
    session_id: Optional[uuid.UUID] = Field(default=None, description="Optional session ID to continue conversation")
    top_k: Optional[int] = Field(default=None, description="Number of context chunks to retrieve (defaults to settings.TOP_K_RESULTS)")


class ChatResponse(BaseModel):
    session_id: uuid.UUID
    response: str
    sources: List[ChunkResponse] = []


class ChatMessageResponse(BaseModel):
    id: uuid.UUID
    role: str
    content: str
    sources: Optional[List[Any]] = None
    created_at: datetime

    class Config:
        from_attributes = True


class ChatSessionResponse(BaseModel):
    id: uuid.UUID
    title: str
    created_at: datetime
    messages: List[ChatMessageResponse] = []

    class Config:
        from_attributes = True


# Health Check Schema
class HealthResponse(BaseModel):
    status: str
    database: str
    pgvector_extension: bool
    embedding_model: str
    llm_model: str
