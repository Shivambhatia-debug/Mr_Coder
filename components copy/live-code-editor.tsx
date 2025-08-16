"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Share, Code2, Eye, Zap } from "lucide-react"

export function LiveCodeEditor() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coder Gali Demo</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: white;
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .btn {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.1em;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .btn:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Welcome to Coder Gali</h1>
        <p style="color: white; font-size: 1.2em; margin-bottom: 30px;">
            Building the future, one line of code at a time
        </p>
        <button class="btn" onclick="alert('Hello from Coder Gali! 🔥')">
            Click Me!
        </button>
    </div>
</body>
</html>`)

  const [cssCode, setCssCode] = useState(`/* Coder Gali Advanced Styles */
.futuristic-card {
  background: linear-gradient(135deg, 
    rgba(6, 182, 212, 0.1) 0%, 
    rgba(139, 92, 246, 0.1) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.futuristic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(6, 182, 212, 0.2), 
    transparent);
  transition: left 0.5s;
}

.futuristic-card:hover::before {
  left: 100%;
}

.neon-text {
  color: #06b6d4;
  text-shadow: 
    0 0 5px #06b6d4,
    0 0 10px #06b6d4,
    0 0 15px #06b6d4;
  animation: neon-flicker 2s infinite alternate;
}

@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}`)

  const [jsCode, setJsCode] = useState(`// Coder Gali Interactive JavaScript
class CoderGaliApp {
  constructor() {
    this.init();
  }

  init() {
    this.createParticles();
    this.setupInteractions();
    console.log('🚀 Coder Gali App Initialized!');
  }

  createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.globalAlpha = 0.6;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }

  setupInteractions() {
    document.addEventListener('click', (e) => {
      this.createRipple(e.clientX, e.clientY);
    });
  }

  createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.background = 'radial-gradient(circle, #06b6d4, transparent)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }
}

// Initialize the app
new CoderGaliApp();`)

  const [activeTab, setActiveTab] = useState("preview")
  const [previewContent, setPreviewContent] = useState("")

  useEffect(() => {
    const combinedCode = htmlCode
      .replace("</head>", `<style>${cssCode}</style></head>`)
      .replace("</body>", `<script>${jsCode}</script></body>`)
    setPreviewContent(combinedCode)
  }, [htmlCode, cssCode, jsCode])

  const runCode = () => {
    setActiveTab("preview")
  }

  const downloadCode = () => {
    const blob = new Blob([previewContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "mrcoder-demo.html"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live <span className="code-text">Code Editor</span>
          </h2>
          <p className="text-xl text-gray-300">Experience our development process in real-time</p>
        </div>

        <Card className="glass-dark border-cyan-500/30 overflow-hidden">
          <CardHeader className="border-b border-cyan-500/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Code2 className="h-5 w-5 text-cyan-400" />
                Interactive Code Playground
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  onClick={runCode}
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Run
                </Button>
                <Button
                  onClick={downloadCode}
                  variant="outline"
                  className="border-cyan-500/30 text-white hover:bg-cyan-500/10"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="border-purple-500/30 text-white hover:bg-purple-500/10">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start bg-slate-800/50 border-b border-cyan-500/20 rounded-none">
                <TabsTrigger
                  value="html"
                  className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400"
                >
                  HTML
                </TabsTrigger>
                <TabsTrigger
                  value="css"
                  className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
                >
                  CSS
                </TabsTrigger>
                <TabsTrigger
                  value="js"
                  className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400"
                >
                  JavaScript
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-2 h-[600px]">
                <div className="border-r border-cyan-500/20">
                  <TabsContent value="html" className="h-full m-0">
                    <textarea
                      value={htmlCode}
                      onChange={(e) => setHtmlCode(e.target.value)}
                      className="w-full h-full bg-slate-900 text-gray-300 p-4 font-mono text-sm resize-none border-0 focus:outline-none"
                      placeholder="Enter HTML code..."
                    />
                  </TabsContent>

                  <TabsContent value="css" className="h-full m-0">
                    <textarea
                      value={cssCode}
                      onChange={(e) => setCssCode(e.target.value)}
                      className="w-full h-full bg-slate-900 text-gray-300 p-4 font-mono text-sm resize-none border-0 focus:outline-none"
                      placeholder="Enter CSS code..."
                    />
                  </TabsContent>

                  <TabsContent value="js" className="h-full m-0">
                    <textarea
                      value={jsCode}
                      onChange={(e) => setJsCode(e.target.value)}
                      className="w-full h-full bg-slate-900 text-gray-300 p-4 font-mono text-sm resize-none border-0 focus:outline-none"
                      placeholder="Enter JavaScript code..."
                    />
                  </TabsContent>

                  <TabsContent value="preview" className="h-full m-0 lg:hidden">
                    <iframe srcDoc={previewContent} className="w-full h-full border-0" title="Code Preview" />
                  </TabsContent>
                </div>

                <div className="hidden lg:block">
                  <div className="h-full bg-white">
                    <div className="flex items-center justify-between p-3 bg-slate-800 border-b border-cyan-500/20">
                      <span className="text-white text-sm font-medium">Live Preview</span>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <iframe
                      srcDoc={previewContent}
                      className="w-full h-[calc(100%-48px)] border-0"
                      title="Code Preview"
                    />
                  </div>
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            This is how we build your projects - with live collaboration and real-time previews
          </p>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white"
            asChild
          >
            <a href="/start-project">
              <Zap className="h-4 w-4 mr-2" />
              Start Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
