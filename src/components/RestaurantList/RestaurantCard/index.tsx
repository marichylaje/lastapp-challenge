import React from 'react';
import { Card } from 'primereact/card';
import type { RestaurantApiType } from 'types';

enum CATEGORY {
    RESTAURANT = 'Restaurant',
    CAFE = 'Cafe',
    BAR = 'Bar',
    FAST_FOOD = 'Comida Rápida'
}
interface RestaurantCardProps extends RestaurantApiType {
    category?: CATEGORY
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    name,
    image,
    logo,
    ratings,
    coordinates,
    category = CATEGORY.FAST_FOOD
}) => {
    const noBlankSpaces = {
        style: {
            margin: 0,
            padding: 0
        }
    }
    const ptCard = {
        root: noBlankSpaces,
        body: noBlankSpaces,
        content: noBlankSpaces
    }
    return (
        <div>
            <Card className="m-0 p-0 relative" pt={ptCard}>
                <div className="flex-1 flex-column">
                    <img src={image} alt={name} className="flex w-full m-0 p-0 border-round-top-2xl" />
                    <div className="flex justify-center">
                        <img style={{top: '7rem', marginLeft: '1rem'}} src={logo} alt={logo} className="bg-white flex w-2 border-round-top-2xl absolute" />
                        <div className="ml-8 justify-center">
                            <h1 className="mt-3 mb-0">{name.toUpperCase()}</h1>
                            <h3 className="m-0 text-color-secondary">{category}</h3>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RestaurantCard;