"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, TrendingUp, Zap, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SEOPerformancePage() {
  const seoServices = [
    { name: "Technical SEO", icon: "⚙️", description: "Site structure optimization" },
    { name: "Keyword Research", icon: "🔍", description: "Strategic keyword targeting" },
    { name: "Content Optimization", icon: "📝", description: "SEO-friendly content creation" },
    { name: "Core Web Vitals", icon: "⚡", description: "Performance optimization" },
    { name: "Local SEO", icon: "📍", description: "Local search optimization" },
    { name: "Analytics Setup", icon: "📊", description: "Comprehensive tracking" },
  ]

  const features = [
    "Complete SEO Audit",
    "Keyword Strategy",
    "On-Page Optimization",
    "Technical SEO Fixes",
    "Site Speed Optimization",
    "Mobile Optimization",
    "Schema Markup",
    "Monthly Reporting",
  ]

  const results = [
    {
      client: "TechStartup Inc.",
      improvement: "300% Organic Traffic",
      timeframe: "6 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      client: "E-commerce Store",
      improvement: "250% Conversion Rate",
      timeframe: "4 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      client: "Local Business",
      improvement: "400% Local Visibility",
      timeframe: "3 months",
      image: "/placeholder.svg?height=200&width=300",
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-400 font-medium">SEO & Performance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Dominate Search{" "}
                <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                  Rankings
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Boost your search rankings and website performance with comprehensive SEO strategies. Get more organic
                traffic, better user experience, and higher conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-400 hover:to-teal-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Start SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View SEO Reports
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at{" "}
                <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                  ₹899/mo
                </span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="SEO Performance Dashboard"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Rankings</span>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Traffic</span>
                  </div>
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Speed</span>
                  </div>
                  <div className="text-center">
                    <Search className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              SEO Services
            </span>{" "}
            We Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((service, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-green-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven{" "}
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
              SEO Results
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-green-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={result.image || "/placeholder.svg"}
                    alt={result.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {result.client}
                  </h3>
                  <div className="text-2xl font-bold text-green-400 mb-2">{result.improvement}</div>
                  <p className="text-gray-400">in {result.timeframe}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Search Rankings?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get a comprehensive SEO audit and start climbing the search results today.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Get SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
