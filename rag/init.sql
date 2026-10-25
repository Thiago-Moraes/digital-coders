-- Initialize pgvector and required PostgreSQL extensions
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Notice: Table schemas will be managed and verified automatically by SQLAlchemy on app startup.
