"use client";
import React, { useState, useEffect, useRef } from "react";
import { useChat } from "../hooks/useChat";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState<boolean>(false);
  const [lead, setLead] = useState<{ name: string; email: string } | null>(
    null,
  );

  // Local state for lead form
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");

  // Local state for the chat input
  const [inputText, setInputText] = useState<string>("");

  // Custom hook necessary states
  const { messages, setMessages, isLoading, sendMessage, clearMessage } =
    useChat();

  // Ref for auto-scroll to the bottom of the chat
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when message change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Listen for the "Escape key" to close the widget
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasOpenedOnce(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput || !emailInput) return;

    // Save lead data (you could send webhook here!)
    setLead({ name: nameInput, email: emailInput });
    console.log("Lead Captured: ", { name: nameInput, email: emailInput });

    // Initialize the chat with a personalized welcome message
    setMessages([
      {
        role: "assistant",
        content: `Buonasera ${nameInput}! Welcome to Bella Vista. How can I help you today?`,
      },
    ]);
  };

  const handleSendMessages = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    sendMessage(inputText);
    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessages();
    }
  };

  const handleQuickReplay = (text: string) => {
    sendMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* The Chat Window */}
      <div
        className={`mb-4 overflow-hidden flex flex-col bg-white rounded-2xl shadow-2xl origin-bottom-right ${
          isOpen
            ? "h-125 w-87.5 sm:w-100"
            : "h-0 w-0 pointer-events-none"
        }`}
        style={{
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
          transform: isOpen ? "scale(1)" : "scale(0)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* ── Header — brand-colored gradient ── */}
        <div className="bg-gradient-to-r from-[#1a1814] to-[#2d2a24] text-white p-4 flex justify-between items-center relative overflow-hidden">
          {/* Subtle accent glow */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #d06922 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex items-center gap-3">
            {/* Brand icon */}
            <div className="w-9 h-9 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <span className="text-base">🔥</span>
            </div>
            <div>
              <h3 className="font-semibold text-base">Bella Vista AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] text-zinc-400">Online now</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 relative z-10">
            {/* Clear Chat Button */}
            {lead && (
              <button
                onClick={() => setMessages([{
                  role: "assistant",
                  content: `Buonasera ${lead.name}! Welcome to Bella Vista. How can I help you today?`
                }])}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Clear Chat"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            )}

            {/* Close Button  */}
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#FAFAF8] overflow-hidden flex flex-col">
          {!lead ? (
            /* --- LEAD CAPTURE FORM --- */
            <div className="p-6 flex-1 flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl mx-auto mb-4 flex items-center justify-center rotate-3">
                  <span className="text-3xl -rotate-3">👋</span>
                </div>
                <h4
                  className="text-xl font-medium text-zinc-800"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Benvenuto!
                </h4>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                  Enter your details and our AI concierge will help you
                  explore the menu, dietary options, or book a table.
                </p>
              </div>
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/40 transition-all bg-white text-zinc-800 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/40 transition-all bg-white text-zinc-800 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1a1814] hover:bg-[#2d2a24] text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg text-sm"
                >
                  Start Chatting →
                </button>
              </form>
            </div>
          ) : (
            /* --- CHAT MESSAGES --- */
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === "assistant"
                      ? "bg-white text-zinc-800 shadow-sm self-start border border-zinc-100 rounded-bl-md"
                      : "bg-[#1a1814] text-white self-end rounded-br-md"
                  }`}
                  style={{
                    animation: "fadeInUp 0.3s ease-out both",
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              ))}

              {isLoading && (
                <div className="bg-white text-zinc-800 shadow-sm self-start border border-zinc-100 rounded-2xl rounded-bl-md px-4 py-4 max-w-[80%] flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-brand-accent/40 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              )}

              {/* Invisible div to scroll to */}
              <div ref={messageEndRef} />
            </div>
          )}
        </div>

        {/* --- CHAT INPUT & FOOTER --- */}
        {lead && (
          <div className="bg-white border-t border-zinc-100 p-3">
            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                {[
                  { label: "📅 Book a table", text: "Book a table" },
                  { label: "📖 View menu", text: "View menu" },
                  { label: "🌱 Vegan options?", text: "Do you have vegan options?" },
                ].map((qr) => (
                  <button
                    key={qr.text}
                    onClick={() => handleQuickReplay(qr.text)}
                    className="whitespace-nowrap px-3.5 py-2 bg-[#FBF3ED] hover:bg-[#F6EFEA] text-[#92440C] text-xs rounded-full transition-all duration-200 border border-brand-accent/10 hover:border-brand-accent/20 font-medium cursor-pointer"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={handleSendMessages}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                placeholder="Ask about our menu, hours, or book..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-zinc-100 text-zinc-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="bg-[#1a1814] hover:bg-[#2d2a24] text-white p-3 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
            <div className="text-center mt-2">
              <span className="text-[10px] text-zinc-400 font-medium">
                ✦ Powered by Gemini AI
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Floating Bubble — brand-colored with pulse ring ── */}
      <button
        onClick={toggleChat}
        className={`relative cursor-pointer transition-all duration-400 ${
          isOpen
            ? "scale-0 opacity-0 pointer-events-none"
            : "scale-100 opacity-100 hover:scale-105"
        }`}
      >
        {/* Pulsing ring — draws attention */}
        {!hasOpenedOnce && (
          <span className="absolute inset-0 rounded-full bg-brand-accent/30 animate-ping" />
        )}

        {/* Outer glow ring */}
        <span className="absolute -inset-1 rounded-full bg-brand-accent/10 blur-sm pointer-events-none" />

        {/* Main bubble */}
        <div className="relative bg-gradient-to-br from-[#d06922] to-[#b8591b] text-white p-4 rounded-full shadow-xl shadow-brand-accent/20">
          {/* Notification badge */}
          {!hasOpenedOnce && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-accent text-[10px] font-bold shadow-md border-2 border-brand-accent/20">
              1
            </span>
          )}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
