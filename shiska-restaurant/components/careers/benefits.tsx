import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Clock, GraduationCap, DollarSign, Utensils, Award } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance for full-time employees.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "We offer flexible scheduling to help maintain a healthy work-life balance.",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Professional Development",
      description: "Ongoing training and opportunities for career advancement within our organization.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Compensation",
      description: "We offer competitive wages and performance-based bonuses.",
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Employee Meals",
      description: "Enjoy complimentary meals during your shifts.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition Programs",
      description: "Employee of the month and other recognition programs to celebrate excellence.",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Benefits of Working at Shiska</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="rounded-full bg-primary/10 p-2 text-primary">{benefit.icon}</div>
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{benefit.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

