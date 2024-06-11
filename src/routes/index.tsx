import React from "react"
import Home from "pages/Home"
import Restaurant from "pages/Restaurant"
import { useDataRestaurantsContext } from "hooks/useDataRestaurantsContext"
import { Route, Routes, Navigate } from "react-router-dom"
import { RestaurantCatalogProvider } from "contexts/RestaurantCatalogContext"
import ConfirmedOrder from "pages/ConfirmedOrder"
import Outlet from "./Outlet"
import { GeoLocationProvider } from "contexts/GeoLocationContext"

const AppRoutes: React.FC = () => {
  const { selectedRestaurant } = useDataRestaurantsContext()
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={
            <GeoLocationProvider>
              <Home />
            </GeoLocationProvider>
          }
        />
        <Route
          path="confirmed-order"
          element={
            <RestaurantCatalogProvider>
              <ConfirmedOrder />
            </RestaurantCatalogProvider>
          }
        />
        {selectedRestaurant && (
          <Route
            path="restaurant/:id"
            element={
              <RestaurantCatalogProvider>
                <Restaurant />
              </RestaurantCatalogProvider>
            }
          />
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
