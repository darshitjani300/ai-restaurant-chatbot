import { useState } from "react";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async (userText: any) => {
    if (!userText.trim()) return;

    const newMessage: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(newMessage);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessage }),
      });

      // 2. THE FIX: If the API returns a 503 High Demand (or any error), handle it smoothly!
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm sorry, my servers are experiencing high traffic right now. Please try again in a moment! 🚦",
          },
        ]);
        return; // Stop here so we don't try to parse broken data
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.replay },
      ]);
    } catch (error) {
      console.error("Failed to send Message: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessage = () => setMessages([]);

  return {
    messages,
    setMessages,
    isLoading,
    sendMessage,
    clearMessage,
  };
}
