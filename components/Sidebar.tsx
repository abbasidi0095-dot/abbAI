"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, User, Bot } from "lucide-react";

export function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 border-r border-white/10 glass flex flex-col p-4 z-50"
    >
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <Bot size={16} className="text-indigo-400" />
        </div>
        <span className="font-semibold tracking-tight">abbAI</span>
      </div>

      <nav className="flex-1 space-y-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <MessageSquare size={18} />
          <span>New Chat</span>
        </a>
      </nav>

      <div className="border-t border-white/10 pt-4 mt-auto">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors">
          <User size={18} />
          <span>Profile</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </a>
      </div>
    </motion.aside>
  );
}
