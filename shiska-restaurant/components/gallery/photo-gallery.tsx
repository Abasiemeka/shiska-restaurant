"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PhotoGalleryProps {
  category: string
}

export default function PhotoGallery({ category }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Mock data for different gallery categories
  const galleryImages: Record<string, { src: string; alt: string }[]> = {
    restaurant: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Restaurant Interior" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Dining Area" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Bar Area" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Private Dining Room" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Outdoor Terrace" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Restaurant Entrance" },
    ],
    food: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Signature Dish" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Appetizers" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Main Courses" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Desserts" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Cocktails" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Wine Selection" },
    ],
    events: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Private Party" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Wedding Reception" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Corporate Event" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Wine Tasting" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Live Music Night" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Chef's Table Experience" },
    ],
    pool: [
      { src: "/placeholder.svg?height=400&width=600", alt: "Pool Area" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Pool Bar" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Cabanas" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Poolside Dining" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Sunset by the Pool" },
      { src: "/placeholder.svg?height=400&width=600", alt: "Pool Lounge Area" },
    ],
  }

  const images = galleryImages[category] || []

  const openImageModal = (src: string) => {
    setSelectedImage(src)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-md"
            onClick={() => openImageModal(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-full items-center justify-center">
                <span className="text-lg font-medium text-white">{image.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Gallery Image</DialogTitle>
            <DialogDescription>Click outside to close</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative h-[60vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

