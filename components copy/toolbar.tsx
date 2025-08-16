"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Copy,
  Trash2,
  Move,
  RotateCcw,
} from "lucide-react"

interface ToolbarProps {
  selectedElement: string | null
  onDeleteElement: (id: string) => void
}

export function Toolbar({ selectedElement, onDeleteElement }: ToolbarProps) {
  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
      {selectedElement ? (
        <>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Underline className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <AlignRight className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Move className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDeleteElement(selectedElement)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </>
      ) : (
        <div className="text-sm text-gray-500">Select an element to see formatting options</div>
      )}
    </div>
  )
}
