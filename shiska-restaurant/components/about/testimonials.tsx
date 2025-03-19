import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export default function AboutTestimonials() {
  const testimonials = [
    {
      name: "David Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "Shiska has been our go-to restaurant for family celebrations for years. The consistency in quality and service is remarkable.",
      position: "Regular Guest since 2015",
    },
    {
      name: "Maria Gonzalez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "As a food critic, I've dined at restaurants worldwide, and Shiska stands out for its authentic flavors and innovative approach to Mediterranean cuisine.",
      position: "Food Writer",
    },
    {
      name: "James Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "We hosted our company's annual dinner at Shiska, and the team went above and beyond to create a memorable experience for our entire staff.",
      position: "Business Executive",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">What People Say About Us</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardContent className="pt-6">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-muted-foreground" />
                ))}
              </div>
              <p className="text-muted-foreground">"{testimonial.text}"</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

