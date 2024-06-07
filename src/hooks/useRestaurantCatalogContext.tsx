import React, {useContext} from 'react';
import { DataRestaurantsContext } from 'contexts/DataRestaurant';

export const useRestaurantCatalogContext = () => {
    const context = useContext(DataRestaurantsContext);
    if (context === undefined) {
        throw new Error('useRestaurantCatalogContext must be used within a DataProvider');
    }
    return context;
}