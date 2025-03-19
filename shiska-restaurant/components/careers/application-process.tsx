import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Users, Calendar } from "lucide-react"

export default function ApplicationProcess() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Submit Application",
      description: "Fill out our online application form and upload your resume and cover letter.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Application Review",
      description: "Our hiring team will review your application and qualifications.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Interview Process",
      description:
        "Selected candidates will be invited for interviews, which may include multiple rounds depending on the position.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Onboarding",
      description: "Successful candidates will receive an offer and begin the onboarding process.",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Application Process</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center pb-2 text-center">
              <div className="mb-2 rounded-full bg-primary/10 p-2 text-primary">{step.icon}</div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">{step.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

