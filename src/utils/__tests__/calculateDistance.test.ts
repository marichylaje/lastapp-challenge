import { calculateDistance } from "../calculateDistance"
import type { CoordinatesType, OriginType } from "../../types"

describe("calculateDistance", () => {
  it("should calculate the correct distance between two points", () => {
    const origin: OriginType = { lat: 40.7128, lon: -74.006 }
    const destination: CoordinatesType = {
      latitude: 34.0522,
      longitude: -118.2437,
    }

    const distance = calculateDistance(origin, destination)
    expect(distance).toBeCloseTo(3935.75, 2)
  })

  it("should return 0 when origin and destination are the same", () => {
    const origin: OriginType = { lat: 40.7128, lon: -74.006 }
    const destination: CoordinatesType = {
      latitude: 40.7128,
      longitude: -74.006,
    }
    const distance = calculateDistance(origin, destination)
    expect(distance).toBe(0)
  })
})
