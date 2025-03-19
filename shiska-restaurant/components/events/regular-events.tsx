import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Music, GlassWater, Utensils } from "lucide-react"

export default function RegularEvents() {
  const regularEvents = [
    {
      id: "1",
      title: "Jazz Nights",
      description: "Every Thursday, enjoy live jazz music from local and visiting artists while dining.",
      day: "Thursday",
      time: "7:00 PM - 10:00 PM",
      icon: <Music className="h-5 w-5" />,
    },
    {
      id: "2",
      title: "Wine Wednesdays",
      description: "Half-price on selected wines by the glass and special wine flight tastings.",
      day: "Wednesday",
      time: "5:00 PM - 10:00 PM",
      icon: <GlassWater className="h-5 w-5" />,
    },
    {
      id: "3",
      title: "Sunday Brunch",
      description: "Special brunch menu featuring Mediterranean favorites and bottomless mimosas.",
      day: "Sunday",
      time: "10:00 AM - 2:00 PM",
      icon: <Utensils className="h-5 w-5" />,
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Regular Events</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {regularEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <div className="text-primary">{event.icon}</div>
              </div>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Every {event.day}, {event.time}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

