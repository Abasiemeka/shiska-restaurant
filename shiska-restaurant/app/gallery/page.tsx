import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhotoGallery from "@/components/gallery/photo-gallery"
import VideoGallery from "@/components/gallery/video-gallery"
import InstagramFeed from "@/components/gallery/instagram-feed"

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Gallery</h1>

      <Tabs defaultValue="restaurant">
        <TabsList className="mb-8">
          <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="pool">Pool</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurant">
          <PhotoGallery category="restaurant" />
        </TabsContent>

        <TabsContent value="food">
          <PhotoGallery category="food" />
        </TabsContent>

        <TabsContent value="events">
          <PhotoGallery category="events" />
        </TabsContent>

        <TabsContent value="pool">
          <PhotoGallery category="pool" />
        </TabsContent>
      </Tabs>

      <VideoGallery />
      <InstagramFeed />
    </main>
  )
}

