import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Wheat, AlertCircle } from "lucide-react"

export default function DietaryInfo() {
  const dietaryInfo = [
    {
      icon: <Leaf className="h-5 w-5" />,
      label: "Vegetarian & Vegan Options",
      description: "We offer a variety of vegetarian and vegan dishes. Look for the (V) symbol on our menu.",
    },
    {
      icon: <Wheat className="h-5 w-5" />,
      label: "Gluten-Free Options",
      description: "Many of our dishes can be prepared gluten-free. Look for the (GF) symbol or ask your server.",
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      label: "Allergen Information",
      description:
        "Please inform your server of any allergies or dietary restrictions. We can provide detailed allergen information for all our dishes.",
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold">Dietary Information</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {dietaryInfo.map((info, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <div className="rounded-full bg-primary/10 p-1 text-primary">{info.icon}</div>
              <CardTitle className="text-base">{info.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg border p-4 text-sm">
        <p className="font-medium">Note:</p>
        <p className="mt-1 text-muted-foreground">
          While we take every precaution to accommodate dietary restrictions, our kitchen does handle common allergens
          including nuts, gluten, dairy, eggs, and seafood. Cross-contamination is possible.
        </p>
      </div>
    </section>
  )
}

