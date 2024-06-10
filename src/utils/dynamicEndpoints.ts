import { LIST_RESTAURANTS_ENDPOINT } from "../constants/apiEndpoints"

export const RESTAURANT_CATALOG_ENDPOINT = (idRestaurant: string) =>
  `${LIST_RESTAURANTS_ENDPOINT}/${idRestaurant}/catalog`
