import logging
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.config import settings
from app.database import get_db, init_db
from app.schemas import HealthResponse
from app.routers import documents, chat

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("rag_app")


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Initializing database and verifying pgvector extension...")
    try:
        init_db()
        logger.info("Application startup completed successfully.")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
    yield
    logger.info("Application shutdown.")


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    description="Ambiente RAG + LLM Chat utilizando FastAPI, PostgreSQL e pgvector.",
    lifespan=lifespan
)

# Enable CORS for local frontends or web development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static folder
static_dir = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_dir):
    app.mount("/static", StaticFiles(directory=static_dir), name="static")


@app.get("/", include_in_schema=False)
def serve_index():
    index_file = os.path.join(static_dir, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"message": f"Bem-vindo ao {settings.APP_NAME}! Acesse /docs para documentação interativa."}


@app.get("/health", response_model=HealthResponse, tags=["Health"])
def health_check(db: Session = Depends(get_db)):
    """Health check verifying database connection and pgvector extension availability."""
    db_status = "connected"
    pgvector_available = False
    try:
        result = db.execute(text("SELECT extname FROM pg_extension WHERE extname = 'vector';")).scalar()
        if result == "vector":
            pgvector_available = True
    except Exception as e:
        logger.error(f"Health check database query failed: {e}")
        db_status = f"error: {str(e)}"

    return HealthResponse(
        status="healthy" if pgvector_available else "degraded",
        database=db_status,
        pgvector_extension=pgvector_available,
        embedding_model=settings.EMBEDDING_MODEL,
        llm_model=settings.LLM_MODEL
    )


# Include API Routers
app.include_router(documents.router)
app.include_router(chat.router)
