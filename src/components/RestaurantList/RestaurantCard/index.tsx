import React from "react"
import { Card } from "primereact/card"
import { ptCard } from "./styles"
import RestaurantInfo from "components/RestaurantInfo"
import type { RestaurantWithDistanceType } from "types"

interface RestaurantCardProps extends RestaurantWithDistanceType {
  onClick: () => void
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  onClick,
  ...props
}) => {
  return (
    <Card
      className="border-round-2xl mb-5 cursor-pointer"
      pt={ptCard}
      onClick={onClick}
    >
      <RestaurantInfo {...props} />
    </Card>
  )
}

export default RestaurantCard
