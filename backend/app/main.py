from fastapi import FastAPI
from app.database.database import engine, Base
from app.models.user import User
from app.routes.user import router as user_router

app = FastAPI(
    title="Research Paper Assistant",
    description="AI-powered Research Paper Assistant API",
    version="1.0.0"
)


Base.metadata.create_all(bind=engine)

app.include_router(user_router)


@app.get("/")
def home():
    return {
        "message": "Research Paper Assistant API is running"
    }


@app.get("/database-test")
def database_test():
    return {
        "message": "Database connection is working"
    }