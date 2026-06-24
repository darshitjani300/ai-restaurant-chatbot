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
        className={`mb-4 overflow-hidden flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 h-125 w-87.5 sm:w-100"
            : "scale-0 opacity-0 h-0 w-0"
        }`}
      >
        {/* Header */}
        <div className="bg-zinc-900 text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">Bella Vista AI</h3>
            <p className="text-xs text-zinc-400">Usually replies instantly</p>
          </div>
          <div className="flex gap-2">
            {/* Clear Chat Button */}
            {lead && (
              <button
                onClick={() => setMessages([{
                  role: "assistant",
                  content: `Buonasera ${lead.name}! Welcome to Bella Vista. How can I help you today?`
                }])}
                className="p-2 hover:bg-zinc-700 rounded-full transition-colors"
                title="Clear Chat"
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
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            )}

            {/* Close Button  */}
            <button
              className="p-2 hover:bg-zinc-700 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-zinc-50 overflow-hidden flex flex-col">
          {!lead ? (
            /* --- LEAD CAPTURE FORM --- */
            <div className="p-6 flex-1 flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <h4 className="text-xl font-medium text-zinc-800">Welcome!</h4>
                <p className="text-sm text-zinc-500 mt-2">
                  Please enter your details to start chatting with our AI
                  assistant.
                </p>
              </div>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow bg-white text-zinc-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow bg-white text-zinc-800"
                />
                <button
                  type="submit"
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  Start Chatting
                </button>
              </form>
            </div>
          ) : (
            /* --- CHAT MESSAGES --- */
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === "assistant" ? "bg-white text-zinc-800 shadow-sm self-start border border-zinc-100" : "bg-zinc-900 text-white self-end"}`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              ))}

              {isLoading && (
                <div className="bg-white text-zinc-800 shadow-sm self-start border border-zinc-100 rounded-2xl px-4 py-4 max-w-[80%] flex items-center gap-1">
                  <div
                    className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
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
              <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
                <button
                  onClick={() => handleQuickReplay("Book a table")}
                  className="whitespace-nowrap px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs rounded-full transition-colors border border-zinc-200"
                >
                  Book a table
                </button>
                <button
                  onClick={() => handleQuickReplay("View menu")}
                  className="whitespace-nowrap px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs rounded-full transition-colors border border-zinc-200"
                >
                  View menu
                </button>
                <button
                  onClick={() =>
                    handleQuickReplay("Do you have vegan options?")
                  }
                  className="whitespace-nowrap px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs rounded-full transition-colors border border-zinc-200"
                >
                  Vegan options?
                </button>
              </div>
            )}

            <form
              onSubmit={handleSendMessages}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-zinc-100 text-zinc-800 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow text-sm"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="bg-zinc-900 hover:bg-zinc-800 text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg
                  width="18"
                  height="18"
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
                ⚡ Powered by Gemini AI
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bubble */}
      <button
        onClick={toggleChat}
        className={`relative bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-full shadow-xl transition-transform duration-300 cursor-pointer ${isOpen ? "scale-0 opacity-0 absolute" : "scale-100 opacity-100 hover:scale-105"}`}
      >
        {!hasOpenedOnce && (
          <span className="absolute top-0 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow">
            1
          </span>
        )}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;
