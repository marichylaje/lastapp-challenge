import React from 'react'
import Header from 'components/Header';
import RestaurantList from 'components/RestaurantList';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="p-3 pl-5">
                <h1>Restaurantes</h1>
                <RestaurantList />
            </div>
        </div>
    )
}

export default Home;