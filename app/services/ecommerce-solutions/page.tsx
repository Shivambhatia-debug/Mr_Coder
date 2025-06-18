"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, CreditCard, Package, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EcommerceSolutionsPage() {
  const ecommerceServices = [
    { name: "Online Store Setup", icon: "🏪", description: "Complete e-commerce platform" },
    { name: "Payment Integration", icon: "💳", description: "Secure payment gateways" },
    { name: "Inventory Management", icon: "📦", description: "Stock tracking system" },
    { name: "Order Management", icon: "📋", description: "Order processing workflow" },
    { name: "Analytics & Reports", icon: "📊", description: "Sales performance insights" },
    { name: "Mobile Commerce", icon: "📱", description: "Mobile-optimized shopping" },
  ]

  const ecommerceProjects = [
    {
      title: "Fashion E-commerce",
      description: "Modern clothing store with AR try-on",
      image: "/placeholder.svg?height=300&width=400",
      platform: "Shopify Plus",
      revenue: "$2M+ Annual",
    },
    {
      title: "Electronics Marketplace",
      description: "Multi-vendor electronics platform",
      image: "/placeholder.svg?height=300&width=400",
      platform: "Custom Solution",
      revenue: "$5M+ Annual",
    },
    {
      title: "Food Delivery Platform",
      description: "Restaurant ordering and delivery system",
      image: "/placeholder.svg?height=300&width=400",
      platform: "React + Node.js",
      revenue: "$1M+ Annual",
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <span className="text-indigo-400 font-medium">E-commerce Solutions</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Complete Online{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Store Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Build powerful e-commerce platforms that drive sales and delight customers. From simple stores to
                complex marketplaces, I create shopping experiences that convert.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white animate-pulse-glow"
                  asChild
                >
                  <Link href="/start-project">
                    Launch Your Store
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 glass-dark">
                  View Store Examples
                </Button>
              </div>

              <div className="text-4xl font-bold text-white">
                Starting at{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  ₹2,999
                </span>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Dashboard"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <CreditCard className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Payments</span>
                  </div>
                  <div className="text-center">
                    <Package className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Inventory</span>
                  </div>
                  <div className="text-center">
                    <BarChart className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Analytics</span>
                  </div>
                  <div className="text-center">
                    <ShoppingCart className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Shopping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              E-commerce Features
            </span>{" "}
            I Build
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceServices.map((service, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-indigo-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Projects */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Successful{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              E-commerce Stores
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecommerceProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-dark border-white/10 group hover:border-indigo-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-indigo-400 font-medium">{project.platform}</span>
                    <span className="text-sm text-green-400 font-bold">{project.revenue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start selling online with a professional e-commerce platform built for success.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8" asChild>
            <Link href="/start-project">
              Build My Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
