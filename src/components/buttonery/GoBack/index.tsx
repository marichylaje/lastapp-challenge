import React from "react"
import { useNavigate } from "react-router-dom"
import StyledFloatingButton from "../styles"

const GoBack = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <StyledFloatingButton
      icon="pi pi-chevron-left"
      rounded
      aria-label="go back"
      onClick={handleGoBack}
    />
  )
}

export default GoBack
