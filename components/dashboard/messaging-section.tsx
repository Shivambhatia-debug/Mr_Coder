"use client"

import { useState, useRef, useEffect } from "react"
import { Paperclip, Send } from "lucide-react"

const initialMessages = [
  {
    id: 1,
    sender: "Developer",
    text: "Hello! How can I help you today?",
    timestamp: "09:00 AM"
  },
  {
    id: 2,
    sender: "Client",
    text: "Hi! Can you update me on the project status?",
    timestamp: "09:01 AM"
  },
  {
    id: 3,
    sender: "Developer",
    text: "Sure! We just completed the authentication module.",
    timestamp: "09:02 AM"
  }
]

const developerReplies = [
  "Thank you for your message! I'll check and update you shortly.",
  "We are working on the requested feature.",
  "Let me know if you have any other questions.",
  "The team is making good progress!",
  "I'll send you the latest report soon."
]

function getRandomReply() {
  return developerReplies[Math.floor(Math.random() * developerReplies.length)]
}

export function MessagingSection() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isReplying, setIsReplying] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim() || isReplying) return
    const clientMsg = {
      id: messages.length + 1,
      sender: "Client",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, clientMsg])
    setInput("")
    setIsReplying(true)
    setTimeout(() => {
      const devMsg = {
        id: clientMsg.id + 1,
        sender: "Developer",
        text: getRandomReply(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, devMsg])
      setIsReplying(false)
    }, 1200)
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col h-[70vh] bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Messaging Section</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Talk with your development team</p>
      </div>
      {/* Message Window */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-slate-50 dark:bg-slate-900" style={{ minHeight: 0 }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "Client" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-sm relative text-sm whitespace-pre-line
                ${msg.sender === "Client"
                  ? "bg-cyan-500 text-white rounded-br-md"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-bl-md"
                }`
              }
            >
              <span className="block font-medium mb-1 text-xs opacity-80">
                {msg.sender}
              </span>
              {msg.text}
              <span className="block text-[10px] text-right opacity-60 mt-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Message Input Area */}
      <form
        className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800"
        onSubmit={e => { e.preventDefault(); handleSend(); }}
      >
        <button type="button" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
          <Paperclip className="h-5 w-5 text-slate-400" />
        </button>
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          disabled={isReplying}
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition flex items-center justify-center"
          disabled={isReplying}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
} 