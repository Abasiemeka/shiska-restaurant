"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

// Types
export interface User {
  id: number
  username: string
  email: string
  roles: string[]
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  login: (username: string, password: string) => Promise<void>
  signup: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  hasRole: (role: string) => boolean
}

interface AuthProviderProps {
  children: ReactNode
}

interface LoginResponse {
  status: string
  data: {
    token: string
    type: string
    id: number
    username: string
    email: string
    roles: string[]
  }
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          setLoading(false)
          return
        }

        // Get user data from token
        const userData = JSON.parse(localStorage.getItem("user") || "null")
        if (userData) {
          setUser(userData)
        }
      } catch (err) {
        console.error("Authentication error:", err)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Login function
  const login = async (username: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data: LoginResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.status === "error" ? data.data?.toString() || "Login failed" : "Login failed")
      }

      // Save token and user data
      localStorage.setItem("token", data.data.token)

      const userData: User = {
        id: data.data.id,
        username: data.data.username,
        email: data.data.email,
        roles: data.data.roles,
      }

      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)

      // Redirect to home page
      router.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      console.error("Login error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Signup function
  const signup = async (username: string, email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.status === "error" ? data.error?.message || "Signup failed" : "Signup failed")
      }

      // Automatically log in after successful signup
      await login(username, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      console.error("Signup error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  // Check if user has a specific role
  const hasRole = (role: string): boolean => {
    if (!user || !user.roles) return false
    return user.roles.includes(role)
  }

  // Check if user is authenticated
  const isAuthenticated = !!user

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    isAuthenticated,
    hasRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Helper function to get auth token
export function getAuthToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token")
  }
  return null
}

// Auth header for API requests
export function authHeader() {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

