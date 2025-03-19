"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProtectedRoute from "@/components/admin/protected-route"
import { adminApi } from "@/lib/api-client"
import { Loader2, Users, Calendar, Utensils, Star } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminApi.getDashboardStats()
        if (response.status === "success" && response.data) {
          setStats(response.data)
        } else {
          setError("Failed to load dashboard data")
        }
      } catch (err) {
        setError("An error occurred while fetching dashboard data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <ProtectedRoute requiredRole="ADMIN">
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Admin Dashboard</h1>

        {loading ? (
          <div className="flex h-[40vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Reservations</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalReservations}</div>
                  <p className="text-xs text-muted-foreground">{stats.upcomingReservations} upcoming</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Menu Items</CardTitle>
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalMenuItems}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">{stats.upcomingEvents} upcoming</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalJobApplications}</div>
                  <p className="text-xs text-muted-foreground">{stats.newJobApplications} new</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Satisfaction</CardTitle>
                  <CardDescription>Average rating: {stats.averageRating}/5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(stats.averageRating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="reservations">
                <TabsList>
                  <TabsTrigger value="reservations">Reservations</TabsTrigger>
                  <TabsTrigger value="menu">Menu Management</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="applications">Job Applications</TabsTrigger>
                </TabsList>
                <TabsContent value="reservations" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Reservations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Reservation management interface would be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="menu" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Menu Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Menu item management interface would be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="events" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Event management interface would be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="applications" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Job application review interface would be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}
      </main>
    </ProtectedRoute>
  )
}

