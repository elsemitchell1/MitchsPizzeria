import React from 'react';
import { Button } from '../../globalStyles';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import { updateProductItem } from '../../actions/productActions';

function RemoveButton({product}){
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeFromCart(product));
        dispatch(updateProductItem(product.id, 0));
    }
    return (
        <Button onClick={handleRemove}>
            Remove 
        </Button>
    );
}

export default RemoveButton;