import React from "react"
import {
  Image,
  Logo,
  Content,
  Title,
  Category,
  Info,
  InfoText,
  ImageWrapper,
} from "./styles"
import type { RestaurantWithDistanceType } from "types"

enum CATEGORY {
  RESTAURANT = "Restaurant",
  CAFE = "Cafe",
  BAR = "Bar",
  FAST_FOOD = "Comida rápida",
}
interface RestaurantCardProps extends RestaurantWithDistanceType {
  category?: CATEGORY
  iscard?: boolean
}

const RestaurantInfo: React.FC<RestaurantCardProps> = ({
  name,
  image,
  logo,
  ratings,
  distance,
  category = CATEGORY.FAST_FOOD,
  iscard = true,
}) => {
  return (
    <>
      <ImageWrapper>
        <Image src={image} alt={name} iscard={iscard} />
        <Logo src={logo} alt={`${name}-logo`} iscard={iscard} />
      </ImageWrapper>
      <Content iscard={iscard}>
        <Title>{name.toUpperCase()}</Title>
        <Category>{category}</Category>
        <Info>
          <svg width="12" height="12" fill="#6E6E6E">
            <use href="#star-icon" />
          </svg>
          <InfoText>
            {ratings.average} ({ratings.total})
          </InfoText>

          <svg
            width="12"
            height="12"
            fill="#6E6E6E"
            style={{ marginLeft: "10px" }}
          >
            <use href="#location-icon" />
          </svg>
          <InfoText>{distance} km</InfoText>
        </Info>
      </Content>
    </>
  )
}

export default RestaurantInfo
