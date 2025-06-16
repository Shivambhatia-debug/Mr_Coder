"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

interface CanvasElement {
  id: string
  type: string
  x: number
  y: number
  width: number
  height: number
  content: string
}

interface CanvasProps {
  elements: CanvasElement[]
  selectedElement: string | null
  onSelectElement: (id: string | null) => void
  onUpdateElement: (id: string, updates: any) => void
}

export function Canvas({ elements, selectedElement, onSelectElement, onUpdateElement }: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const elementType = e.dataTransfer.getData("text/plain")
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // This would trigger adding element at specific position
      console.log(`Drop ${elementType} at ${x}, ${y}`)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const renderElement = (element: CanvasElement) => {
    const isSelected = selectedElement === element.id

    const baseClasses = `absolute border-2 cursor-pointer transition-all ${
      isSelected ? "border-blue-500 shadow-lg" : "border-transparent hover:border-gray-300"
    }`

    const style = {
      left: element.x,
      top: element.y,
      width: element.width,
      height: element.height,
    }

    switch (element.type) {
      case "text":
        return (
          <div
            key={element.id}
            className={`${baseClasses} p-2 bg-white`}
            style={style}
            onClick={() => onSelectElement(element.id)}
          >
            <p className="text-sm text-gray-700">{element.content}</p>
          </div>
        )

      case "heading":
        return (
          <div
            key={element.id}
            className={`${baseClasses} p-2 bg-white`}
            style={style}
            onClick={() => onSelectElement(element.id)}
          >
            <h2 className="text-2xl font-bold text-gray-900">{element.content}</h2>
          </div>
        )

      case "button":
        return (
          <div key={element.id} className={baseClasses} style={style} onClick={() => onSelectElement(element.id)}>
            <Button className="w-full h-full">{element.content}</Button>
          </div>
        )

      case "image":
        return (
          <div key={element.id} className={baseClasses} style={style} onClick={() => onSelectElement(element.id)}>
            <img
              src={element.content || "/placeholder.svg"}
              alt="Element"
              className="w-full h-full object-cover rounded"
            />
          </div>
        )

      case "box":
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-gray-100 rounded`}
            style={style}
            onClick={() => onSelectElement(element.id)}
          ></div>
        )

      default:
        return (
          <div
            key={element.id}
            className={`${baseClasses} bg-white p-2 rounded`}
            style={style}
            onClick={() => onSelectElement(element.id)}
          >
            <span className="text-xs text-gray-500">{element.type}</span>
          </div>
        )
    }
  }

  return (
    <div className="flex-1 bg-gray-100 overflow-auto">
      <div className="min-h-full p-8">
        <div
          ref={canvasRef}
          className="bg-white min-h-[800px] w-full max-w-4xl mx-auto relative shadow-sm border border-gray-200 rounded-lg"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onSelectElement(null)
            }
          }}
        >
          {elements.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="text-lg mb-2">Start building your website</p>
                <p className="text-sm">Drag elements from the sidebar to get started</p>
              </div>
            </div>
          )}

          {elements.map(renderElement)}
        </div>
      </div>
    </div>
  )
}
