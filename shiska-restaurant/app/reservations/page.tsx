import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TableBooking from "@/components/reservations/table-booking"
import PrivateEventInquiry from "@/components/reservations/private-event-inquiry"

export default function ReservationsPage() {
  return (
    <main className="container mx-auto">
      <Tabs defaultValue="table-booking" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="table-booking">Table Booking</TabsTrigger>
          <TabsTrigger value="private-event">Private Event</TabsTrigger>
        </TabsList>

        <TabsContent value="table-booking">
          <TableBooking />
        </TabsContent>

        <TabsContent value="private-event">
          <PrivateEventInquiry />
        </TabsContent>
      </Tabs>
    </main>
  )
}

