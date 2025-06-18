"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap, Server, Shield, Monitor, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DevOpsDeploymentPage() {
  const devopsServices = [
    { name: "CI/CD Pipelines", icon: "🔄", description: "Automated deployment workflows" },
    { name: "Cloud Infrastructure", icon: "☁️", description: "AWS, Azure, GCP setup" },
    { name: "Container Orchestration", icon: "🐳", description: "Docker & Kubernetes" },
    { name: "Monitoring & Logging", icon: "📊", description: "Real-time system monitoring" },
    { name: "Security Hardening", icon: "🔒", description: "Infrastructure security" },
    { name: "Performance Optimization", icon: "⚡", description: "Speed & efficiency tuning" },
  ]

  const infrastructureProjects = [
    {
      title: "Microservices Architecture",
      description: "Scalable containerized application deployment",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Kubernetes", "Docker", "AWS"],
    },
    {
      title: "Auto-Scaling Platform",
      description: "Dynamic resource allocation system",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Terraform", "Jenkins", "Prometheus"],
    },
    {
      title: "Multi-Cloud Setup",
      description: "Redundant cloud infrastructure",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["AWS", "Azure", "CloudFlare"],
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-yellow-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-yellow-400 font-medium">DevOps & Deployment</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Scalable Infrastructure &{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Build robust, scalable infrastructure with automated deployments. From CI/CD pipelines to cloud
                architecture, I ensure your applications run smoothly at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Setup Infrastructure
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View Infrastructure
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  ₹599/mo
                </span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="DevOps Infrastructure"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Server className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Infrastructure</span>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Security</span>
                  </div>
                  <div className="text-center">
                    <Monitor className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Monitoring</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              DevOps Services
            </span>{" "}
            I Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((service, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-yellow-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Projects */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Infrastructure Projects
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {infrastructureProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Infrastructure?</h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let's build robust, automated systems that grow with your business.
          </p>
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Setup DevOps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
