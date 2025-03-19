import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function JobListings() {
  const jobs = [
    {
      title: "Executive Chef",
      department: "Culinary",
      location: "Main Branch",
      type: "Full-time",
      description:
        "We are seeking an experienced Executive Chef to lead our culinary team. The ideal candidate will have a passion for creating innovative dishes and managing kitchen operations.",
      requirements: [
        "Minimum 5 years of experience in a similar role",
        "Culinary degree or equivalent",
        "Strong leadership and team management skills",
        "Creativity and passion for food",
      ],
    },
    {
      title: "Restaurant Manager",
      department: "Operations",
      location: "Main Branch",
      type: "Full-time",
      description:
        "We are looking for a Restaurant Manager to oversee daily operations, ensure customer satisfaction, and manage staff performance.",
      requirements: [
        "Minimum 3 years of restaurant management experience",
        "Strong leadership and organizational skills",
        "Customer service oriented",
        "Knowledge of restaurant operations and procedures",
      ],
    },
    {
      title: "Sommelier",
      department: "Service",
      location: "Main Branch",
      type: "Full-time",
      description:
        "Join our team as a Sommelier to curate our wine selection and enhance our guests' dining experience with expert wine pairings.",
      requirements: [
        "Certified Sommelier qualification",
        "Extensive knowledge of wines and food pairings",
        "Excellent communication skills",
        "Previous experience in fine dining establishments",
      ],
    },
    {
      title: "Server",
      department: "Service",
      location: "Main Branch",
      type: "Full-time/Part-time",
      description:
        "We are hiring servers to provide exceptional service to our guests, take orders, and ensure a memorable dining experience.",
      requirements: [
        "Previous serving experience preferred",
        "Knowledge of food and beverages",
        "Excellent communication and interpersonal skills",
        "Ability to work in a fast-paced environment",
      ],
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Current Openings</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.department} | {job.location}
                  </CardDescription>
                </div>
                <Badge>{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{job.description}</p>
              <div>
                <h4 className="mb-2 font-medium">Requirements:</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="#application-form">
                <Button>Apply Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

