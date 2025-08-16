"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Trash2 } from "lucide-react"

interface PropertiesPanelProps {
  selectedElement: string | null
  elements: any[]
  onUpdateElement: (id: string, updates: any) => void
}

export function PropertiesPanel({ selectedElement, elements, onUpdateElement }: PropertiesPanelProps) {
  const element = elements.find((el) => el.id === selectedElement)

  if (!selectedElement || !element) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-4">
        <div className="text-center text-gray-500 mt-8">
          <p>Select an element to edit its properties</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 capitalize">{element.type} Properties</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              /* Delete element logic would go here */
            }}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Content Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Content</Label>
            {element.type === "text" || element.type === "heading" ? (
              <Textarea
                value={element.content}
                onChange={(e) => onUpdateElement(element.id, { content: e.target.value })}
                placeholder="Enter text content"
                rows={3}
              />
            ) : element.type === "button" ? (
              <Input
                value={element.content}
                onChange={(e) => onUpdateElement(element.id, { content: e.target.value })}
                placeholder="Button text"
              />
            ) : element.type === "image" ? (
              <Input
                value={element.content}
                onChange={(e) => onUpdateElement(element.id, { content: e.target.value })}
                placeholder="Image URL"
              />
            ) : null}
          </div>

          <Separator />

          {/* Position & Size Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Position & Size</Label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs text-gray-500">X Position</Label>
                <Input
                  type="number"
                  value={element.x}
                  onChange={(e) => onUpdateElement(element.id, { x: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Y Position</Label>
                <Input
                  type="number"
                  value={element.y}
                  onChange={(e) => onUpdateElement(element.id, { y: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Width</Label>
                <Input
                  type="number"
                  value={element.width}
                  onChange={(e) => onUpdateElement(element.id, { width: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Height</Label>
                <Input
                  type="number"
                  value={element.height}
                  onChange={(e) => onUpdateElement(element.id, { height: Number.parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Style Section */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Style</Label>
            <div className="space-y-2">
              <div>
                <Label className="text-xs text-gray-500">Background Color</Label>
                <Input type="color" defaultValue="#ffffff" className="h-8" />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Text Color</Label>
                <Input type="color" defaultValue="#000000" className="h-8" />
              </div>
              <div>
                <Label className="text-xs text-gray-500">Border Radius</Label>
                <Input type="number" placeholder="0" />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
