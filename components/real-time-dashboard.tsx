"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Globe, Zap, Activity, Server, Database, Cpu, Wifi, Shield } from "lucide-react"

interface Metric {
  label: string
  value: number
  change: number
  icon: any
  color: string
}

export function RealTimeDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: "Active Users", value: 1247, change: 12, icon: Users, color: "text-blue-400" },
    { label: "Projects Deployed", value: 89, change: 8, icon: Globe, color: "text-green-400" },
    { label: "Server Response", value: 98.7, change: 2.1, icon: Server, color: "text-purple-400" },
    { label: "Code Quality", value: 95.2, change: 1.5, icon: Zap, color: "text-yellow-400" },
  ])

  const [systemStats, setSystemStats] = useState({
    cpu: 45,
    memory: 67,
    network: 89,
    security: 99,
  })

  const [realtimeData, setRealtimeData] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: metric.value + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 5,
        })),
      )

      setSystemStats((prev) => ({
        cpu: Math.max(20, Math.min(80, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(70, Math.min(100, prev.network + (Math.random() - 0.5) * 5)),
        security: Math.max(95, Math.min(100, prev.security + (Math.random() - 0.5) * 2)),
      }))

      setRealtimeData((prev) => {
        const newData = [...prev, Math.random() * 100]
        return newData.slice(-20) // Keep last 20 data points
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real-Time <span className="code-text">Analytics</span>
          </h2>
          <p className="text-xl text-gray-300">Live monitoring of our development infrastructure</p>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="glass-dark border-cyan-500/20 group hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color} group-hover:scale-110 transition-transform`} />
                  <div className={`text-right ${metric.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                    <div className="text-sm font-medium">
                      {metric.change >= 0 ? "+" : ""}
                      {metric.change.toFixed(1)}%
                    </div>
                    <TrendingUp className="h-4 w-4 ml-auto" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray-400 text-sm font-medium">{metric.label}</h3>
                  <div className="text-2xl font-bold text-white">
                    {metric.value.toFixed(
                      metric.label.includes("Response") || metric.label.includes("Quality") ? 1 : 0,
                    )}
                    {metric.label.includes("Response") || metric.label.includes("Quality") ? "%" : ""}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Performance */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="glass-dark border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-400" />
                System Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">CPU Usage</span>
                  </div>
                  <span className="text-white font-medium">{systemStats.cpu.toFixed(1)}%</span>
                </div>
                <Progress value={systemStats.cpu} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Memory</span>
                  </div>
                  <span className="text-white font-medium">{systemStats.memory.toFixed(1)}%</span>
                </div>
                <Progress value={systemStats.memory} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-cyan-400" />
                    <span className="text-gray-300">Network</span>
                  </div>
                  <span className="text-white font-medium">{systemStats.network.toFixed(1)}%</span>
                </div>
                <Progress value={systemStats.network} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300">Security</span>
                  </div>
                  <span className="text-white font-medium">{systemStats.security.toFixed(1)}%</span>
                </div>
                <Progress value={systemStats.security} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Real-time Chart */}
          <Card className="glass-dark border-green-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Live Performance Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-end justify-between gap-1">
                {realtimeData.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-green-500 to-cyan-400 rounded-t transition-all duration-500 min-w-[8px]"
                    style={{ height: `${(value / 100) * 100}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">Real-time data updates every 2 seconds</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Indicators */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-dark border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-white font-semibold mb-2">All Systems Operational</h3>
              <p className="text-gray-400 text-sm">99.9% uptime maintained</p>
            </CardContent>
          </Card>

          <Card className="glass-dark border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
              </div>
              <h3 className="text-white font-semibold mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">Lightning fast response times</p>
            </CardContent>
          </Card>

          <Card className="glass-dark border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-400 animate-pulse" />
              </div>
              <h3 className="text-white font-semibold mb-2">Secure Infrastructure</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade security</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
