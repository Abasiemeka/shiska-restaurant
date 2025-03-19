"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"

interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  image: string
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For now, we'll use mock data
    const mockEvents: Event[] = [
      {
        id: "1",
        title: "Wine Tasting Night",
        description:
          "Join our sommelier for an evening of fine wine tasting featuring selections from Mediterranean vineyards.",
        date: new Date(2025, 2, 20), // March 20, 2025
        time: "7:00 PM - 10:00 PM",
        location: "Main Dining Room",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "2",
        title: "Live Jazz Performance",
        description:
          "Enjoy the smooth sounds of jazz with the renowned Jordan Quartet while savoring our chef's special menu.",
        date: new Date(2025, 2, 25), // March 25, 2025
        time: "8:00 PM - 11:00 PM",
        location: "Lounge Area",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        id: "3",
        title: "Chef's Special Dinner",
        description: "A five-course meal featuring our chef's signature dishes paired with complementary wines.",
        date: new Date(2025, 3, 5), // April 5, 2025
        time: "6:30 PM - 9:30 PM",
        location: "Private Dining Room",
        image: "/placeholder.svg?height=300&width=500",
      },
    ]

    setTimeout(() => {
      setEvents(mockEvents)
      setLoading(false)
    }, 500) // Simulate loading
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="h-48 w-full bg-muted md:h-auto md:w-1/3"></div>
              <div className="flex-1 p-6">
                <div className="h-6 w-3/4 bg-muted"></div>
                <div className="mt-4 h-4 w-full bg-muted"></div>
                <div className="mt-2 h-4 w-full bg-muted"></div>
                <div className="mt-2 h-4 w-2/3 bg-muted"></div>
                <div className="mt-6 flex space-x-4">
                  <div className="h-10 w-24 rounded bg-muted"></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <Card key={event.id}>
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 w-full md:h-auto md:w-1/3">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(event.date, "MMMM d, yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="mb-4 text-sm text-muted-foreground">{event.description}</p>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button>Reserve a Spot</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

