"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accessibility } from "lucide-react"

export default function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50">
          <Accessibility className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Accessibility options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={increaseFontSize}>Increase Font Size</DropdownMenuItem>
        <DropdownMenuItem onClick={decreaseFontSize}>Decrease Font Size</DropdownMenuItem>
        <DropdownMenuItem onClick={resetFontSize}>Reset Font Size</DropdownMenuItem>
        <DropdownMenuItem onClick={toggleHighContrast}>
          {highContrast ? "Disable" : "Enable"} High Contrast
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

