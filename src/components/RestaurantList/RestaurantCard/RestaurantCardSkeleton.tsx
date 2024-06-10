import React from "react"
import { Card } from "primereact/card"
import { ptCard } from "./styles"
import { Skeleton } from "primereact/skeleton"

const RestaurantCardSkeleton: React.FC = () => {
  return (
    <>
      <Card
        pt={ptCard}
        className="m-0 p-0 pb-4 relative border-round-2xl w-full"
      >
        <Skeleton width="350px" height="150px" />
        <Skeleton width="100px" height="20px" className="ml-7 mt-2" />
        <Skeleton width="100px" height="15px" className="ml-7 mt-1" />
        <Skeleton width="100px" height="12px" className="ml-7 mt-1" />
      </Card>
      <Card
        pt={ptCard}
        className="m-0 p-0 pb-4 relative border-round-2xl w-full"
      >
        <Skeleton width="350px" height="150px" />
        <Skeleton width="100px" height="20px" className="ml-7 mt-2" />
        <Skeleton width="100px" height="15px" className="ml-7 mt-1" />
        <Skeleton width="100px" height="12px" className="ml-7 mt-1" />
      </Card>
      <Card
        pt={ptCard}
        className="m-0 p-0 pb-4 relative border-round-2xl w-full"
      >
        <Skeleton width="350px" height="150px" />
        <Skeleton width="100px" height="20px" className="ml-7 mt-2" />
        <Skeleton width="100px" height="15px" className="ml-7 mt-1" />
        <Skeleton width="100px" height="12px" className="ml-7 mt-1" />
      </Card>
    </>
  )
}

export default RestaurantCardSkeleton
