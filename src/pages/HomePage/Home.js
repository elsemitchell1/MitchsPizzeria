import React from "react";
import {ProductTile, ShoppingCart} from '../../components';

const Home = () => {
    return(
        <>
            <ProductTile productType='Pizza'/>
            <ProductTile productType='Drink'/>
            <ProductTile productType='Dessert'/>
            <ShoppingCart/>
        </>
    )
}

export default Home;