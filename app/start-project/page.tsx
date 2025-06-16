"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Check, Code2, Zap, Terminal, Cpu, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function StartProjectPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [terminalText, setTerminalText] = useState("")

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const terminalCommands = [
    "$ initializing project setup...",
    "$ scanning requirements...",
    "$ optimizing tech stack...",
    "$ deploying success.exe",
    "$ project ready for launch! 🚀",
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Terminal animation
    let commandIndex = 0
    let charIndex = 0
    const typeCommand = () => {
      if (commandIndex < terminalCommands.length) {
        if (charIndex < terminalCommands[commandIndex].length) {
          setTerminalText((prev) => prev + terminalCommands[commandIndex][charIndex])
          charIndex++
          setTimeout(typeCommand, 80)
        } else {
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n")
            commandIndex++
            charIndex = 0
            if (commandIndex < terminalCommands.length) {
              setTimeout(typeCommand, 800)
            }
          }, 1200)
        }
      }
    }
    setTimeout(typeCommand, 1000)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(4)
    }, 2000)
  }

  const projectTypes = [
    { id: "website", label: "Website", icon: "🌐", desc: "Modern responsive websites" },
    { id: "webapp", label: "Web App", icon: "⚡", desc: "Complex web applications" },
    { id: "ecommerce", label: "E-commerce", icon: "🛒", desc: "Online stores & marketplaces" },
    { id: "mobile", label: "Mobile App", icon: "📱", desc: "iOS & Android applications" },
  ]

  const techStack = [
    { name: "React/Next.js", selected: true },
    { name: "Node.js", selected: true },
    { name: "TypeScript", selected: false },
    { name: "Python/Django", selected: false },
    { name: "PostgreSQL", selected: false },
    { name: "MongoDB", selected: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-purple-500/5 to-transparent"></div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Interactive gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x / 20,
            top: mousePosition.y / 20,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-2 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative z-10 transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Branding */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <Code2 className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="absolute inset-0 bg-cyan-400 opacity-30 blur-lg group-hover:opacity-50 transition-opacity animate-pulse" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white code-text">Project Initialization</h1>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Terminal className="h-4 w-4 animate-pulse" />
                    <span>Starting development sprint...</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Transform your vision into reality with cutting-edge technology and expert development.
                </p>
              </div>

              {/* Terminal */}
              <div className="glass-dark border border-cyan-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-400">mrcoder@project-setup:~</span>
                  <div className="flex gap-1 ml-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="text-green-400 whitespace-pre-line min-h-[120px]">
                  {terminalText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              {/* Tech Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center glass-dark p-4 rounded-lg border border-cyan-500/20 group hover:border-cyan-500/50 transition-all duration-300">
                  <Cpu className="h-6 w-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-gray-400 text-xs">Uptime</div>
                </div>
                <div className="text-center glass-dark p-4 rounded-lg border border-purple-500/20 group hover:border-purple-500/50 transition-all duration-300">
                  <Rocket className="h-6 w-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold text-purple-400">2x</div>
                  <div className="text-gray-400 text-xs">Faster</div>
                </div>
                <div className="text-center glass-dark p-4 rounded-lg border border-green-500/20 group hover:border-green-500/50 transition-all duration-300">
                  <Shield className="h-6 w-6 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400 text-xs">Secure</div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div
              ref={formRef}
              className={`transition-all duration-1000 delay-300 ${
                formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="glass-dark border-cyan-500/30 shadow-2xl backdrop-blur-xl bg-slate-800/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-bold flex items-center gap-2">
                    <Zap className="h-6 w-6 text-cyan-400" />
                    Project Configuration
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Configure your project parameters for optimal development
                  </CardDescription>

                  {step < 4 && (
                    <div className="flex justify-between items-center mt-6">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`flex items-center ${
                            s < step ? "text-cyan-400" : s === step ? "text-white" : "text-gray-500"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300 ${
                              s < step
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : s === step
                                  ? "border-2 border-cyan-500 bg-cyan-500/20"
                                  : "border-2 border-gray-600"
                            }`}
                          >
                            {s < step ? <Check className="h-4 w-4" /> : s}
                          </div>
                          <span className="hidden sm:inline text-sm font-medium">
                            {s === 1 ? "Project Type" : s === 2 ? "Tech Stack" : "Launch Config"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="px-6 py-4">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="project-name" className="text-gray-200 font-medium">
                          Project Identifier
                        </Label>
                        <Input
                          id="project-name"
                          placeholder="my-awesome-project"
                          required
                          className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/30 h-12"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-gray-200 font-medium">Project Type</Label>
                        <RadioGroup defaultValue="website" className="grid grid-cols-2 gap-4">
                          {projectTypes.map((type) => (
                            <div
                              key={type.id}
                              className="flex items-center space-x-3 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 group"
                            >
                              <RadioGroupItem value={type.id} id={type.id} />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xl">{type.icon}</span>
                                  <Label htmlFor={type.id} className="cursor-pointer text-white font-medium">
                                    {type.label}
                                  </Label>
                                </div>
                                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {type.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="budget" className="text-gray-200 font-medium">
                          Investment Range
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-500/30 text-white focus:border-cyan-400 h-12">
                            <SelectValue placeholder="Select investment range" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-500/30">
                            <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="20k+">$20,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-gray-200 font-medium">Preferred Tech Stack</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {techStack.map((tech) => (
                            <div
                              key={tech.name}
                              className="flex items-center space-x-3 border border-cyan-500/20 rounded-lg p-3 hover:border-cyan-500/50 cursor-pointer transition-all duration-300"
                            >
                              <Checkbox id={tech.name} defaultChecked={tech.selected} />
                              <Label htmlFor={tech.name} className="cursor-pointer text-white text-sm">
                                {tech.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="description" className="text-gray-200 font-medium">
                          Project Specifications
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your project vision, key features, and technical requirements..."
                          className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="timeline" className="text-gray-200 font-medium">
                          Development Timeline
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-500/30 text-white focus:border-cyan-400 h-12">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-500/30">
                            <SelectItem value="1-2-weeks">1-2 weeks (Sprint)</SelectItem>
                            <SelectItem value="2-4-weeks">2-4 weeks (Standard)</SelectItem>
                            <SelectItem value="1-2-months">1-2 months (Complex)</SelectItem>
                            <SelectItem value="3-6-months">3-6 months (Enterprise)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name" className="text-gray-200 font-medium">
                            First Name
                          </Label>
                          <Input
                            id="first-name"
                            required
                            className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name" className="text-gray-200 font-medium">
                            Last Name
                          </Label>
                          <Input
                            id="last-name"
                            required
                            className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-200 font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-200 font-medium">
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 h-12"
                        />
                      </div>

                      <div className="flex items-center space-x-3 p-4 border border-cyan-500/20 rounded-lg">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm text-gray-300">
                          I agree to the{" "}
                          <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="py-8 text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                        <Check className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Project Initialized Successfully!</h3>
                        <p className="text-gray-300 max-w-md mx-auto">
                          Your development sprint has been configured. Our team will analyze your requirements and
                          contact you within 2 hours.
                        </p>
                      </div>
                      <div className="glass-dark p-4 rounded-lg border border-green-500/30">
                        <div className="text-sm text-green-400 font-mono">
                          $ project_id: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                          <br />$ status: INITIALIZED
                          <br />$ next_step: TEAM_ASSIGNMENT
                        </div>
                      </div>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
                      >
                        <Link href="/">Return to Dashboard</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>

                {step < 4 && (
                  <CardFooter className="flex justify-between border-t border-cyan-500/20 p-6">
                    {step > 1 ? (
                      <Button
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {step < 3 ? (
                      <Button
                        onClick={() => setStep(step + 1)}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Initializing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Rocket className="h-4 w-4" />
                            Launch Project
                          </div>
                        )}
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
