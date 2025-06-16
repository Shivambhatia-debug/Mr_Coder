"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Star, Code, Palette, Rocket, Zap, Users, Award, Terminal } from "lucide-react"
import Link from "next/link"

export function HeroEnhanced() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentCode, setCurrentCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const codeSnippets = [
    "const website = new MrCoder();",
    "website.build({ tech: 'cutting-edge' });",
    "website.deploy({ speed: 'lightning' });",
    "console.log('Success! 🚀');",
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Typing animation
    let snippetIndex = 0
    let charIndex = 0
    const typeCode = () => {
      if (snippetIndex < codeSnippets.length) {
        if (charIndex < codeSnippets[snippetIndex].length) {
          setCurrentCode((prev) => prev + codeSnippets[snippetIndex][charIndex])
          charIndex++
          setTimeout(typeCode, 100)
        } else {
          setTimeout(() => {
            setCurrentCode((prev) => prev + "\n")
            snippetIndex++
            charIndex = 0
            if (snippetIndex < codeSnippets.length) {
              setTimeout(typeCode, 500)
            } else {
              setIsTyping(false)
            }
          }, 1000)
        }
      }
    }
    setTimeout(typeCode, 1000)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingCards = [
    { icon: Code, label: "Development", delay: "0s", position: "top-20 right-20", color: "cyan" },
    { icon: Palette, label: "Design", delay: "1s", position: "top-40 right-80", color: "purple" },
    { icon: Rocket, label: "Performance", delay: "2s", position: "top-60 right-40", color: "green" },
    { icon: Zap, label: "Optimization", delay: "0.5s", position: "bottom-40 right-60", color: "yellow" },
    { icon: Users, label: "Collaboration", delay: "1.5s", position: "bottom-20 right-20", color: "pink" },
    { icon: Award, label: "Quality", delay: "2.5s", position: "top-80 right-10", color: "orange" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "text-cyan-400 border-cyan-400/30 hover:border-cyan-400/60",
      purple: "text-purple-400 border-purple-400/30 hover:border-purple-400/60",
      green: "text-green-400 border-green-400/30 hover:border-green-400/60",
      yellow: "text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60",
      pink: "text-pink-400 border-pink-400/30 hover:border-pink-400/60",
      orange: "text-orange-400 border-orange-400/30 hover:border-orange-400/60",
    }
    return colors[color as keyof typeof colors] || colors.cyan
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent"></div>

        {/* Interactive gradient blob */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating cards */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute ${card.position} glass-dark animate-float w-32 h-32 flex items-center justify-center group cursor-pointer border ${getColorClasses(card.color)} transition-all duration-300 hover:scale-110`}
            style={{ animationDelay: card.delay }}
          >
            <CardContent className="p-4 text-center">
              <card.icon
                className={`h-8 w-8 mx-auto mb-2 ${getColorClasses(card.color).split(" ")[0]} group-hover:scale-110 transition-transform`}
              />
              <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{card.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-gray-300">Trusted by 10,000+ tech companies worldwide</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Websites That{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Truly Drive
                </span>{" "}
                <span className="code-text">Results</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                We design and develop websites that turn visitors into customers, help achieve business goals, and are
                accessible to everyone. Built with cutting-edge technology and modern frameworks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg px-8 py-4 animate-pulse-glow group transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/start-project">
                  Start a Sprint
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 glass-dark group transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#works">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>100% satisfaction guaranteed</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            {/* Code Terminal */}
            <div className="glass-dark border border-cyan-500/30 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 font-mono">mrcoder@terminal:~</span>
                <div className="flex gap-1 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="font-mono text-sm text-green-400 min-h-[100px]">
                {currentCode}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card
                className="glass-dark p-6 animate-float border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group"
                style={{ animationDelay: "0s" }}
              >
                <CardContent className="p-0 text-center">
                  <Code className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                    Clean Code
                  </h3>
                  <p className="text-gray-400 text-sm">Maintainable & scalable</p>
                </CardContent>
              </Card>
              <Card
                className="glass-dark p-6 animate-float mt-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group"
                style={{ animationDelay: "0.5s" }}
              >
                <CardContent className="p-0 text-center">
                  <Rocket className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-400 text-sm">Lightning quick results</p>
                </CardContent>
              </Card>
              <Card
                className="glass-dark p-6 animate-float border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 group"
                style={{ animationDelay: "1s" }}
              >
                <CardContent className="p-0 text-center">
                  <Palette className="h-12 w-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-pink-300 transition-colors">
                    Modern Design
                  </h3>
                  <p className="text-gray-400 text-sm">Cutting-edge aesthetics</p>
                </CardContent>
              </Card>
              <Card
                className="glass-dark p-6 animate-float mt-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 group"
                style={{ animationDelay: "1.5s" }}
              >
                <CardContent className="p-0 text-center">
                  <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                    Optimized
                  </h3>
                  <p className="text-gray-400 text-sm">Peak performance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}
