import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function LocationInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="aspect-video overflow-hidden rounded-md">
          {/* In a real app, this would be a Google Maps embed */}
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <MapPin className="h-12 w-12 text-muted-foreground" />
            <span className="sr-only">Map location</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="mr-2 h-5 w-5 text-primary" />
            <div>
              <p>123 Restaurant Street</p>
              <p>Culinary City, CC 12345</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            <a href="tel:+11234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="mr-2 h-5 w-5 text-primary" />
            <a href="mailto:info@shiska.com" className="hover:underline">
              info@shiska.com
            </a>
          </div>

          <div className="flex items-start">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            <div>
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 11pm</p>
              <p>Sunday: 10am - 9pm</p>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-muted p-4 text-sm">
          <p className="font-medium">Getting Here:</p>
          <p className="mt-1 text-muted-foreground">
            We're located in the heart of downtown, just two blocks from Central Station. Street parking is available,
            and there's a public parking garage one block away.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

