"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export function Portfolio3D() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, visibleItems } = useStaggeredAnimation(300)

  const projects = [
    {
      id: 1,
      title: "🚀 Drone Surveillance System",
      category: "Web Application",
      image: "/drone-project.jpg",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-blue-600 to-cyan-500",
      description: "AI-powered autonomous drone for aerial monitoring and data collection",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "CryptoTrader Dashboard",
      category: "Fintech",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js", "TypeScript", "WebSocket"],
      gradient: "from-purple-600 to-pink-500",
      description: "Real-time cryptocurrency trading dashboard",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "EcoCommerce Store",
      category: "E-commerce",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Shopify", "React", "Stripe"],
      gradient: "from-green-600 to-teal-500",
      description: "Sustainable e-commerce platform with AR features",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="code-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest work that showcases cutting-edge technology and innovative design solutions.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`perspective-card glass-dark border-white/10 overflow-hidden group cursor-pointer transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-0 translate-y-20 rotate-3"
              } ${hoveredIndex === index ? "scale-105 -rotate-1" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                ></div>

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/20 group-hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white animate-pulse-glow hover:scale-105 transition-transform"
            asChild
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
