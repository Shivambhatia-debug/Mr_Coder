"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Menu, X, Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-dark" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Code2 className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white code-text">Mr Coder</span>
              <div className="flex items-center gap-1 text-xs text-cyan-400">
                <Zap className="h-3 w-3" />
                <span>Currently available</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors relative group py-2">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#works" className="text-gray-300 hover:text-white transition-colors relative group py-2">
              Works
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors relative group py-2">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors relative group py-2">
              Contact
            </Link>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/10 border border-white/20"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 animate-pulse-glow"
              asChild
            >
              <Link href="/start-project">Start a Sprint</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 glass-dark rounded-lg mt-2 animate-fade-in-up">
            <nav className="flex flex-col gap-4 px-4">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors py-2">
                Services
              </Link>
              <Link href="#works" className="text-gray-300 hover:text-white transition-colors py-2">
                Works
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
                  asChild
                >
                  <Link href="/start-project">Start a Sprint</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
