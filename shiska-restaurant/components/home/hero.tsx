import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          opacity: 0.7,
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Welcome to Shiska</h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Experience the finest dining with our exquisite cuisine and elegant atmosphere
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/menu">
            <Button size="lg" variant="default">
              View Menu
            </Button>
          </Link>
          <Link href="/reservations">
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

