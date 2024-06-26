import React from "react"
import {
  StyledImage,
  StyledLogo,
  Content,
  Title,
  Category,
  Info,
  InfoText,
  ImageWrapper,
  RestaurantInfoContainer,
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
    <RestaurantInfoContainer>
      <ImageWrapper>
        <StyledImage
          loading="lazy"
          src={image}
          alt={name}
          iscard={iscard.toString()}
          width="100%"
        />
        <StyledLogo
          src={logo}
          alt={`${name}-logo`}
          iscard={iscard.toString()}
        />
      </ImageWrapper>
      <Content iscard={iscard.toString()}>
        <Title>{name.toUpperCase()}</Title>
        <Category>{category}</Category>
        <Info>
          <svg width="12" height="12" fill="#6E6E6E">
            <use href="#star-icon" />
          </svg>
          <InfoText>
            {ratings.average} ({ratings.total})
          </InfoText>

          <svg width="12" height="12" fill="#6E6E6E" className="ml-3">
            <use href="#location-icon" />
          </svg>
          <InfoText>{distance} km</InfoText>
        </Info>
      </Content>
    </RestaurantInfoContainer>
  )
}

export default RestaurantInfo
