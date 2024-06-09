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
        if (cartItem) {
            dispatch(updateCartItem({ id: cartItem.id, quantity: cartItem.quantity + 1 }));
        }
        setDisplayedQuantity(displayedQuantity + 1);
    }

    const decrement = () => {
        dispatch(decrementQuantity(product.id));
        if (displayedQuantity > 0) {
            setDisplayedQuantity(displayedQuantity - 1);
            if (cartItem) {
                dispatch(updateCartItem({ id: cartItem.id, quantity: cartItem.quantity - 1 }));
            }
        }
    }

    useEffect(() => {
        dispatch(updateProductItem(product.id, product.quantity));
        setDisplayedQuantity(cartItem ? cartItem.quantity : product.quantity);
    }, [product.quantity, dispatch, product.id, cartItem]);

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