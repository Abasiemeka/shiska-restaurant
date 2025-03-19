"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstagramFeed() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from Instagram API
    // For now, we'll use mock data
    const mockPosts = Array.from({ length: 6 }, (_, i) => ({
      id: `post-${i + 1}`,
      image: `/placeholder.svg?height=300&width=300`,
      likes: Math.floor(Math.random() * 500) + 100,
      comments: Math.floor(Math.random() * 50) + 5,
      caption: "Experience the flavors of Shiska Restaurant #food #restaurant #dining",
      url: "https://instagram.com",
    }))

    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 500) // Simulate loading
  }, [])

  if (loading) {
    return (
      <section className="mt-12">
        <h3 className="mb-6 text-xl font-bold">Instagram Feed</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-0">
                <div className="aspect-square w-full bg-muted"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold">Instagram Feed</h3>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <Instagram className="mr-1 h-4 w-4" />
          Follow us @shiskarestaurant
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {posts.map((post) => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="group relative aspect-square w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="Instagram post"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                    <div className="flex items-center space-x-4 text-white">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" asChild>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            View More on Instagram
          </a>
        </Button>
      </div>
    </section>
  )
}

