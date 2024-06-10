import React from "react"
import { ReactComponent as LastAppLogo } from "assets/logos/LastAppLogo.svg"
import Container from "./styles"

const Header = () => {
  return (
    <Container className="w-full m-0 p-4 pl-5">
      <LastAppLogo />
    </Container>
  )
}

export default Header
