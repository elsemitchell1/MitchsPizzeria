import React from "react";
import {ProductTile, ShoppingCart} from '../../components';
import { CartUtilities } from "../CartUtility/CartUtility";

const Pizza = () => {
    const {cartItems, handleQuantityChange, handleAddToCart} = CartUtilities();
    return(
        <>
            <ProductTile productType='Pizza'  
            onQuantityChange={handleQuantityChange} 
            onAddToCart={handleAddToCart}/>
            <ShoppingCart cartItems={cartItems}/>
        </>
    )
}

export default Pizza;