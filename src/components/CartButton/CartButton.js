import React, {useEffect, useState} from 'react';
import {BsCartCheck} from 'react-icons/bs';
import { Button } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

function CartButton({product}){
    const [cartIcon, setCartIcon] = useState(null);
    const [inCart, setInCart] = useState('Add to Cart');
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const isInCart = cartItems.some((item) => item.name === product.name);

    useEffect(() => {
        if(isInCart){
            setCartIcon(<BsCartCheck />);
            setInCart('In Cart');
        } else {
            setCartIcon(null);
            setInCart('Add to Cart');
        }
    }, [isInCart]);

    const handleAddToCart = () => {
        if(!isInCart){
            dispatch(addToCart(product));
            setCartIcon(<BsCartCheck />);
            setInCart('In Cart');
        }
    }
    
    return (
        <Button onClick={handleAddToCart}>
            {inCart}{cartIcon} 
        </Button>
    );
}

export default CartButton;