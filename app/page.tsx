"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate API call for now (as the actual API might not be configured/deployed yet)
    // In a real scenario, use actual endpoint.
  };

  return (
    <div className="flex-1 flex flex-col h-full max-w-4xl mx-auto w-full p-6">
      <div className="flex-1 overflow-y-auto space-y-6 py-8">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl ${m.role === 'user' ? 'bg-indigo-500/10 border border-indigo-500/20 ml-auto max-w-[80%]' : 'bg-white/5 border border-white/5 mr-auto max-w-[80%]'}`}
            >
              {m.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="sticky bottom-6">
        <div className="luxury-pill flex items-center p-2">
          <input 
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm placeholder:text-white/30"
            placeholder="Describe your vision..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button 
            className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
            onClick={sendMessage}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
