interface RatingsType {
  total: string
  average: string
}

interface OriginType {
  lat: number
  lon: number
}

interface CoordinatesType {
  latitude: number
  longitude: number
}
interface RestaurantApiType {
  id: string
  name: string
  image: string
  logo: string
  ratings: RatingsType
  coordinates: CoordinatesType
}

interface RestaurantWithDistanceType extends RestaurantApiType {
  distance: number
}

interface ProductType {
  name: string
  image: string
  price: number
}

interface ProductApiType {
  name: string
  products: ProductType[]
}

interface SelectionType extends ProductType {
  quantity: number
}

export type {
  RestaurantWithDistanceType,
  OriginType,
  RestaurantApiType,
  ProductType,
  ProductApiType,
  SelectionType,
  CoordinatesType,
}
