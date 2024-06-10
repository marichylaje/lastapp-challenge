import React from "react"
import "primereact/resources/themes/lara-light-cyan/theme.css"
import "primeicons/primeicons.css"
import "../styles/index.css"
import { PrimeReactProvider } from "primereact/api"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "routes"
import Icons from "components/Icons"
import { DataRestaurantsProvider } from "contexts/DataRestaurantsContext"
import { GeoLocationProvider } from "contexts/GeoLocationContext"

const App: React.FC = () => {
  return (
    <>
      <PrimeReactProvider>
        <DataRestaurantsProvider>
          <GeoLocationProvider>
            <Router>
              <AppRoutes />
            </Router>
          </GeoLocationProvider>
        </DataRestaurantsProvider>

        <Icons />
      </PrimeReactProvider>
    </>
  )
}

export default App
