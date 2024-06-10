import { useContext } from "react"
import { RestaurantCatalogContext } from "contexts/RestaurantCatalogContext"

export const useRestaurantCatalogContext = () => {
  const context = useContext(RestaurantCatalogContext)
  if (context === undefined) {
    throw new Error(
      "useRestaurantCatalogContext must be used within a DataProvider"
    )
  }
  return context
}
