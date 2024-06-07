import { useDataRestaurantsContext } from 'hooks/useDataRestaurantsContext';
import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
    const { restaurants } = useDataRestaurantsContext();

    console.log({ restaurants })

    if (!restaurants) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <RestaurantCard {...restaurants[0]} />
        </div>
    )
}

export default RestaurantList;