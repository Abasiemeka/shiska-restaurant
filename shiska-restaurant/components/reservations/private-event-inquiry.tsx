"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function PrivateEventInquiry() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    details: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      toast({
        title: "Missing Information",
        description: "Please select a date for your event.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the event inquiry data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Inquiry Submitted!",
      description: "We'll contact you shortly to discuss your private event.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guests: "",
      details: "",
    })
    setDate(undefined)
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h2 className="mb-6 text-2xl font-bold">Private Event Inquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type</Label>
          <Select value={formData.eventType} onValueChange={(value) => handleSelectChange("eventType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="wedding">Wedding Reception</SelectItem>
              <SelectItem value="birthday">Birthday Celebration</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-20">1-20 guests</SelectItem>
              <SelectItem value="21-50">21-50 guests</SelectItem>
              <SelectItem value="51-100">51-100 guests</SelectItem>
              <SelectItem value="100+">100+ guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Event Details</Label>
          <Textarea
            id="details"
            name="details"
            placeholder="Please provide any additional details about your event, including time, catering preferences, etc."
            rows={4}
            value={formData.details}
            onChange={handleInputChange}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Inquiry
        </Button>
      </form>
    </div>
  )
}

