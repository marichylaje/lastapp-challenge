import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { LIST_RESTAURANTS_ENDPOINT } from 'constants/apiEndpoints';
import type { RestaurantApiType } from 'types';

interface DataContextType {
    restaurants: RestaurantApiType[] | undefined;
}

export const DataRestaurantsContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [restaurants, setRestaurants] = useState<RestaurantApiType[] | undefined>(undefined);

    useEffect(() => {
        fetch(LIST_RESTAURANTS_ENDPOINT)
            .then(response => response.json())
            .then(data => setRestaurants(data))
            .catch(error => console.error('Error fetching restaurants data:', error));
    }, []);

    return (
        <DataRestaurantsContext.Provider value={{ restaurants }}>
            {children}
        </DataRestaurantsContext.Provider>
    );
};
