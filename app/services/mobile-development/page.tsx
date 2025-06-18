"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Smartphone, Apple, SmartphoneIcon as Android, Code, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function MobileDevelopmentPage() {
  const platforms = [
    { name: "React Native", icon: "⚛️", description: "Cross-platform mobile apps", color: "from-blue-500 to-cyan-500" },
    { name: "Flutter", icon: "🎯", description: "Google's UI toolkit", color: "from-blue-400 to-blue-600" },
    { name: "Native iOS", icon: "🍎", description: "Swift & SwiftUI development", color: "from-gray-600 to-gray-800" },
    {
      name: "Native Android",
      icon: "🤖",
      description: "Kotlin & Java development",
      color: "from-green-500 to-green-700",
    },
  ]

  const features = [
    "Cross-Platform Development",
    "Native Performance",
    "Push Notifications",
    "Offline Functionality",
    "App Store Optimization",
    "In-App Purchases",
    "Social Media Integration",
    "Analytics & Crash Reporting",
  ]

  const apps = [
    {
      title: "FinanceTracker Pro",
      description: "Personal finance management with AI insights",
      image: "/placeholder.svg?height=300&width=200",
      platform: "React Native",
      downloads: "50K+",
    },
    {
      title: "FoodieDelivery",
      description: "On-demand food delivery with real-time tracking",
      image: "/placeholder.svg?height=300&width=200",
      platform: "Flutter",
      downloads: "100K+",
    },
    {
      title: "FitnessCoach AI",
      description: "AI-powered workout and nutrition planning",
      image: "/placeholder.svg?height=300&width=200",
      platform: "Native iOS",
      downloads: "25K+",
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-purple-400 font-medium">Mobile Development</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Native & Cross-Platform{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Build powerful mobile applications for iOS and Android. From concept to App Store, I create engaging
                mobile experiences that users love and businesses need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Start Your App
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View App Portfolio
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  ₹4,999
                </span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Mobile App Development"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Apple className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <span className="text-white font-medium">iOS</span>
                  </div>
                  <div className="text-center">
                    <Android className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Android</span>
                  </div>
                  <div className="text-center">
                    <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Cross-Platform</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Platforms
            </span>{" "}
            I Develop For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-purple-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Apps */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Mobile Apps
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-64 overflow-hidden flex justify-center items-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="h-48 w-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {app.title}
                    </h3>
                    <span className="text-sm text-purple-400 font-medium">{app.downloads}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{app.description}</p>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {app.platform}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-xl text-purple-100 mb-8">
            From idea to App Store, let's build your mobile app that users will love.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
