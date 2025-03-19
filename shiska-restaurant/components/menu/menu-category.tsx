"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  dietary?: string[]
}

interface MenuCategoryProps {
  category: string
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For now, we'll use mock data based on the category
    const mockData: Record<string, MenuItem[]> = {
      appetizers: [
        {
          id: "1",
          name: "Mediterranean Mezze Platter",
          description: "A selection of hummus, baba ganoush, tzatziki, olives, and warm pita bread",
          price: 14.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian"],
        },
        {
          id: "2",
          name: "Crispy Calamari",
          description: "Lightly battered and fried calamari served with lemon aioli",
          price: 12.99,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "3",
          name: "Stuffed Mushrooms",
          description: "Mushroom caps filled with herb-infused cream cheese and topped with breadcrumbs",
          price: 10.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian"],
        },
      ],
      "main-courses": [
        {
          id: "4",
          name: "Signature Shiska Kebab",
          description:
            "Marinated lamb and beef skewers grilled to perfection, served with saffron rice and grilled vegetables",
          price: 26.99,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "5",
          name: "Grilled Sea Bass",
          description: "Fresh sea bass grilled with herbs, lemon, and olive oil, served with roasted potatoes",
          price: 28.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Gluten-Free"],
        },
        {
          id: "6",
          name: "Vegetable Tagine",
          description: "Slow-cooked seasonal vegetables in aromatic spices, served with couscous",
          price: 19.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian", "Vegan"],
        },
      ],
      desserts: [
        {
          id: "7",
          name: "Baklava",
          description: "Layers of phyllo pastry filled with chopped nuts and sweetened with honey syrup",
          price: 8.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian"],
        },
        {
          id: "8",
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with a molten center, served with vanilla ice cream",
          price: 9.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian"],
        },
        {
          id: "9",
          name: "Fruit Sorbet",
          description: "Assortment of seasonal fruit sorbets",
          price: 7.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        },
      ],
      drinks: [
        {
          id: "10",
          name: "Signature Cocktail",
          description: "House-made infusion of premium vodka with exotic fruits and herbs",
          price: 12.99,
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: "11",
          name: "Mediterranean Wine Selection",
          description: "Glass of our curated selection from Mediterranean vineyards",
          price: 10.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegan"],
        },
        {
          id: "12",
          name: "Artisanal Mocktail",
          description: "Refreshing blend of fresh juices, herbs, and sparkling water",
          price: 7.99,
          image: "/placeholder.svg?height=200&width=300",
          dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
        },
      ],
    }

    setTimeout(() => {
      setItems(mockData[category] || [])
      setLoading(false)
    }, 500) // Simulate loading
  }, [category])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="h-[300px] animate-pulse">
            <div className="h-40 bg-muted"></div>
            <CardHeader>
              <div className="h-5 w-3/4 bg-muted"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 w-full bg-muted"></div>
              <div className="mt-2 h-4 w-2/3 bg-muted"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id}>
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>${item.price.toFixed(2)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardContent>
          {item.dietary && item.dietary.length > 0 && (
            <CardFooter className="flex flex-wrap gap-1">
              {item.dietary.map((diet) => (
                <span key={diet} className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {diet}
                </span>
              ))}
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}

