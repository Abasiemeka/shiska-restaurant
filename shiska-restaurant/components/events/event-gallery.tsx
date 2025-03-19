"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const eventCategories = {
    music: [
      { id: "m1", src: "/placeholder.svg?height=300&width=400", alt: "Jazz Night Performance" },
      { id: "m2", src: "/placeholder.svg?height=300&width=400", alt: "Live Band" },
      { id: "m3", src: "/placeholder.svg?height=300&width=400", alt: "Piano Recital" },
      { id: "m4", src: "/placeholder.svg?height=300&width=400", alt: "String Quartet" },
    ],
    dining: [
      { id: "d1", src: "/placeholder.svg?height=300&width=400", alt: "Wine Tasting Event" },
      { id: "d2", src: "/placeholder.svg?height=300&width=400", alt: "Chef's Table Experience" },
      { id: "d3", src: "/placeholder.svg?height=300&width=400", alt: "Gourmet Dinner" },
      { id: "d4", src: "/placeholder.svg?height=300&width=400", alt: "Food and Wine Pairing" },
    ],
    private: [
      { id: "p1", src: "/placeholder.svg?height=300&width=400", alt: "Wedding Reception" },
      { id: "p2", src: "/placeholder.svg?height=300&width=400", alt: "Corporate Event" },
      { id: "p3", src: "/placeholder.svg?height=300&width=400", alt: "Birthday Celebration" },
      { id: "p4", src: "/placeholder.svg?height=300&width=400", alt: "Anniversary Party" },
    ],
  }

  const openImageModal = (src: string) => {
    setSelectedImage(src)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">Event Gallery</h2>

      <Tabs defaultValue="music">
        <TabsList className="mb-6">
          <TabsTrigger value="music">Music Events</TabsTrigger>
          <TabsTrigger value="dining">Dining Events</TabsTrigger>
          <TabsTrigger value="private">Private Events</TabsTrigger>
        </TabsList>

        {Object.entries(eventCategories).map(([category, images]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {images.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openImageModal(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Event Photo</DialogTitle>
            <DialogDescription>Click outside to close</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative h-[60vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Event photo" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

