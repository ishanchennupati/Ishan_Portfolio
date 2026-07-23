"use client";
import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const SUGGESTIONS = [
  { label: "Projects?", q: "What projects has he built?" },
  { label: "Tech stack?", q: "What technologies does he know?" },
  { label: "AWS?", q: "Tell me about his AWS experience" },
  { label: "Chatbot?", q: "Explain his chatbot project" },
];

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! I'm Ishan's AI assistant. Ask me anything about his projects, skills, or experience. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSugs, setShowSugs] = useState(true);
  const [thinkingText, setThinkingText] = useState("Thinking...");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const thinkingMessages = [
    "Thinking...",
    "Analyzing...",
    "Reviewing portfolio...",
    "Checking experience...",
    "Preparing response...",
  ];

  const send = async (q: string) => {
    if (!q.trim()) return;
    setShowSugs(false);
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);

    let index = 0;

    const thinkingInterval = setInterval(() => {
      setThinkingText(thinkingMessages[index % thinkingMessages.length]);

      index++;
    }, 1000);

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            {
              role: "user",
              text: q,
            },
          ],
        }),
      });

      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error("No response body");
      }

      const decoder = new TextDecoder();

      let fullText = "";
      let displayedLength = 0;

      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "",
        },
      ]);

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);

        fullText += chunk;
        for (let i = displayedLength + 1; i <= fullText.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 12));

          setMessages((m) => {
            const updated = [...m];

            updated[updated.length - 1] = {
              role: "bot",
              text: fullText.slice(0, i),
            };

            return updated;
          });
        }
        displayedLength = fullText.length;
      }
      clearInterval(thinkingInterval);

      setTyping(false);
    } catch (error) {
      clearInterval(thinkingInterval);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setTyping(false);

      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Something went wrong connecting to the AI backend.",
        },
      ]);
    }
  };

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-7 right-7 z-50">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open AI assistant"
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white border-none cursor-pointer transition-transform hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            boxShadow: "0 4px 24px rgba(99,102,241,0.45)",
          }}
        >
          <Sparkles size={22} />
          {/* Ring pulse */}
          <span
            className="ring-out absolute inset-[-5px] rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(99,102,241,0.35)" }}
          />
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div
          className="fixed bottom-28 right-7 z-50 flex flex-col overflow-hidden"
          style={{
            width: "min(350px, calc(100vw - 40px))",
            maxHeight: 490,
            background: "#111113",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 18,
            boxShadow: "0 24px 60px rgba(0,0,0,0.65)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <Sparkles size={13} color="white" />
              </div>
              <div>
                <p className="font-syne font-semibold text-[13px]">
                  Ask About Ishan
                </p>
                <p className="text-[11px] text-green-400">● AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#888] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="ai-messages flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2.5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed"
                  style={
                    m.role === "bot"
                      ? {
                          background: "#18181c",
                          color: "#f0f0f0",
                          borderRadius: "4px 12px 12px 12px",
                        }
                      : {
                          background: "#6366f1",
                          color: "#fff",
                          borderRadius: "12px 4px 12px 12px",
                        }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-3 py-2.5 rounded-xl text-sm text-gray-300">
                  {thinkingText}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {showSugs && (
            <div
              className="px-4 py-2 flex flex-wrap gap-1.5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  onClick={() => send(s.q)}
                  className="text-[11px] text-[#888] hover:text-[#6366f1] px-2.5 py-1 rounded-md transition-all cursor-pointer font-dm bg-[#18181c]"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#6366f1")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)")
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="px-4 py-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask anything about Ishan..."
              className="flex-1 text-[13px] px-3 py-2 rounded-lg outline-none font-dm text-[#f0f0f0] placeholder-[#444]"
              style={{
                background: "#18181c",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
              }
            />
            <button
              onClick={() => send(input)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#6366f1] hover:bg-[#5254cc] text-white border-none cursor-pointer shrink-0 transition-colors"
              aria-label="Send"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
