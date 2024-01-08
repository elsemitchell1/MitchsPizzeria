import React from "react";
import {ProductInfo, ShoppingCart} from '../../components';
import { CartUtilities } from "../CartUtility/CartUtility";

const ProductPage = () => {
    const {cartItems, handleQuantityChange, handleAddToCart} = CartUtilities();
    return(
        <>
            <ProductInfo onQuantityChange={handleQuantityChange} 
            onAddToCart={handleAddToCart}/>
            <ShoppingCart cartItems={cartItems}/>
        </>
    )
}

export default ProductPage;