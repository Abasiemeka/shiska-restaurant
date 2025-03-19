import LoginForm from "@/components/auth/login-form"

export const metadata = {
  title: "Login | Shiska Restaurant",
  description: "Login to your Shiska Restaurant account",
}

export default function LoginPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <LoginForm />
    </main>
  )
}

