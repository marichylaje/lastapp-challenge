import { useContext } from "react"
import { GeoLocationContext } from "contexts/GeoLocationContext"

export const useGeoLocationContext = () => {
  const context = useContext(GeoLocationContext)

  if (context === undefined) {
    throw new Error("useGeoLocationContext must be used within a DataProvider")
  }

  return context
}
