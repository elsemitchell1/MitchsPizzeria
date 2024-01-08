import React from "react";
import {ProductTile, ShoppingCart} from '../../components';
import { CartUtilities } from "../CartUtility/CartUtility";

const Dessert = () => {
    const {cartItems, handleQuantityChange, handleAddToCart} = CartUtilities();
    return(
        <>
            <ProductTile productType='Dessert'  
            onQuantityChange={handleQuantityChange} 
            onAddToCart={handleAddToCart}/>
            <ShoppingCart cartItems={cartItems}/>
        </>
    )
}

export default Dessert;