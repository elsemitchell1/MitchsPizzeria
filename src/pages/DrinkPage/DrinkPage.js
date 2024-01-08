import React from "react";
import {ProductTile, ShoppingCart} from '../../components';
import { CartUtilities } from "../CartUtility/CartUtility";

const Drink = () => {
    const {cartItems, handleQuantityChange, handleAddToCart} = CartUtilities();
    return(
        <>
            <ProductTile productType='Drink'  
            onQuantityChange={handleQuantityChange} 
            onAddToCart={handleAddToCart}/>
            <ShoppingCart cartItems={cartItems}/>
        </>
    )
}

export default Drink;