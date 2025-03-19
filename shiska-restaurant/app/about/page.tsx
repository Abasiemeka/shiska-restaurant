import OurStory from "@/components/about/our-story"
import TeamMembers from "@/components/about/team-members"
import CoreValues from "@/components/about/core-values"
import AboutTestimonials from "@/components/about/testimonials"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">About Shiska</h1>
      <OurStory />
      <TeamMembers />
      <CoreValues />
      <AboutTestimonials />
    </main>
  )
}

