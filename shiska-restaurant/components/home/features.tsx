import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Wine, Music, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Exquisite Cuisine",
      description: "Savor our chef's masterful creations, blending traditional flavors with modern techniques.",
    },
    {
      icon: <Wine className="h-10 w-10" />,
      title: "Fine Wines",
      description:
        "Explore our extensive collection of wines, carefully selected to complement your dining experience.",
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "Live Entertainment",
      description: "Enjoy live music and performances that enhance the ambiance of your evening.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Private Events",
      description: "Host your special occasions in our elegant private dining spaces, tailored to your needs.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Shiska</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

