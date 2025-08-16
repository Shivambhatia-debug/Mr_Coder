"use client"

import { CheckCircle, Circle, Clock, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Stage {
  name: string
  status: "completed" | "in-progress" | "pending"
  date: string | null
}

interface Project {
  name: string
  status: string
  progress: number
  stages: Stage[]
}

interface ProjectStatusProps {
  project: Project
  detailed?: boolean
}

export function ProjectStatus({ project, detailed = false }: ProjectStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "pending":
        return <Circle className="h-5 w-5 text-slate-300" />
      default:
        return <Circle className="h-5 w-5 text-slate-300" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "pending":
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Overall Progress: {project.progress}%
          </p>
        </div>
        <Badge className={getStatusColor(project.status)}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </Badge>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Progress</span>
          <span className="font-medium text-slate-900 dark:text-white">
            {project.progress}%
          </span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>

      {/* Stages */}
      <div className="space-y-4">
        <h4 className="font-medium text-slate-900 dark:text-white">
          Project Stages
        </h4>
        <div className="space-y-3">
          {project.stages.map((stage, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                {getStatusIcon(stage.status)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {stage.name}
                  </p>
                  {stage.date && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(stage.date).toLocaleDateString()}
                    </span>
                  )}
                </div>
                {detailed && stage.status === "in-progress" && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    Currently working on this stage
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed View Additional Info */}
      {detailed && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Card className="bg-slate-50 dark:bg-slate-800 border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Estimated Completion
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                March 15, 2024
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 dark:bg-slate-800 border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Current Blockers
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Waiting for client feedback on design
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 