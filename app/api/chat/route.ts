import { SYSTEM_PROMP } from "@/src/utils/SystemPrompt";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// --- RATE LIMITER SETUP ---
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const MAX_REQUESTS = 5; 
const WINDOW_MS = 60 * 1000;

export async function POST(req: any) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    } else {
      const rateData = rateLimitMap.get(ip)!;
      if (now - rateData.lastReset > WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      } else {
        if (rateData.count >= MAX_REQUESTS) {
          return Response.json(
            { error: "Too many requests. Please wait a minute." }, 
            { status: 429 } 
          );
        }
        rateData.count += 1;
      }
    }

    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      // model: "gemini-2.5-flash-lite",
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMP,
    });

    // Our frontend sends { role: "assistant", content: "..." }
    // But Gemini expects { role: "model", parts: [{ text: "..." }]
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // Fix Gemini Strictly requires history to start with user message.
    while (history.length > 0 && history[0].role === "model") {
      history.shift(); //Removes the first item from the array
    }

    // The very last message is what user just typed
    const latestMessage = messages[messages.length - 1].content;

    // Start the chat with the history
    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(latestMessage);
    const botText = result.response.text();

    return Response.json({ replay: botText });
  } catch (error) {
    console.error("Chat API Error: ", error);
    return Response.json(
      { error: "Failed to fetch response" },
      { status: 500 },
    );
  }
}
