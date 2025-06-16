"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, Mic, MicOff, Minimize2, Maximize2, X, Code, Brain, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
  typing?: boolean
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hey! I'm MrCoder AI Assistant. I can help you with project planning, tech stack selection, cost estimation, and answer any development questions!",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiResponses = {
    greeting: [
      "Hello! Ready to build something amazing? 🚀",
      "Hi there! Let's create your next big project! ✨",
      "Hey! I'm here to help you build the future! 🔥",
    ],
    pricing: [
      "Our pricing starts from $2,999 for websites, $4,999 for mobile apps. Want a detailed quote? 💰",
      "Pricing depends on complexity. Basic websites start at $2,999. Let me know your requirements! 📊",
    ],
    tech: [
      "We use cutting-edge tech: React, Next.js, Node.js, Python, AI/ML, and more! What's your project about? ⚡",
      "Our tech stack includes modern frameworks, cloud infrastructure, and AI integration. Tell me more! 🛠️",
    ],
    timeline: [
      "Typical projects take 2-8 weeks depending on complexity. Rush jobs available! ⏰",
      "Timeline varies: Simple sites (1-2 weeks), Complex apps (4-8 weeks). What's your deadline? 📅",
    ],
    default: [
      "That's interesting! Can you tell me more about your project requirements? 🤔",
      "I'd love to help! What specific aspect of development are you curious about? 💡",
      "Great question! Let me connect you with our team for detailed discussion. 🎯",
    ],
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)]
    }
    if (message.includes("price") || message.includes("cost") || message.includes("budget")) {
      return aiResponses.pricing[Math.floor(Math.random() * aiResponses.pricing.length)]
    }
    if (message.includes("tech") || message.includes("technology") || message.includes("stack")) {
      return aiResponses.tech[Math.floor(Math.random() * aiResponses.tech.length)]
    }
    if (message.includes("time") || message.includes("deadline") || message.includes("when")) {
      return aiResponses.timeline[Math.floor(Math.random() * aiResponses.timeline.length)]
    }

    return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const startVoiceRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported in this browser")
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"

    setIsListening(true)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputValue(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-2xl animate-pulse-glow rounded-full h-14 w-14 p-0 group"
        >
          <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          AI Assistant
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Card
        className={`glass-dark border-purple-500/30 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
          isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
        }`}
      >
        <CardHeader className="p-4 border-b border-purple-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800 animate-pulse"></div>
              </div>
              <div>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  MrCoder AI
                  <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                </CardTitle>
                <p className="text-xs text-gray-400">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-white h-8 w-8 p-0"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-slate-700/50 text-gray-200 border border-purple-500/20"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700/50 text-gray-200 border border-purple-500/20 p-3 rounded-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="p-4 border-t border-purple-500/20">
              <div className="flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything about development..."
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                />
                <Button
                  onClick={startVoiceRecognition}
                  variant="outline"
                  size="sm"
                  className={`border-purple-500/30 text-white hover:bg-purple-500/20 ${
                    isListening ? "bg-red-500/20 border-red-500/50" : ""
                  }`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <Code className="h-3 w-3" />
                <span>Powered by MrCoder AI • Voice enabled</span>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
