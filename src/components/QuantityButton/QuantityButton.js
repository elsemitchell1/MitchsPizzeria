import React , {useState, useEffect} from 'react';
import { QuantityButtonStyle, 
    QuantityWrapper } from './QuantityButton.element';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, updateProductItem } from '../../actions/productActions';
import { updateCartItem } from '../../actions/cartActions';

function QuantityButton({product}){
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const cartItem = cartItems.find((item) => item.id === product.id);

    const [displayedQuantity, setDisplayedQuantity] = useState(product.quantity);

    const increment = () => {
        dispatch(incrementQuantity(product.id));
        cartItem && dispatch(updateCartItem(cartItem, product.quantity + 1));
        setDisplayedQuantity(displayedQuantity + 1);
    }

    const decrement = () => {
        dispatch(decrementQuantity(product.id));
        if(displayedQuantity > 0){
            setDisplayedQuantity(displayedQuantity - 1);
            cartItem && dispatch(updateCartItem(cartItem, product.quantity - 1));
        }
    }

    useEffect(() => {
        setDisplayedQuantity(product.quantity);
        dispatch(updateProductItem(product.id, product.quantity));
    }, [product.quantity, dispatch, product.id]);

    return (
        <QuantityWrapper>
            <QuantityButtonStyle onClick={decrement}>
                -
            </QuantityButtonStyle>
            {displayedQuantity}
            <QuantityButtonStyle onClick={increment}>
                +
            </QuantityButtonStyle>
        </QuantityWrapper>
    );
}

export default QuantityButton;