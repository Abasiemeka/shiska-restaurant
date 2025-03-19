import JobListings from "@/components/careers/job-listings"
import ApplicationForm from "@/components/careers/application-form"
import ApplicationProcess from "@/components/careers/application-process"
import Benefits from "@/components/careers/benefits"

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Careers at Shiska</h1>
      <JobListings />
      <ApplicationForm />
      <ApplicationProcess />
      <Benefits />
    </main>
  )
}

