import React, { useState } from "react";
import { PaymentElement, useStripe, useElements, AddressElement } from "@stripe/react-stripe-js";
import {
    FormContainer,
    FormRow,
    FormLabel,
    FormInput,
    TotalValue,
    TotalLabel,
    ButtonStyled,
    Text3XL,
    SectionDiv,
    OrderCell
} from './Checkout.element';

function CheckoutForm({ cartItems, setSelectedProvince }) {
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const totalPrice = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.quantity;
        }
        return total.toLocaleString("en-CA", { style: "currency", currency: "CAD" });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.error('stripe or elements unavailable');
            return;
        }

        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/MitchsPizzeria/#/PaymentSuccess`,
                },
            });

            if (error) {
                console.error(error);
            } else if (paymentIntent.status === 'succeeded') {
                console.log("success");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddressChange = (e) => {
        const address = e.value.address;
        setSelectedProvince(address.state);
    }

    return (
        <SectionDiv>
            <Text3XL>Payment Details:</Text3XL>
            <FormContainer onSubmit={handleSubmit}>
                <FormRow>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormRow>
            </FormContainer>
            <OrderCell>
                <AddressElement options={{
                    mode: "shipping",
                    allowedCountries: ['CA'],
                }} onChange={handleAddressChange}/>
                <PaymentElement />
            </OrderCell>
            <TotalLabel>Total:
                <TotalValue>{totalPrice()}</TotalValue>
            </TotalLabel>
            <ButtonStyled type="submit" disabled={!stripe} onClick={handleSubmit}>
                Pay
            </ButtonStyled>
        </SectionDiv>
    );
}

export default CheckoutForm;