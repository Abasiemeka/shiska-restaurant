"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Play } from "lucide-react"

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "1",
      title: "Behind the Scenes: A Day at Shiska",
      thumbnail: "/placeholder.svg?height=300&width=500",
      // In a real app, this would be a real video URL
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      title: "Chef's Special: Cooking Demonstration",
      thumbnail: "/placeholder.svg?height=300&width=500",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "3",
      title: "Shiska Restaurant Tour",
      thumbnail: "/placeholder.svg?height=300&width=500",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section className="mt-12">
      <h3 className="mb-6 text-xl font-bold">Video Gallery</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="cursor-pointer overflow-hidden"
            onClick={() => openVideoModal(video.videoUrl)}
          >
            <CardContent className="p-0">
              <div className="group relative aspect-video w-full">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-white">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium">{video.title}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={closeVideoModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Video</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                src={selectedVideo}
                title="Video player"
                className="h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

