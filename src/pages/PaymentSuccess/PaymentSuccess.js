import React from 'react';
import { CheckoutTitle, SectionDiv, Text3XL } from '../../components/CheckoutInfo/Checkout.element';

function PaymentSuccess() {
    return (
        <SectionDiv>
            <CheckoutTitle>Payment Successful</CheckoutTitle>
            <Text3XL>Thank you for your purchase!</Text3XL>
        </SectionDiv>
    );
}

export default PaymentSuccess;