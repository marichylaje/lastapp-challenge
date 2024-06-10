import React from "react"
import { ReactComponent as StarIcon } from "assets/icons/Star.svg"
import { ReactComponent as LocationIcon } from "assets/icons/Location.svg"

const Icons: React.FC = () => {
  return (
    <svg width="0" height="0" style={{ display: "none" }}>
      <symbol id="star-icon" viewBox="0 0 12 12">
        <StarIcon />
      </symbol>
      <symbol id="location-icon" viewBox="0 0 12 12">
        <LocationIcon />
      </symbol>
    </svg>
  )
}

export default Icons
