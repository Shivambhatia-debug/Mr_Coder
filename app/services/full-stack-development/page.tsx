"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Code2, Database, Server, Globe, CheckCircle, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function FullStackDevelopmentPage() {
  const techStack = [
    { name: "React/Next.js", icon: "⚛️", description: "Modern frontend frameworks" },
    { name: "Node.js", icon: "🟢", description: "Server-side JavaScript runtime" },
    { name: "Python/Django", icon: "🐍", description: "Powerful backend development" },
    { name: "PostgreSQL", icon: "🐘", description: "Advanced relational database" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
    { name: "AWS/Vercel", icon: "☁️", description: "Cloud deployment platforms" },
  ]

  const features = [
    "Custom API Development",
    "Database Architecture",
    "Authentication Systems",
    "Real-time Features",
    "Payment Integration",
    "Admin Dashboards",
    "Performance Optimization",
    "Security Implementation",
  ]

  const projects = [
    {
      title: "SaaS Analytics Platform",
      description: "Real-time data visualization with React & Node.js",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      title: "E-learning Management System",
      description: "Complete LMS with video streaming and progress tracking",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Python", "MongoDB", "AWS"],
    },
    {
      title: "Fintech Trading Platform",
      description: "High-frequency trading platform with real-time data",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-cyan-400 font-medium">Full-Stack Development</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                End-to-End{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Web Applications
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                From database design to user interface, I build complete web applications using modern technologies.
                Scalable, secure, and performant solutions that grow with your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View Portfolio
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at <span className="code-text">$3,999</span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Full-Stack Development"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Server className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Backend</span>
                  </div>
                  <div className="text-center">
                    <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Frontend</span>
                  </div>
                  <div className="text-center">
                    <Database className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Database</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="code-text">Tech Stack</span> I Use
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                What You Get with <span className="code-text">Full-Stack Development</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-dark p-8 rounded-2xl border border-white/10">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Development Process"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent <span className="code-text">Full-Stack</span> Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Full-Stack Application?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
