import React from "react"
import Header from "components/Header"
import RestaurantList from "components/RestaurantList"

const Home = () => {
  return (
    <div className="flex flex-column" style={{ placeItems: "center" }}>
      <Header />
      <div
        className="p-3 pl-5 pr-5"
        style={{ maxWidth: "400px", alignContent: "center" }}
      >
        <h1>Restaurantes</h1>
        <RestaurantList />
      </div>
    </div>
  )
}

export default Home
