import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AccessibilityMenu from "@/components/ui/accessibility-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shiska Restaurant",
  description: "Experience the finest dining at Shiska Restaurant",
  keywords: "restaurant, mediterranean, dining, food, events, reservations",
  authors: [{ name: "Shiska Restaurant" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiska-restaurant.com",
    title: "Shiska Restaurant",
    description: "Experience the finest dining at Shiska Restaurant",
    siteName: "Shiska Restaurant",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              <AccessibilityMenu />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

