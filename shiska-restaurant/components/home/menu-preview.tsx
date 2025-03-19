import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MenuPreview() {
  const menuItems = [
    {
      name: "Signature Steak",
      description: "Prime cut beef, seasoned and grilled to perfection, served with roasted vegetables",
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Course",
    },
    {
      name: "Mediterranean Salad",
      description: "Fresh greens, feta cheese, olives, and our house dressing",
      image: "/placeholder.svg?height=300&width=400",
      category: "Appetizer",
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with a molten center, served with vanilla ice cream",
      image: "/placeholder.svg?height=300&width=400",
      category: "Dessert",
    },
    {
      name: "Seafood Paella",
      description: "Traditional Spanish rice dish with an assortment of fresh seafood",
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Course",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Featured Menu Items</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground">{item.category}</div>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/menu">
            <Button size="lg">View Full Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

