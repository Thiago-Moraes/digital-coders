import uuid
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Document, DocumentChunk
from app.schemas import DocumentCreate, DocumentResponse, ChunkResponse
from app.services.rag_service import rag_service

router = APIRouter(prefix="/api/documents", tags=["Documents & Ingestion"])


@router.post("", response_model=DocumentResponse, status_code=status.HTTP_201_CREATED)
def create_document(doc_in: DocumentCreate, db: Session = Depends(get_db)):
    """
    Ingest a new document, split it into chunks, calculate pgvector embeddings, and save to DB.
    """
    if not doc_in.content.strip():
        raise HTTPException(status_code=400, detail="Document content cannot be empty.")

    doc = rag_service.ingest_document(
        db=db,
        title=doc_in.title,
        content=doc_in.content,
        source=doc_in.source
    )

    total_chunks = db.query(DocumentChunk).filter(DocumentChunk.document_id == doc.id).count()

    return DocumentResponse(
        id=doc.id,
        title=doc.title,
        source=doc.source,
        created_at=doc.created_at,
        total_chunks=total_chunks
    )


@router.get("", response_model=List[DocumentResponse])
def list_documents(db: Session = Depends(get_db)):
    """
    List all ingested documents with total chunk count.
    """
    stmt = (
        select(Document, func.count(DocumentChunk.id).label("total_chunks"))
        .outerjoin(DocumentChunk, Document.id == DocumentChunk.document_id)
        .group_by(Document.id)
        .order_by(Document.created_at.desc())
    )

    results = db.execute(stmt).all()

    response = []
    for doc, total_chunks in results:
        response.append(
            DocumentResponse(
                id=doc.id,
                title=doc.title,
                source=doc.source,
                created_at=doc.created_at,
                total_chunks=total_chunks or 0
            )
        )
    return response


@router.get("/{document_id}/chunks", response_model=List[ChunkResponse])
def get_document_chunks(document_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Get all chunks belonging to a document.
    """
    doc = db.query(Document).filter(Document.id == document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found.")

    chunks = (
        db.query(DocumentChunk)
        .filter(DocumentChunk.document_id == document_id)
        .order_by(DocumentChunk.chunk_index)
        .all()
    )

    return [
        ChunkResponse(
            id=c.id,
            content=c.content,
            chunk_index=c.chunk_index,
            metadata_json=c.metadata_json
        )
        for c in chunks
    ]


@router.delete("/{document_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_document(document_id: uuid.UUID, db: Session = Depends(get_db)):
    """
    Delete a document and all associated embeddings and chunks.
    """
    doc = db.query(Document).filter(Document.id == document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found.")

    db.delete(doc)
    db.commit()
    return None
