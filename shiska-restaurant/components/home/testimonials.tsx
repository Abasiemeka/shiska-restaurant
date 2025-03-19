import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "The dining experience at Shiska was exceptional. The food was exquisite, and the service was impeccable. I can't wait to return!",
    },
    {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "From the moment we walked in, we were treated like royalty. The atmosphere is elegant, and the cuisine is world-class.",
    },
    {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      text: "We celebrated our anniversary at Shiska, and it was a memorable evening. The attention to detail in every dish was remarkable.",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Guests Say</h2>
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
                  <div className="text-sm font-medium">{testimonial.name}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

