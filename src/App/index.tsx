import React from "react"
import "primereact/resources/themes/lara-light-cyan/theme.css"
import "primeicons/primeicons.css"
import "../styles/index.css"
import { PrimeReactProvider } from "primereact/api"
import { HashRouter as Router } from "react-router-dom"
import AppRoutes from "routes"
import Icons from "components/Icons"
import { DataRestaurantsProvider } from "contexts/DataRestaurantsContext"

const App: React.FC = () => {
  return (
    <>
      <PrimeReactProvider>
        <DataRestaurantsProvider>
          <Router>
            <AppRoutes />
          </Router>
        </DataRestaurantsProvider>

        <Icons />
      </PrimeReactProvider>
    </>
  )
}

export default App
