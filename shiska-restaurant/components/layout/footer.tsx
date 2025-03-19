import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Newsletter from "@/components/global/newsletter"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Shiska Restaurant</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Experience the finest dining at Shiska Restaurant, where tradition meets innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic">
              <p className="mb-2 text-sm text-muted-foreground">123 Restaurant Street</p>
              <p className="mb-2 text-sm text-muted-foreground">Culinary City, CC 12345</p>
              <p className="mb-2 text-sm text-muted-foreground">Phone: (123) 456-7890</p>
              <p className="mb-2 text-sm text-muted-foreground">Email: info@shiska.com</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Monday - Thursday: 11am - 10pm</li>
              <li className="text-muted-foreground">Friday - Saturday: 11am - 11pm</li>
              <li className="text-muted-foreground">Sunday: 10am - 9pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Newsletter />
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shiska Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

