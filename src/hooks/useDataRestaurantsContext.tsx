import React, {useContext} from 'react';
import { DataRestaurantsContext } from 'contexts/DataRestaurant';

export const useDataRestaurantsContext = () => {
    const context = useContext(DataRestaurantsContext);
    if (context === undefined) {
        throw new Error('useDataRestaurantsContext must be used within a DataProvider');
    }
    return context;
}