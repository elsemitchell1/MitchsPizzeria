import React, { useEffect } from 'react';
import { SuccessTitle, PaymentSuccessDiv, SuccessText } from '../../components/CheckoutInfo/Checkout.element';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../../actions/cartActions";
import { updateProductItem } from "../../actions/productActions";

function PaymentSuccess() {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const clearItems = () => {
        dispatch(clearCart());
        for(const product of products){
            dispatch(updateProductItem(product.id, 0));
        }
    }

    useEffect(() => {
        window.history.replaceState({}, document.title, window.location.hash.replace(/^#/, '#/'));
        clearItems();
        // eslint-disable-next-line
    },[]); 
    return (
        <PaymentSuccessDiv>
            <SuccessTitle>Payment Successful</SuccessTitle>
            <SuccessText>Thank you for your purchase!</SuccessText>
        </PaymentSuccessDiv>
    );
}

export default PaymentSuccess;