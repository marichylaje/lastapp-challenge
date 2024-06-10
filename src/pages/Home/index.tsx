import React from "react"
import Header from "components/Header"
import RestaurantList from "components/RestaurantList"
import { Container, InnerContainer } from "./styles"

const Home = () => {
  return (
    <Container className="flex flex-column" >
      <InnerContainer className="p-3 pl-5 pr-5" >
        <h1>Restaurantes</h1>
        <RestaurantList />
      </InnerContainer>
    </Container>
  )
}

export default Home
