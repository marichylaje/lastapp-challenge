import React, { useState } from "react"
import Header from "components/Header"
import RestaurantInfo from "components/RestaurantInfo"
import GoBack from "components/buttonery/GoBack"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import Search from "components/buttonery/Search"
import { FloatingButtonContainer, TotalButton } from "./styles"
import TabMenu from "components/TabMenu"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import ProductList from "components/ProductList"
import SearchPanel from "components/SearchPanel"

//TODO: move everything into a smart component, and this one as dumb one?
const Restaurant = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isSearchActive, setisSearchActive] = useState<boolean>(false)
  const { selectedRestaurant } = useDataRestaurantsContext()
  const { catalog, totalToPay } = useRestaurantCatalogContext()

  //TODO: handle error
  if (!selectedRestaurant) return null
  if (!catalog) return null

  const tabOptions = catalog.map((option) => option.name)
  const products = catalog[activeIndex]?.products
  return (
    <div>
      <Header />
      <RestaurantInfo {...selectedRestaurant} iscard={false} />
      <FloatingButtonContainer>
        <GoBack />
        <Search onClick={() => setisSearchActive(true)} />
      </FloatingButtonContainer>
      <TabMenu
        options={tabOptions}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ProductList products={products} />
      {totalToPay > 0 && (
        <TotalButton aria-label="total to pay" label={`Total: (${totalToPay.toFixed(2)} €)`} />
      )}
      {isSearchActive && (
        <SearchPanel
          isVisible={isSearchActive}
          setIsVisible={setisSearchActive}
        />
      )}
    </div>
  )
}

export default Restaurant
