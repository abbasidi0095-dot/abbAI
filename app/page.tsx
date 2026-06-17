"use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let assistantMessage = "";
    
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;
      const chunk = decoder.decode(value);
      assistantMessage += chunk;
      setMessages([...newMessages, { role: "assistant", content: assistantMessage }]);
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4">Sidebar</aside>
      <main className="flex-1 p-4">
        <div className="h-[80vh] overflow-y-auto mb-4 border p-2">
          {messages.map((m, i) => (
            <div key={i} className={`p-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
              <strong>{m.role}:</strong> {m.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input 
            className="border p-2 flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="bg-blue-500 text-white p-2" onClick={sendMessage}>Send</button>
        </div>
      </main>
    </div>
  );
}
