import React from "react"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import RestaurantCard from "./RestaurantCard"
import RestaurantCardSkeleton from "./RestaurantCard/RestaurantCardSkeleton"
import { useGeoLocationContext } from "hooks/useGeoLocationContext"
import { useRestaurantsWithDistance } from "hooks/useRestaurantsWithDistance"
import type { RestaurantWithDistanceType } from "types"
import { useNavigate } from "react-router-dom"

const RestaurantList = () => {
  const { location } = useGeoLocationContext()
  const { restaurants, setSelectedRestaurant } = useDataRestaurantsContext()
  const navigate = useNavigate()

  const sortedRestaurants = useRestaurantsWithDistance({
    restaurants,
    origin: location,
  })

  const handleClick = (props: RestaurantWithDistanceType) => {
    setSelectedRestaurant(props)
    localStorage.setItem("selectedRestaurant", JSON.stringify(props))
    navigate(`/restaurant/${props.id}`)
  }

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
            handleClick(restaurant)
          }}
          key={restaurant.id}
          {...restaurant}
        />
      ))}
    </div>
  )
}

export default RestaurantList
