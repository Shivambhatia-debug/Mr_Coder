"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Rocket, Zap, Star, Users, Award } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingCards = [
    { icon: Code, label: "Development", delay: "0s", position: "top-20 right-20" },
    { icon: Palette, label: "Design", delay: "1s", position: "top-40 right-80" },
    { icon: Rocket, label: "Performance", delay: "2s", position: "top-60 right-40" },
    { icon: Zap, label: "Optimization", delay: "0.5s", position: "bottom-40 right-60" },
    { icon: Users, label: "Collaboration", delay: "1.5s", position: "bottom-20 right-20" },
    { icon: Award, label: "Quality", delay: "2.5s", position: "top-80 right-10" },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>

      {/* Floating cards */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute ${card.position} glass-dark animate-float w-32 h-32 flex items-center justify-center group cursor-pointer`}
            style={{ animationDelay: card.delay }}
          >
            <CardContent className="p-4 text-center">
              <card.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2 group-hover:text-cyan-300 transition-colors" />
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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300">Trusted by 10,000+ tech companies</span>
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
                accessible to everyone. Built with cutting-edge technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg px-8 py-4 animate-pulse-glow group"
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
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 glass-dark"
                asChild
              >
                <Link href="#works">Become a Partner</Link>
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
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-dark p-6 animate-float" style={{ animationDelay: "0s" }}>
                  <CardContent className="p-0 text-center">
                    <Code className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                    <p className="text-gray-400 text-sm">Maintainable & scalable</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark p-6 animate-float mt-8" style={{ animationDelay: "0.5s" }}>
                  <CardContent className="p-0 text-center">
                    <Rocket className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-400 text-sm">Lightning quick results</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark p-6 animate-float" style={{ animationDelay: "1s" }}>
                  <CardContent className="p-0 text-center">
                    <Palette className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Modern Design</h3>
                    <p className="text-gray-400 text-sm">Cutting-edge aesthetics</p>
                  </CardContent>
                </Card>
                <Card className="glass-dark p-6 animate-float mt-8" style={{ animationDelay: "1.5s" }}>
                  <CardContent className="p-0 text-center">
                    <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Optimized</h3>
                    <p className="text-gray-400 text-sm">Peak performance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}
