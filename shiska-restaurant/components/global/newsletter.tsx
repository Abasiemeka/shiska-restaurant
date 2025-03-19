"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    })

    setEmail("")
  }

  return (
    <div className="rounded-lg bg-muted p-6">
      <h3 className="mb-2 text-lg font-bold">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Stay updated with our latest events, special offers, and culinary news.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}

