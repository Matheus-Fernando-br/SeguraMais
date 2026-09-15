import os
from datetime import datetime, timezone
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

load_dotenv()

app = FastAPI(
    title="SeguraMais Consultoria API",
    description="API de apoio ao site institucional de Segurança e Saúde do Trabalho.",
    version="2.0.0",
)

frontend_url = os.getenv("FRONTEND_URL", "http://localhost:3000")
allowed_origins = [origin.strip() for origin in os.getenv("ALLOWED_ORIGINS", f"http://localhost:3000,{frontend_url}").split(",") if origin.strip()]
app.add_middleware(CORSMiddleware, allow_origins=allowed_origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: Optional[str] = Field(default=None, max_length=160)
    message: str = Field(min_length=5, max_length=2000)

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "seguramais-api", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.post("/api/contact")
def contact(request: ContactRequest):
    # A integração de e-mail/CRM pode ser adicionada aqui sem alterar o frontend.
    # Por segurança, nesta versão o endpoint valida e registra apenas o recebimento.
    print(f"[contact] {request.name} | {request.company or 'sem empresa'} | {request.message[:80]}")
    return {"status": "received", "message": "Contato recebido com sucesso."}
