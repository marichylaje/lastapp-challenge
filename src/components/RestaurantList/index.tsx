import React from "react"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import RestaurantCard from "./RestaurantCard"
import RestaurantCardSkeleton from "./RestaurantCard/RestaurantCardSkeleton"
import { useGeoLocationContext } from "hooks/useGeoLocationContext"
import { useRestaurantsWithDistance } from "hooks/useRestaurantsWithDistance"
import type { RestaurantWithDistanceType } from "types"

//TODO: SOLVE CONSOLE LOG ONCLICK
const RestaurantList = () => {
  const { location } = useGeoLocationContext()
  const { restaurants } = useDataRestaurantsContext()
  
  const sortedRestaurants = useRestaurantsWithDistance({
    restaurants,
    origin: location,
  })

  if (!restaurants || !sortedRestaurants) {
    return (
      <div>
        <RestaurantCardSkeleton />
      </div>
    )
  }

  return (
    <div>
      {sortedRestaurants.map((restaurant: RestaurantWithDistanceType) => (
        <RestaurantCard
          onClick={() => {
            console.log(restaurant)
          }}
          key={restaurant.id}
          {...restaurant}
        />
      ))}
    </div>
  )
}

export default RestaurantList
