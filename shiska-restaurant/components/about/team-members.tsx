import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function TeamMembers() {
  const team = [
    {
      name: "Michael Laurent",
      role: "Executive Chef & Co-Founder",
      bio: "With over 20 years of culinary experience across Europe and the Middle East, Chef Michael brings his passion for Mediterranean cuisine and innovative techniques to every dish at Shiska.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Sophia Khoury",
      role: "Managing Director & Co-Founder",
      bio: "Sophia's background in hospitality management and her Lebanese heritage inform her approach to creating authentic dining experiences that honor tradition while embracing modern sensibilities.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "James Rodriguez",
      role: "Head Sommelier",
      bio: "James has curated our award-winning wine list, focusing on Mediterranean vineyards and boutique producers that perfectly complement our menu.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Amara Patel",
      role: "Pastry Chef",
      bio: "Trained in Paris, Amara combines classical techniques with Middle Eastern flavors to create our signature desserts.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Our Team</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Card key={index}>
            <div className="relative mx-auto mt-6 h-40 w-40 overflow-hidden rounded-full">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardHeader className="text-center">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              {member.social.instagram && (
                <a
                  href={member.social.instagram}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {member.social.facebook && (
                <a
                  href={member.social.facebook}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={`${member.name}'s Facebook`}
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

