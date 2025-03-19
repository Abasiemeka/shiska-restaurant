import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OurStory() {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Our Story</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Shiska Restaurant Founding"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">From Humble Beginnings</h3>
              <p className="text-muted-foreground">
                Founded in 2010 by Chef Michael Laurent and restaurateur Sophia Khoury, Shiska began as a small
                Mediterranean bistro with a vision to bring authentic flavors and culinary traditions to the heart of
                the city.
              </p>
              <p className="text-muted-foreground">
                Our name "Shiska" draws inspiration from the traditional cooking method of skewering and grilling meats
                and vegetables, a technique that remains at the heart of our culinary approach.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've grown from our original 30-seat restaurant to our current location, a beautifully
                restored historic building that houses our main dining room, private event spaces, and outdoor terrace.
              </p>
              <p className="text-muted-foreground">
                Throughout our journey, we've remained committed to our founding principles: sourcing the finest
                ingredients, honoring traditional techniques while embracing innovation, and creating memorable dining
                experiences for our guests.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

