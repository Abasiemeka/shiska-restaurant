import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventsCalendar() {
  const date = new Date()

  const upcomingEvents = [
    {
      title: "Wine Tasting Night",
      date: "March 20, 2025",
      description: "Join us for an evening of fine wine tasting with our sommelier",
    },
    {
      title: "Live Jazz Performance",
      date: "March 25, 2025",
      description: "Enjoy the smooth sounds of jazz with dinner",
    },
    {
      title: "Chef's Special Dinner",
      date: "April 5, 2025",
      description: "A five-course meal featuring our chef's signature dishes",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Upcoming Events</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Calendar mode="single" selected={date} className="rounded-md border" />
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link href="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

