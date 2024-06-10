import { useContext } from "react"
import { DataRestaurantsContext } from "contexts/DataRestaurantsContext"

export const useDataRestaurantsContext = () => {
  const context = useContext(DataRestaurantsContext)

  if (context === undefined) {
    throw new Error(
      "useDataRestaurantsContext must be used within a DataProvider"
    )
  }
  const storedSelectedRestaurant = localStorage.getItem("selectedRestaurant")
  if (storedSelectedRestaurant) {
    return {
      ...context,
      selectedRestaurant: JSON.parse(storedSelectedRestaurant),
    }
  }
  return context
}
