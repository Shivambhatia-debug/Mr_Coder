"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Search, Palette, Zap, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"

export function ServicesAnimated() {
  const [activeService, setActiveService] = useState(0)
  const { ref, visibleItems } = useStaggeredAnimation(200)

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern tech stack",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
      price: "From $3,999",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s",
      link: "/services/full-stack-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "Flutter", "iOS/Android", "App Store Optimization"],
      price: "From $4,999",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s",
      link: "/services/mobile-development",
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Optimize for search engines and lightning-fast speed",
      features: ["Technical SEO", "Core Web Vitals", "Site Speed", "Analytics"],
      price: "From $899/mo",
      gradient: "from-green-500 to-teal-500",
      delay: "0.4s",
      link: "/services/seo-performance",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that converts",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "From $1,999",
      gradient: "from-orange-500 to-red-500",
      delay: "0.6s",
      link: "/services/ui-ux-design",
    },
    {
      icon: Zap,
      title: "DevOps & Deployment",
      description: "Scalable infrastructure and automated deployments",
      features: ["CI/CD Pipelines", "Cloud Hosting", "Monitoring", "Security"],
      price: "From $599/mo",
      gradient: "from-yellow-500 to-orange-500",
      delay: "0.8s",
      link: "/services/devops-deployment",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Shopify/WooCommerce", "Payment Gateways", "Inventory", "Analytics"],
      price: "From $2,999",
      gradient: "from-indigo-500 to-purple-500",
      delay: "1s",
      link: "/services/ecommerce-solutions",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="code-text">Services</span> That Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive development services using the latest technologies.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`glass-dark border-white/10 group hover:border-white/30 transition-all duration-700 overflow-hidden cursor-pointer transform ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <CardContent className="p-6 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${service.gradient} hover:scale-105 transition-transform text-white border-0`}
                      asChild
                    >
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
