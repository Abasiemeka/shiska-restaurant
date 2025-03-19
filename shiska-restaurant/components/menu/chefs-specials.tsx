import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat } from "lucide-react"

export default function ChefsSpecials() {
  const specials = [
    {
      id: "special1",
      name: "Chef's Signature Lamb Shank",
      description:
        "Slow-cooked lamb shank in a rich red wine and rosemary sauce, served with creamy mashed potatoes and seasonal vegetables",
      price: 32.99,
      image: "/placeholder.svg?height=300&width=500",
      chef: "Executive Chef Michael Laurent",
    },
    {
      id: "special2",
      name: "Seafood Paella",
      description: "Traditional Spanish rice dish with an assortment of fresh seafood, saffron, and aromatic spices",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=500",
      chef: "Sous Chef Isabella Rodriguez",
    },
  ]

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center">
        <ChefHat className="mr-2 h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Chef's Specials</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {specials.map((special) => (
          <Card key={special.id} className="overflow-hidden">
            <div className="relative h-56 w-full">
              <Badge className="absolute right-2 top-2 z-10">Special</Badge>
              <Image src={special.image || "/placeholder.svg"} alt={special.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{special.name}</CardTitle>
              <CardDescription>${special.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{special.description}</p>
              <p className="text-xs font-medium text-primary">Created by: {special.chef}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

