interface RatingsType {
    total: string,
    average: string
}

interface CoordinatesType {
    latitude: number,
    longitude: number
}
interface RestaurantApiType {
    id: string,
    name: string,
    image: string,
    logo: string,
    ratings: RatingsType,
    coordinates: CoordinatesType
}

export type { RestaurantApiType };