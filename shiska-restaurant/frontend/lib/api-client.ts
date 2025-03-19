/**
 * API Client for Shiska Restaurant
 * This file provides typed functions to interact with the backend API
 */

import { authHeader } from "@/lib/auth"

// Base API URL - would be set from environment variables in a real app
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

// Generic API response type
interface ApiResponse<T> {
  status: "success" | "error"
  data: T | null
  error?: {
    message: string
    code: string
  }
  timestamp: string
}

// Menu types
export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: "APPETIZER" | "MAIN_COURSE" | "DESSERT" | "DRINK" | "SPECIAL"
  imageUrl: string | null
  vegetarian: boolean
  glutenFree: boolean
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuItemRequest {
  name: string
  description: string
  price: number
  category: "APPETIZER" | "MAIN_COURSE" | "DESSERT" | "DRINK" | "SPECIAL"
  imageUrl?: string
  vegetarian: boolean
  glutenFree: boolean
  featured: boolean
}

// Event types
export interface Event {
  id: number
  title: string
  description: string
  startTime: string
  endTime: string
  imageUrl: string | null
  type: "MUSIC" | "TASTING" | "SPECIAL_DINNER" | "HOLIDAY" | "PRIVATE_PARTY"
  capacity: number | null
  isPrivate: boolean
  createdAt: string
  updatedAt: string
}

export interface EventRequest {
  title: string
  description: string
  startTime: string
  endTime: string
  imageUrl?: string
  type: "MUSIC" | "TASTING" | "SPECIAL_DINNER" | "HOLIDAY" | "PRIVATE_PARTY"
  capacity?: number
  isPrivate: boolean
}

// Reservation types
export interface Reservation {
  id: number
  customerName: string
  email: string
  phone: string
  reservationTime: string
  partySize: number
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED"
  specialRequests: string | null
  createdAt: string
  updatedAt: string
}

export interface ReservationRequest {
  customerName: string
  email: string
  phone: string
  reservationTime: string
  partySize: number
  specialRequests?: string
}

// Contact types
export interface ContactRequest {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Newsletter types
export interface NewsletterSubscriptionRequest {
  email: string
}

// Job Application types
export interface JobApplication {
  id: number
  fullName: string
  email: string
  phone: string
  position: string
  experience: string | null
  coverLetter: string | null
  resumeUrl: string | null
  status: "RECEIVED" | "UNDER_REVIEW" | "INTERVIEW_SCHEDULED" | "REJECTED" | "HIRED"
  appliedAt: string
  updatedAt: string
}

export interface JobApplicationRequest {
  fullName: string
  email: string
  phone: string
  position: string
  experience?: string
  coverLetter?: string
}

// Generic fetch function with error handling and authentication
async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const headers = {
      "Content-Type": "application/json",
      ...authHeader(),
      ...options.headers,
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    const data: ApiResponse<T> = await response.json()

    if (!response.ok) {
      // Handle 401 Unauthorized by redirecting to login
      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          window.location.href = "/login"
        }
      }
      throw new Error(data.error?.message || "An error occurred")
    }

    return data
  } catch (error) {
    console.error("API request failed:", error)
    return {
      status: "error",
      data: null,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
        code: "FETCH_ERROR",
      },
      timestamp: new Date().toISOString(),
    }
  }
}

// Menu API functions
export const menuApi = {
  getAll: () => fetchApi<MenuItem[]>("/menu"),
  getById: (id: number) => fetchApi<MenuItem>(`/menu/${id}`),
  getByCategory: (category: string) => fetchApi<MenuItem[]>(`/menu/category/${category}`),
  getFeatured: () => fetchApi<MenuItem[]>("/menu/featured"),
  create: (menuItem: MenuItemRequest) =>
    fetchApi<MenuItem>("/menu", {
      method: "POST",
      body: JSON.stringify(menuItem),
    }),
  update: (id: number, menuItem: MenuItemRequest) =>
    fetchApi<MenuItem>(`/menu/${id}`, {
      method: "PUT",
      body: JSON.stringify(menuItem),
    }),
  delete: (id: number) =>
    fetchApi<null>(`/menu/${id}`, {
      method: "DELETE",
    }),
}

// Event API functions
export const eventApi = {
  getAll: () => fetchApi<Event[]>("/events"),
  getById: (id: number) => fetchApi<Event>(`/events/${id}`),
  getByType: (type: string) => fetchApi<Event[]>(`/events/type/${type}`),
  getUpcoming: () => fetchApi<Event[]>("/events/upcoming"),
  getPublic: () => fetchApi<Event[]>("/events/public"),
  create: (event: EventRequest) =>
    fetchApi<Event>("/events", {
      method: "POST",
      body: JSON.stringify(event),
    }),
  update: (id: number, event: EventRequest) =>
    fetchApi<Event>(`/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(event),
    }),
  delete: (id: number) =>
    fetchApi<null>(`/events/${id}`, {
      method: "DELETE",
    }),
}

// Reservation API functions
export const reservationApi = {
  create: (reservation: ReservationRequest) =>
    fetchApi<Reservation>("/reservations", {
      method: "POST",
      body: JSON.stringify(reservation),
    }),
  getAll: () => fetchApi<Reservation[]>("/reservations"),
  getById: (id: number) => fetchApi<Reservation>(`/reservations/${id}`),
  getByEmail: (email: string) => fetchApi<Reservation[]>(`/reservations/email/${email}`),
  updateStatus: (id: number, status: string) =>
    fetchApi<Reservation>(`/reservations/${id}/status?status=${status}`, {
      method: "PUT",
    }),
}

// Contact API functions
export const contactApi = {
  submitForm: (contactRequest: ContactRequest) =>
    fetchApi<null>("/contact", {
      method: "POST",
      body: JSON.stringify(contactRequest),
    }),
  subscribeToNewsletter: (email: string) =>
    fetchApi<null>("/contact/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),
}

// Job Application API functions
export const careerApi = {
  submitApplication: (application: JobApplicationRequest) =>
    fetchApi<JobApplication>("/careers/applications", {
      method: "POST",
      body: JSON.stringify(application),
    }),
  uploadResume: (id: number, file: File) => {
    const formData = new FormData()
    formData.append("file", file)

    return fetchApi<JobApplication>(`/careers/applications/${id}/resume`, {
      method: "POST",
      headers: {}, // Let the browser set the content type with boundary
      body: formData,
    })
  },
}

// Admin API functions
export const adminApi = {
  getDashboardStats: () => fetchApi<any>("/admin/dashboard/stats"),
}

