import logging
from sqlalchemy import create_engine, text
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from app.config import settings

logger = logging.getLogger(__name__)

engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    echo=False
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db():
    """Ensure pgvector extension is enabled and create all tables."""
    try:
        with engine.begin() as conn:
            conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector;"))
            conn.execute(text("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"))
        logger.info("Successfully verified pgvector extension.")

        # Create all declared tables
        Base.metadata.create_all(bind=engine)
        logger.info("All database tables verified and created.")
    except Exception as e:
        logger.error(f"Error during database initialization: {e}")
        raise e
