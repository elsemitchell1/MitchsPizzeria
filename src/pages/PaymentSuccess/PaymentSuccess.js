import React from 'react';
import { SuccessTitle, PaymentSuccessDiv, SuccessText } from '../../components/CheckoutInfo/Checkout.element';

function PaymentSuccess() {
    return (
        <PaymentSuccessDiv>
            <SuccessTitle>Payment Successful</SuccessTitle>
            <SuccessText>Thank you for your purchase!</SuccessText>
        </PaymentSuccessDiv>
    );
}

export default PaymentSuccess;