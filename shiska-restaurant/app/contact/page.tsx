import ContactForm from "@/components/contact/contact-form"
import LocationInfo from "@/components/contact/location-info"
import FAQ from "@/components/contact/faq"
import Newsletter from "@/components/global/newsletter"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ContactForm />
        <LocationInfo />
      </div>
      <FAQ />
      <Newsletter />
    </main>
  )
}

