import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Leaf, Award, Users } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description:
        "We bring passion to every dish we create, every service we provide, and every interaction with our guests.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description:
        "We are committed to sustainable practices, from sourcing local ingredients to minimizing waste and reducing our environmental impact.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We strive for excellence in all aspects of our restaurant, from the quality of our food to the ambiance and service.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description:
        "We value our role in the community and seek to create a welcoming space for all while supporting local producers and causes.",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Our Core Values</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center pb-2 text-center">
              <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">{value.icon}</div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">{value.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

