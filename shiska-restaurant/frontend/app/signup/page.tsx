import SignupForm from "@/components/auth/signup-form"

export const metadata = {
  title: "Sign Up | Shiska Restaurant",
  description: "Create a new account at Shiska Restaurant",
}

export default function SignupPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <SignupForm />
    </main>
  )
}

