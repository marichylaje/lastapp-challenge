import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { RESTAURANT_CATALOG_ENDPOINT } from 'utils/dynamicEndpoints';
import type { RestaurantApiType } from 'types';

interface DataContextType {
    catalog: RestaurantApiType[] | undefined;
}

export const RestaurantCatalogContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [catalog, setCatalog] = useState<RestaurantApiType[] | undefined>(undefined);

    useEffect(() => {
        fetch(RESTAURANT_CATALOG_ENDPOINT(1))
            .then(response => response.json())
            .then(data => setCatalog(data))
            .catch(error => console.error('Error fetching catalog data:', error));
    }, []);

    return (
        <RestaurantCatalogContext.Provider value={{ catalog }}>
            {children}
        </RestaurantCatalogContext.Provider>
    );
};
