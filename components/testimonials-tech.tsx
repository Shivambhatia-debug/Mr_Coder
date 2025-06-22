"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsTech() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Alex Chen",
      role: "CTO, DroneTech Solutions",
      company: "DroneTech Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Mr Coder delivered an exceptional full-stack application that exceeded our expectations. The code quality is outstanding, and the performance is blazing fast. Our user engagement increased by 400% after launch.",
      rating: 5,
      project: "SaaS Analytics Platform",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sarah Rodriguez",
      role: "Founder, EcoShop",
      company: "EcoShop",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The mobile app Mr Coder built for us is incredible! React Native was the perfect choice - one codebase for both iOS and Android. Our sales increased by 250% within the first month of launch.",
      rating: 5,
      project: "E-commerce Mobile App",
      tech: ["React Native", "Firebase", "Stripe"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Michael Thompson",
      role: "CEO, FinanceAI",
      company: "FinanceAI",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Working with Coder Gali was a game-changer. The fintech platform they developed handles millions of transactions seamlessly. Their expertise in security and performance optimization is unmatched.",
      rating: 5,
      project: "Fintech Trading Platform",
      tech: ["Next.js", "Python", "AWS"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Wang",
      role: "Product Manager, HealthTech",
      company: "HealthTech Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The healthcare platform Coder Gali built is revolutionary. HIPAA compliant, scalable, and user-friendly. Our patient engagement scores improved by 300%. Absolutely recommended!",
      rating: 5,
      project: "Healthcare Management System",
      tech: ["React", "Django", "PostgreSQL"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      name: "David Kim",
      role: "Startup Founder, EdTech",
      company: "LearnFast",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Coder Gali transformed our idea into a beautiful, functional e-learning platform. The real-time features and video streaming work flawlessly. We've onboarded 10,000+ students already!",
      rating: 5,
      project: "E-learning Platform",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Client <span className="code-text">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what tech leaders and founders say about working with me.
          </p>
        </div>

        <div className="relative">
          <Card className="glass-dark border-white/10 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5`}></div>

              <div className="relative z-10">
                <Quote className="h-12 w-12 text-cyan-400 mb-6 opacity-50" />

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-white/20">
                      <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-bold">
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-white text-lg">{currentTestimonial.name}</div>
                      <div className="text-gray-400">{currentTestimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{currentTestimonial.company}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-white font-semibold mb-2">{currentTestimonial.project}</div>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {currentTestimonial.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="text-white hover:bg-white/10 border border-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-cyan-400 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="text-white hover:bg-white/10 border border-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Project Success</div>
          </div>
        </div>
      </div>
    </section>
  )
}
