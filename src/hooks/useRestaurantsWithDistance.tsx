import { useState, useEffect } from "react"
import { calculateDistance } from "utils/calculateDistance"
import type {
  RestaurantApiType,
  RestaurantWithDistanceType,
  OriginType,
} from "types"

interface UseRestaurantsWithDistanceProps {
  restaurants: RestaurantApiType[] | undefined
  origin: OriginType | null
}

export const useRestaurantsWithDistance = ({
  restaurants,
  origin,
}: UseRestaurantsWithDistanceProps) => {
  const [restaurantsWithDistance, setRestaurantsWithDistance] = useState<
    RestaurantWithDistanceType[]
  >([])

  useEffect(() => {
    if (!restaurants || !origin) return

    const calculateDistances = async () => {
      const distances = restaurants.map((restaurant) => {
        const distance = calculateDistance(origin, restaurant.coordinates)
        return { ...restaurant, distance }
      })

      setRestaurantsWithDistance(
        distances.sort((a, b) => a.distance - b.distance)
      )
    }

    calculateDistances()
  }, [restaurants, origin])

  return restaurantsWithDistance
}
