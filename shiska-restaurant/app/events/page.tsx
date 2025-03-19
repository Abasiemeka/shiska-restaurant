import UpcomingEvents from "@/components/events/upcoming-events"
import RegularEvents from "@/components/events/regular-events"
import PrivateBooking from "@/components/events/private-booking"
import EventGallery from "@/components/events/event-gallery"

export default function EventsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Events at Shiska</h1>
      <UpcomingEvents />
      <RegularEvents />
      <PrivateBooking />
      <EventGallery />
    </main>
  )
}

