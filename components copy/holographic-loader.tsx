"use client"

import { useEffect, useState } from "react"

interface HolographicLoaderProps {
  text?: string
  duration?: number
}

export function HolographicLoader({ text = "Loading", duration = 3000 }: HolographicLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    // Typing effect
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(typeInterval)
    }
  }, [text, duration])

  return (
    <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Holographic circle */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30"></div>
          <div
            className="absolute inset-0 rounded-full border-2 border-cyan-400 transition-all duration-300"
            style={{
              clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
            }}
          ></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl font-bold text-cyan-400">{Math.round(progress)}%</span>
          </div>

          {/* Rotating rings */}
          <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full border border-cyan-500/20 animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white code-text">
            {currentText}
            <span className="animate-pulse">|</span>
          </h3>
          <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"
            style={{
              left: `${20 + i * 10}%`,
              top: `${40 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
