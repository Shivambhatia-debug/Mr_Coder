"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, ArrowLeft, Github, Mail, Eye, EyeOff, Zap, Terminal, Cpu, Wifi } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [terminalText, setTerminalText] = useState("")

  const terminalCommands = [
    "$ npm install @mrcoder/awesome",
    "$ git clone success.git",
    "$ yarn build --production",
    "$ docker deploy --scale=∞",
    "$ echo 'Welcome Developer!'",
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
          setTimeout(typeCommand, 100)
        } else {
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n")
            commandIndex++
            charIndex = 0
            if (commandIndex < terminalCommands.length) {
              setTimeout(typeCommand, 500)
            }
          }, 1000)
        }
      }
    }
    setTimeout(typeCommand, 1000)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-500/10 to-transparent"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Interactive gradient blob */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
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

      <div className="relative z-10 flex items-center justify-center p-4 min-h-[calc(100vh-100px)]">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl w-full">
          {/* Left side - Terminal and branding */}
          <div className="hidden lg:flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <Code2 className="h-16 w-16 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="absolute inset-0 bg-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition-opacity animate-pulse" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white code-text">Mr Coder</h1>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Wifi className="h-4 w-4 animate-pulse" />
                    <span>Developer Portal Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Welcome to the Future of Development</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join thousands of developers and businesses who trust Mr Coder for cutting-edge web solutions.
                </p>
              </div>

              {/* Terminal */}
              <div className="glass-dark border border-cyan-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-400">mrcoder@terminal:~</span>
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center glass-dark p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center glass-dark p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">98%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
                <div className="text-center glass-dark p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 glass-dark border border-cyan-500/30 bg-slate-800/50">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    <Cpu className="h-4 w-4 mr-2" />
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Card className="glass-dark border-cyan-500/30 shadow-2xl backdrop-blur-xl bg-slate-800/30">
                    <CardHeader className="text-center space-y-4">
                      <CardTitle className="text-3xl text-white font-bold">
                        Access <span className="code-text">Developer Hub</span>
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-lg">
                        Continue your development journey with advanced tools and insights
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-gray-200 font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="developer@mrcoder.dev"
                            required
                            className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/30 h-12 text-lg"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-gray-200 font-medium">
                              Password
                            </Label>
                            <Link
                              href="/forgot-password"
                              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              required
                              className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/30 h-12 text-lg pr-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white h-12 text-lg font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Authenticating...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Terminal className="h-5 w-5" />
                              Access Dashboard
                            </div>
                          )}
                        </Button>
                      </form>

                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-cyan-500/30" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-slate-800 text-gray-300 font-medium">Or continue with</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            className="bg-slate-700/30 border-white/20 text-white hover:bg-slate-600/50 hover:border-cyan-400/50 h-12 transition-all duration-300 hover:scale-105"
                          >
                            <Github className="h-5 w-5 mr-2" />
                            GitHub
                          </Button>
                          <Button
                            variant="outline"
                            className="bg-slate-700/30 border-white/20 text-white hover:bg-slate-600/50 hover:border-cyan-400/50 h-12 transition-all duration-300 hover:scale-105"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            Google
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-cyan-500/20 pt-6">
                      <div className="text-center text-gray-300">
                        New to the platform?{" "}
                        <button
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                          onClick={() =>
                            document.querySelector('[value="register"]')?.dispatchEvent(new Event("click"))
                          }
                        >
                          Join the community
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="register">
                  <Card className="glass-dark border-purple-500/30 shadow-2xl backdrop-blur-xl bg-slate-800/30">
                    <CardHeader className="text-center space-y-4">
                      <CardTitle className="text-3xl text-white font-bold">
                        Join{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                          Developer Elite
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-lg">
                        Start building amazing projects with professional development services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-gray-200 font-medium">
                              First name
                            </Label>
                            <Input
                              id="first-name"
                              required
                              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-gray-200 font-medium">
                              Last name
                            </Label>
                            <Input
                              id="last-name"
                              required
                              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 h-12"
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
                            placeholder="developer@mrcoder.dev"
                            required
                            className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-200 font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              required
                              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 h-12 pr-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password" className="text-gray-200 font-medium">
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="confirm-password"
                              type={showConfirmPassword ? "text" : "password"}
                              required
                              className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 h-12 pr-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white h-12 text-lg font-semibold animate-pulse-glow transition-all duration-300 hover:scale-105"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Creating account...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              Create Developer Account
                            </div>
                          )}
                        </Button>
                      </form>

                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-purple-500/30" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-slate-800 text-gray-300 font-medium">Or continue with</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            className="bg-slate-700/30 border-white/20 text-white hover:bg-slate-600/50 hover:border-purple-400/50 h-12 transition-all duration-300 hover:scale-105"
                          >
                            <Github className="h-5 w-5 mr-2" />
                            GitHub
                          </Button>
                          <Button
                            variant="outline"
                            className="bg-slate-700/30 border-white/20 text-white hover:bg-slate-600/50 hover:border-purple-400/50 h-12 transition-all duration-300 hover:scale-105"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            Google
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-purple-500/20 pt-6">
                      <div className="text-center text-gray-300">
                        Already have an account?{" "}
                        <button
                          className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                          onClick={() => document.querySelector('[value="login"]')?.dispatchEvent(new Event("click"))}
                        >
                          Sign in here
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
