import React, { useState } from "react"
import RestaurantInfo from "components/RestaurantInfo"
import GoBack from "components/buttonery/GoBack"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import Search from "components/buttonery/Search"
import { FloatingButtonContainer } from "./styles"
import TabMenu from "components/TabMenu"
import { useRestaurantCatalogContext } from "hooks/useRestaurantCatalogContext"
import ProductList from "components/ProductList"
import SearchPanel from "components/SearchPanel"
import TotalToPay from "components/buttonery/TotalToPay"

const Restaurant = () => {
  const [ activeIndex, setActiveIndex ] = useState<number>(0);
  const [ isSearchActive, setisSearchActive ] = useState<boolean>(false);
  const { selectedRestaurant } = useDataRestaurantsContext();
  const { catalog, totalToPay } = useRestaurantCatalogContext();

  //TODO: handle error with toast
  if (!selectedRestaurant) return null;
  if (!catalog) return null;

  const tabOptions = catalog.map((option) => option.name);
  const products = catalog[activeIndex]?.products;

  return (
    <div>
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
        <TotalToPay total={totalToPay.toFixed(2)} />
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
