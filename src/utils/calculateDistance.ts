import type { CoordinatesType, OriginType } from "types"

const toRadians = (degrees: number) => degrees * (Math.PI / 180)

export const calculateDistance = (
  origin: OriginType,
  destination: CoordinatesType
) => {
  const earthRadiusKm = 6371

  const destinationLat = toRadians(destination.latitude - origin.lat)
  const destinationLon = toRadians(destination.longitude - origin.lon)

  const lat1 = toRadians(origin.lat)
  const lat2 = toRadians(destination.latitude)

  const a =
    Math.sin(destinationLat / 2) * Math.sin(destinationLat / 2) +
    Math.sin(destinationLon / 2) *
      Math.sin(destinationLon / 2) *
      Math.cos(lat1) *
      Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return parseFloat((earthRadiusKm * c).toFixed(2))
}
