"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Users } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function PrivateBooking() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    eventType: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your backend
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
      guests: "",
      eventType: "",
      message: "",
    })
    setDate(undefined)
  }

  const privateSpaces = [
    {
      id: "1",
      name: "VIP Dining Room",
      capacity: "Up to 20 guests",
      description: "An elegant private dining room perfect for intimate gatherings and celebrations.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "2",
      name: "Terrace Garden",
      capacity: "Up to 50 guests",
      description: "A beautiful outdoor space with views of our garden, ideal for cocktail parties and receptions.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "3",
      name: "Grand Hall",
      capacity: "Up to 100 guests",
      description: "Our largest space, perfect for corporate events, weddings, and large celebrations.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Private Event Booking</h2>

      <Tabs defaultValue="spaces">
        <TabsList className="mb-6">
          <TabsTrigger value="spaces">Our Spaces</TabsTrigger>
          <TabsTrigger value="inquiry">Make an Inquiry</TabsTrigger>
        </TabsList>

        <TabsContent value="spaces">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {privateSpaces.map((space) => (
              <Card key={space.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={space.image || "/placeholder.svg"} alt={space.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-lg font-semibold">{space.name}</h3>
                  <p className="mb-2 flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {space.capacity}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">{space.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => document.querySelector('[data-value="inquiry"]')?.click()}
                  >
                    Inquire About This Space
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inquiry">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
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
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      placeholder="e.g., Birthday, Corporate Dinner, Wedding"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your event, any special requirements, or preferred space"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

