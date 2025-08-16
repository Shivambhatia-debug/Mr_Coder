"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectStatus } from "@/components/dashboard/project-status"
import { FilesSection } from "@/components/dashboard/files-section"
import { PaymentDetails } from "@/components/dashboard/payment-details"
import { MessagingSection } from "@/components/dashboard/messaging-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FolderOpen, 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  BarChart3,
  Settings,
  Bell,
  User
} from "lucide-react"
import { UpcomingMeetings } from "@/components/dashboard/upcoming-meetings"
import { Calendar as CalendarUI } from "@/components/ui/calendar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - in real app this would come from API
  const projectData = {
    name: "E-commerce Website",
    status: "in-progress" as "in-progress",
    progress: 65,
    stages: [
      { name: "Requirements Received", status: "completed" as "completed", date: "2024-01-15" },
      { name: "Designing", status: "completed" as "completed", date: "2024-01-25" },
      { name: "Development", status: "in-progress" as "in-progress", date: "2024-02-01" },
      { name: "Testing", status: "pending" as "pending", date: null },
      { name: "Deployed", status: "pending" as "pending", date: null }
    ]
  }

  const paymentData = {
    totalCost: 5000,
    paidAmount: 3000,
    remainingBalance: 2000,
    currency: "USD",
    nextPayment: "2024-02-15"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Projects</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">1</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Spent</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$3,000</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <CreditCard className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Messages</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Files Uploaded</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">8</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <FolderOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white dark:bg-slate-800 p-1 rounded-lg shadow-lg">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="project" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Project
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              Files
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Project Status
                  </CardTitle>
                  <CardDescription>
                    Current progress of your e-commerce website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectStatus project={projectData} />
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Summary
                  </CardTitle>
                  <CardDescription>
                    Your payment status and upcoming dues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentDetails payment={paymentData} compact />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Recent Messages
                  </CardTitle>
                  <CardDescription>
                    Latest communication with your development team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MessagingSection />
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Meetings
                  </CardTitle>
                  <CardDescription>
                    Scheduled calls and project milestones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingMeetings />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="project" className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Track the progress of your e-commerce website development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectStatus project={projectData} detailed />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files" className="space-y-6">
            <FilesSection />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <PaymentDetails payment={paymentData} />
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <MessagingSection />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Project Calendar</h2>
              <CalendarUI
                events={[
                  { date: new Date(2025, 5, 10), type: "meeting", label: "Design Call", details: "Zoom at 10:00 AM" },
                  { date: new Date(2025, 5, 15), type: "deadline", label: "Payment Due", details: "Final payment for phase 1" },
                  { date: new Date(2025, 5, 18), type: "review", label: "UI Review", details: "Review with client" },
                  { date: new Date(2025, 5, 22), type: "meeting", label: "Sprint Planning", details: "Team sync" },
                  { date: new Date(2025, 5, 25), type: "deadline", label: "Launch Deadline", details: "Go-live!" }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 