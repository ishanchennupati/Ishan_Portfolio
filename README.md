# 🤖 AI Portfolio Chatbot

An AI-powered portfolio website built with **Next.js** and **FastAPI**, featuring a chatbot that answers questions about me using Google's Gemini API.

## ✨ Features

- 💬 AI chatbot powered by Gemini
- ⚡ Real-time streaming responses
- 🎨 Modern responsive UI built with Next.js & Tailwind CSS
- 🚀 FastAPI backend
- 🧠 Context-aware responses about projects, skills, and experience
- 🔗 REST API communication between frontend and backend

---

# 🏗️ Project Structure

```
ishan-portfolio/
│
├── backend/                 # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   └── ...
│
├── ishan-portfolio/         # Next.js frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python
- Uvicorn

### AI

- Google Gemini API

---

# 📋 Prerequisites

Before running the project, install:

- Node.js (v18+ recommended)
- Python 3.10+
- Git

---

# ⚙️ Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it.

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend:

```bash
uvicorn main:app --reload --port 5000
```

The API will be available at:

```
http://127.0.0.1:5000
```

---

# 🌐 Frontend Setup

Open a new terminal.

Navigate to the frontend:

```bash
cd ishan-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔄 Running the Project

Start the backend first:

```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload --port 5000
```

Then start the frontend:

```bash
cd ishan-portfolio
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Health Check

```
GET /health
```

Returns:

```json
{
  "status": "ok"
}
```

---

## Chat

```
POST /chat
```

Example request:

```json
{
  "message": "Tell me about your projects."
}
```

---

# 🔐 Environment Variables

Backend `.env`

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 🚀 Future Improvements

- Conversation memory
- Voice input/output
- Dark/Light mode improvements
- Authentication
- Docker support
- Deployment on Vercel + Render
- Multiple AI model support

---

# 👨‍💻 Author

**Ishan Chennupati**

- LinkedIn: https://www.linkedin.com/in/ishan-chennupati/

---

# 📄 License

This project is licensed under the MIT License.
