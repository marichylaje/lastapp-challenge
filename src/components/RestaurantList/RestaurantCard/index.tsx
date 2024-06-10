import React from "react"
import { Card } from "primereact/card"
import { ptCard } from "./styles"
import RestaurantInfo from "components/RestaurantInfo"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import { useNavigate } from "react-router-dom"
import type { RestaurantWithDistanceType } from "types"

interface RestaurantCardProps extends RestaurantWithDistanceType {
  onClick: () => void
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  onClick,
  ...props
}) => {
  const { setSelectedRestaurant } = useDataRestaurantsContext()
  const navigate = useNavigate()

  const handleClick = () => {
    setSelectedRestaurant(props)
    localStorage.setItem("selectedRestaurant", JSON.stringify(props))
    navigate(`/restaurant/${props.id}`)
  }

  return (
    <Card className="border-round-2xl mb-5" pt={ptCard} onClick={handleClick}>
      <RestaurantInfo {...props} />
    </Card>
  )
}

export default RestaurantCard
