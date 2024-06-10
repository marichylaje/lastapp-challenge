import React, { createContext, useEffect, useState, ReactNode } from "react"
import { LIST_RESTAURANTS_ENDPOINT } from "constants/apiEndpoints"
import type { RestaurantApiType } from "types"

interface DataContextType {
  restaurants: RestaurantApiType[] | undefined
  selectedRestaurant: RestaurantApiType | undefined
  setSelectedRestaurant: (restaurant: RestaurantApiType | undefined) => void
}

export const DataRestaurantsContext = createContext<
  DataContextType | undefined
>(undefined)

export const DataRestaurantsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<
    RestaurantApiType[] | undefined
  >(undefined)
  const [selectedRestaurant, setSelectedRestaurant] = useState<
    RestaurantApiType | undefined
  >(undefined)

  useEffect(() => {
    const storedRestaurants = localStorage.getItem("restaurants")
    const storedTimestamp = localStorage.getItem("restaurantsTimestamp")
    const storedSelectedRestaurant = localStorage.getItem("selectedRestaurant")
    const currentTime = new Date().getTime()

    if (storedRestaurants && storedTimestamp) {
      const parsedRestaurants = JSON.parse(storedRestaurants)
      const storedTime = parseInt(storedTimestamp)
      const elapsedTime = currentTime - storedTime

      //doesn't re-trigger api call if less than 1 hour has passed
      if (elapsedTime < 3600000) {
        setRestaurants(parsedRestaurants)
        if (storedSelectedRestaurant) {
          setSelectedRestaurant(JSON.parse(storedSelectedRestaurant))
        }
        return
      }
      localStorage.removeItem("selectedRestaurant")
    }

    fetch(LIST_RESTAURANTS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data)
        localStorage.setItem("restaurants", JSON.stringify(data))
        localStorage.setItem("restaurantsTimestamp", currentTime.toString())
      })
      .catch((error) =>
        console.error("Error fetching restaurants data:", error)
      )
  }, [])

  return (
    <DataRestaurantsContext.Provider
      value={{ restaurants, selectedRestaurant, setSelectedRestaurant }}
    >
      {children}
    </DataRestaurantsContext.Provider>
  )
}
