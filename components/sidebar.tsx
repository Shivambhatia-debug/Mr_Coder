"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Type,
  ImageIcon,
  Square,
  Circle,
  MousePointer,
  Layout,
  Video,
  Music,
  ShoppingCart,
  Calendar,
  Map,
  Mail,
} from "lucide-react"

interface SidebarProps {
  onAddElement: (elementType: string) => void
}

export function Sidebar({ onAddElement }: SidebarProps) {
  const elements = [
    { icon: Type, label: "Text", type: "text" },
    { icon: Type, label: "Heading", type: "heading" },
    { icon: ImageIcon, label: "Image", type: "image" },
    { icon: MousePointer, label: "Button", type: "button" },
    { icon: Square, label: "Box", type: "box" },
    { icon: Circle, label: "Shape", type: "shape" },
    { icon: Layout, label: "Container", type: "container" },
    { icon: Video, label: "Video", type: "video" },
    { icon: Music, label: "Audio", type: "audio" },
    { icon: ShoppingCart, label: "Store", type: "store" },
    { icon: Calendar, label: "Events", type: "events" },
    { icon: Map, label: "Map", type: "map" },
    { icon: Mail, label: "Contact", type: "contact" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Add Elements</h3>
        <p className="text-sm text-gray-500 mt-1">Drag elements to your page</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {elements.map((element) => (
            <Button
              key={element.type}
              variant="ghost"
              className="w-full justify-start h-12 text-left"
              onClick={() => onAddElement(element.type)}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", element.type)
              }}
            >
              <element.icon className="h-5 w-5 mr-3 text-gray-600" />
              <span className="text-gray-700">{element.label}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
