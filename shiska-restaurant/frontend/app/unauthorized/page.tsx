import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Unauthorized | Shiska Restaurant",
  description: "You do not have permission to access this page",
}

export default function UnauthorizedPage() {
  return (
    <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="mb-4 text-4xl font-bold">Access Denied</h1>
      <p className="mb-8 text-lg text-muted-foreground">You do not have permission to access this page.</p>
      <div className="flex space-x-4">
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login with Different Account</Button>
        </Link>
      </div>
    </main>
  )
}

