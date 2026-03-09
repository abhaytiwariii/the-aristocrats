"""Doctring for backend app"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="My API",
    description="FastAPI backend service",
    version="1.0.0"
)

# CORS configuration (important if frontend is separate like Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "API is running"}


@app.get("/health")
async def health_check():
    return {"status": "ok"}