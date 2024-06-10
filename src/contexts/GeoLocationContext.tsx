// src/contexts/GeoLocationContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react"

interface Location {
  lat: number
  lon: number
}

interface GeoLocationContextType {
  location: Location | null
  error: string | null
}

export const GeoLocationContext = createContext<
  GeoLocationContextType | undefined
>(undefined)

export const GeoLocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<Location | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (err) => {
          setError(err.message)
        }
      )
    } else {
      setError("Geolocation is not supported by this browser.")
    }
  }, [])

  return (
    <GeoLocationContext.Provider value={{ location, error }}>
      {children}
    </GeoLocationContext.Provider>
  )
}
