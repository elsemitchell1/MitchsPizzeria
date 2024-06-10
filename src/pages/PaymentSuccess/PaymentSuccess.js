import React from 'react';
import { CheckoutTitle, PaymentSuccessDiv, Text3XL } from '../../components/CheckoutInfo/Checkout.element';

function PaymentSuccess() {
    return (
        <PaymentSuccessDiv>
            <CheckoutTitle>Payment Successful</CheckoutTitle>
            <Text3XL>Thank you for your purchase!</Text3XL>
        </PaymentSuccessDiv>
    );
}

export default PaymentSuccess;