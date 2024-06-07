import React from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '../styles/index.css';
import { PrimeReactProvider } from 'primereact/api';
import { DataProvider } from 'contexts/DataRestaurant';
import Home from 'pages/Home';

const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <DataProvider>
        <Home />
      </DataProvider>
    </PrimeReactProvider>
  );
}

export default App;
