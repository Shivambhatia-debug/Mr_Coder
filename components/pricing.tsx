"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page custom website",
        "Responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "3 months support",
        "SSL certificate",
        "Google Analytics setup",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "10-page custom website",
        "Advanced responsive design",
        "Complete SEO optimization",
        "E-commerce integration",
        "6 months support",
        "SSL certificate",
        "Analytics & reporting",
        "Social media integration",
        "Blog/CMS setup",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "one-time",
      description: "For large businesses and complex projects",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced SEO & marketing",
        "Full e-commerce solution",
        "12 months support",
        "Priority support",
        "Custom integrations",
        "Performance optimization",
        "Security hardening",
        "Training & documentation",
      ],
      popular: false,
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="code-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises. Just results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative glass-dark border-white/10 transition-all duration-500 animate-fade-in-up ${
                plan.popular
                  ? "lg:scale-105 lg:-translate-y-2 border-cyan-400/50"
                  : hoveredPlan === index
                    ? "scale-105 border-white/30"
                    : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 animate-pulse-glow`}
                  >
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${
                  hoveredPlan === index || plan.popular ? "opacity-5" : ""
                } transition-opacity duration-500 rounded-lg`}
              ></div>

              <CardHeader className="text-center pb-8 relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${plan.gradient}`}></div>
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:scale-105 animate-pulse-glow`
                      : `bg-gradient-to-r ${plan.gradient} hover:scale-105`
                  } text-white border-0 transition-transform`}
                  size="lg"
                  asChild
                >
                  <Link href="/start-project">
                    <Zap className="mr-2 h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
