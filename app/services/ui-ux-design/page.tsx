"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Palette, Users, Figma, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UIUXDesignPage() {
  const designServices = [
    { name: "User Research", icon: "🔍", description: "Understanding user needs" },
    { name: "Wireframing", icon: "📐", description: "Structure and layout planning" },
    { name: "Prototyping", icon: "🎨", description: "Interactive design mockups" },
    { name: "Design Systems", icon: "🧩", description: "Consistent design components" },
    { name: "Usability Testing", icon: "🧪", description: "User experience validation" },
    { name: "Brand Identity", icon: "✨", description: "Visual brand development" },
  ]

  const designProjects = [
    {
      title: "FinTech Mobile App",
      description: "Modern banking app with intuitive UX",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Design",
    },
    {
      title: "SaaS Dashboard",
      description: "Complex data visualization made simple",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Design",
    },
    {
      title: "E-commerce Platform",
      description: "Conversion-focused shopping experience",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <span className="text-orange-400 font-medium">UI/UX Design</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Beautiful Design That{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Converts
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Create stunning user experiences that delight users and drive business results. From research to
                implementation, I design interfaces that users love.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Start Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View Design Portfolio
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  ₹1,999
                </span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="UI/UX Design Process"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                    <span className="text-white font-medium">User Research</span>
                  </div>
                  <div className="text-center">
                    <Figma className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Prototyping</span>
                  </div>
                  <div className="text-center">
                    <Palette className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Visual Design</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Design Services
            </span>{" "}
            I Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-orange-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Projects */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Design Projects
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-orange-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-orange-400 font-medium">{project.category}</span>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing User Experiences?</h2>
          <p className="text-xl text-orange-100 mb-8">Let's design interfaces that users love and businesses need.</p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Start Design Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
