"""Doctring for backend app"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app import models
from app.routes import issues

app = FastAPI(
    title="My API",
    description="FastAPI backend service",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

# CORS configuration (important if frontend is separate like Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "FixMyRoad API running"}


@app.get("/health")
async def health_check():
    return {"status": "ok"}

app.include_router(issues.router)