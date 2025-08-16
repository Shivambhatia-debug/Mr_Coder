"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react"

export function VoiceCommands() {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported("webkitSpeechRecognition" in window && "speechSynthesis" in window)
  }, [])

  const commands = {
    "go to services": () => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
      speak("Navigating to services section")
    },
    "show pricing": () => {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
      speak("Here are our pricing plans")
    },
    "start project": () => {
      window.location.href = "/start-project"
      speak("Opening project setup")
    },
    "show portfolio": () => {
      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
      speak("Displaying our portfolio")
    },
    "contact us": () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      speak("Here's how to contact us")
    },
    hello: () => {
      speak(
        "Hello! I'm your voice assistant. I can help you navigate the website. Try saying 'go to services' or 'show pricing'",
      )
    },
    help: () => {
      speak("You can say commands like: go to services, show pricing, start project, show portfolio, or contact us")
    },
  }

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
      setResponse(text)
    }
  }

  const startListening = () => {
    if (!isSupported) {
      alert("Voice commands not supported in this browser")
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"

    setIsListening(true)
    setTranscript("")

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase()
      setTranscript(command)

      // Find matching command
      const matchedCommand = Object.keys(commands).find(
        (cmd) => command.includes(cmd) || cmd.includes(command.split(" ")[0]),
      )

      if (matchedCommand) {
        commands[matchedCommand as keyof typeof commands]()
      } else {
        speak("Sorry, I didn't understand that command. Try saying 'help' to see available commands.")
      }

      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
      speak("Sorry, I couldn't hear you clearly. Please try again.")
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      <Card className="glass-dark border-cyan-500/30 w-64">
        <CardContent className="p-4">
          <div className="text-center space-y-4">
            <h3 className="text-white font-semibold flex items-center gap-2 justify-center">
              <Volume2 className="h-4 w-4 text-cyan-400" />
              Voice Assistant
            </h3>

            <div className="flex justify-center gap-2">
              <Button
                onClick={startListening}
                disabled={isListening || isSpeaking}
                className={`${
                  isListening
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                } text-white`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>

              {isSpeaking && (
                <Button
                  onClick={stopSpeaking}
                  variant="outline"
                  className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  <VolumeX className="h-4 w-4" />
                </Button>
              )}
            </div>

            {isListening && <div className="text-cyan-400 text-sm animate-pulse">🎤 Listening...</div>}

            {isSpeaking && <div className="text-green-400 text-sm animate-pulse">🔊 Speaking...</div>}

            {transcript && (
              <div className="text-xs text-gray-300 bg-slate-800/50 p-2 rounded">You said: "{transcript}"</div>
            )}

            {response && (
              <div className="text-xs text-cyan-300 bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
                {response}
              </div>
            )}

            <div className="text-xs text-gray-400">Try: "Hello", "Go to services", "Show pricing"</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
