import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {BsCart, BsCartCheck} from 'react-icons/bs';
import { Badge, CartIconWrapper } from './ShoppingCart.element';

function ShoppingCart() {
    const [cartIcon, setCartIcon] = useState(null);
    const cartItems = useSelector((state) => state.cart.items);
    useEffect(() => {
        if(cartItems.length > 0){
            setCartIcon(<BsCartCheck/>);
        } else {
            setCartIcon(<BsCart/>);
        }
    }, [cartItems]);

  return (
    <CartIconWrapper to='/Cart'>
        {cartIcon}
        <Badge>{cartItems.length}</Badge>
    </CartIconWrapper>
  )
}

export default ShoppingCart;