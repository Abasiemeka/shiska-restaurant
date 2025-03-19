import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import MenuPreview from "@/components/home/menu-preview"
import EventsCalendar from "@/components/home/events-calendar"
import Testimonials from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <MenuPreview />
      <EventsCalendar />
      <Testimonials />
    </main>
  )
}

