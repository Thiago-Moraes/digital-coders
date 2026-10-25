import uuid
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import ChatSession, ChatMessage
from app.schemas import (
    ChatRequest,
    ChatResponse,
    ChunkResponse,
    ChatSessionResponse,
    ChatMessageResponse
)
from app.services.rag_service import rag_service
from app.services.llm_service import llm_service

router = APIRouter(prefix="/api/chat", tags=["Chat & RAG"])


@router.post("", response_model=ChatResponse)
def chat_with_rag(req: ChatRequest, db: Session = Depends(get_db)):
    """
    RAG pipeline:
    1. Retrieve relevant context chunks using pgvector similarity search.
    2. Retrieve recent conversation history.
    3. Generate LLM answer with context injection.
    4. Save messages to session and return answer + sources.
    """
    user_query = req.message.strip()
    if not user_query:
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    # 1. Manage Chat Session
    if req.session_id:
        session = db.query(ChatSession).filter(ChatSession.id == req.session_id).first()
        if not session:
            session = ChatSession(id=req.session_id, title=user_query[:50])
            db.add(session)
    else:
        session = ChatSession(id=uuid.uuid4(), title=user_query[:50])
        db.add(session)

    db.flush()

    # 2. Vector search in pgvector
    scored_chunks = rag_service.search_similar_chunks(db=db, query=user_query, top_k=req.top_k)

    sources_response = []
    context_chunks = []

    for chunk, similarity in scored_chunks:
        context_chunks.append(chunk.content)
        sources_response.append(
            ChunkResponse(
                id=chunk.id,
                content=chunk.content,
                chunk_index=chunk.chunk_index,
                similarity=round(similarity, 4),
                metadata_json=chunk.metadata_json
            )
        )

    # 3. Retrieve past history for context (last 6 messages)
    past_messages = (
        db.query(ChatMessage)
        .filter(ChatMessage.session_id == session.id)
        .order_by(ChatMessage.created_at.asc())
        .limit(6)
        .all()
    )
    chat_history = [{"role": m.role, "content": m.content} for m in past_messages]

    # 4. Generate answer via LLM
    answer = llm_service.generate_rag_response(
        query=user_query,
        context_chunks=context_chunks,
        chat_history=chat_history
    )

    # 5. Save user message and assistant message
    user_msg = ChatMessage(
        id=uuid.uuid4(),
        session_id=session.id,
        role="user",
        content=user_query
    )
    db.add(user_msg)

    sources_data = [
        {"id": str(s.id), "content": s.content, "similarity": s.similarity, "metadata": s.metadata_json}
        for s in sources_response
    ]
    assistant_msg = ChatMessage(
        id=uuid.uuid4(),
        session_id=session.id,
        role="assistant",
        content=answer,
        sources=sources_data
    )
    db.add(assistant_msg)

    db.commit()

    return ChatResponse(
        session_id=session.id,
        response=answer,
        sources=sources_response
    )


@router.get("/sessions", response_model=List[ChatSessionResponse])
def list_sessions(db: Session = Depends(get_db)):
    """List all chat sessions."""
    sessions = db.query(ChatSession).order_by(ChatSession.created_at.desc()).all()
    return sessions


@router.get("/sessions/{session_id}", response_model=ChatSessionResponse)
def get_session(session_id: uuid.UUID, db: Session = Depends(get_db)):
    """Get a chat session and its full message history."""
    session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")
    return session


@router.delete("/sessions/{session_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_session(session_id: uuid.UUID, db: Session = Depends(get_db)):
    """Delete a chat session."""
    session = db.query(ChatSession).filter(ChatSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found.")
    db.delete(session)
    db.commit()
    return None
