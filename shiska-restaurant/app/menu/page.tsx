import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCategory from "@/components/menu/menu-category"
import ChefsSpecials from "@/components/menu/chefs-specials"
import DietaryInfo from "@/components/menu/dietary-info"

export default function MenuPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Our Menu</h1>

      <Tabs defaultValue="appetizers">
        <TabsList className="mb-8">
          <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
          <TabsTrigger value="main-courses">Main Courses</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>

        <TabsContent value="appetizers">
          <MenuCategory category="appetizers" />
        </TabsContent>

        <TabsContent value="main-courses">
          <MenuCategory category="main-courses" />
        </TabsContent>

        <TabsContent value="desserts">
          <MenuCategory category="desserts" />
        </TabsContent>

        <TabsContent value="drinks">
          <MenuCategory category="drinks" />
        </TabsContent>
      </Tabs>

      <ChefsSpecials />
      <DietaryInfo />
    </main>
  )
}

