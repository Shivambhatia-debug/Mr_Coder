"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

export function VoiceCommands() {
  const [isListening, setIsListening] = useState(false)
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
      speak("Hello! Voice assistant activated. Try saying 'go to services' or 'show pricing'")
    },
    help: () => {
      speak("You can say: go to services, show pricing, start project, show portfolio, or contact us")
    },
  }

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      speechSynthesis.speak(utterance)
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

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase()

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

  if (!isSupported) {
    return null
  }

  return (
    <div className="fixed top-20 right-6 z-50">
      <Button
        onClick={startListening}
        disabled={isListening}
        className={`${
          isListening
            ? "bg-red-500 hover:bg-red-600 animate-pulse"
            : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
        } text-white shadow-lg rounded-full h-12 w-12 p-0 group`}
        title={isListening ? "Listening..." : "Voice Assistant - Click to speak"}
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </Button>
    </div>
  )
}
