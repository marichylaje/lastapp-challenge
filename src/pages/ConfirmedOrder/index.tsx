import React from 'react';
import { useRestaurantCatalogContext } from 'hooks/useRestaurantCatalogContext';
import ProductAsRow from 'components/ProductList/ProductAsRow';
import { FloatingBottomButton } from 'components/buttonery/styles';
import { useNavigate } from 'react-router-dom';
import Congratulations from 'animations/Congratulations';

const ConfirmedOrder = () => {
    const { selection, setSelection } = useRestaurantCatalogContext()
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate("/")
        setSelection([])
    }

    if(!selection) return <>
        <FloatingBottomButton 
            aria-label="go back home"
            label={`Go back home`}
            onClick={() => handleOnClick()}
        />
    </>;

    return (
        <>
            <Congratulations />
            <h1 className="ml-4 mt-4">Your order is being prepared.</h1>
            <h2 className="ml-4">Here is your summary:</h2>
            <div className="mb-8">
                {selection.map((select) => (
                    <ProductAsRow product={select} isSUmmary />
                ))}
            </div>
            <FloatingBottomButton 
                aria-label="go back home"
                label={`Go back home`}
                onClick={() => handleOnClick()}
            />
        </>
    );
};

export default ConfirmedOrder;
