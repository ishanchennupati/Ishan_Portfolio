from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from ai_service import stream_ai_response
from logger_config import logger

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ishan-portfolio-fe1nbufhd-ishan-e9f1.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    role: str
    text: str


class ChatRequest(BaseModel):
    messages: list[Message]


@app.post("/chat")
async def chat(req: ChatRequest):

    latest_message = req.messages[-1].text
    logger.info(f"Latest user message: {latest_message}")

    try:
        return StreamingResponse(
            stream_ai_response(req.messages), media_type="text/plain"
        )

    except Exception as e:
        logger.error(f"Gemini API Error: {e}")

        return {
            "reply": "Sorry, the AI assistant is temporarily unavailable right now."
        }


@app.get("/health")
async def health():

    logger.info("Health endpoint checked")

    return {"status": "ok"}
