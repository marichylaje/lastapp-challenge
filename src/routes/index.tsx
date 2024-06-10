import React from "react"
import Home from "pages/Home"
import Restaurant from "pages/Restaurant"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import { Route, Routes, Navigate } from "react-router-dom"
import { RestaurantCatalogProvider } from "contexts/RestaurantCatalogContext"

const AppRoutes: React.FC = () => {
  const { selectedRestaurant } = useDataRestaurantsContext()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {selectedRestaurant ? (
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantCatalogProvider>
              <Restaurant />
            </RestaurantCatalogProvider>
          }
        />
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  )
}

export default AppRoutes
