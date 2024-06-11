import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements, AddressElement } from "@stripe/react-stripe-js";
import {
    FormContainer,
    FormRow,
    FormLabel,
    FormInput,
    TotalValue,
    TotalLabel,
    TotalContainer,
    Text3XL,
    SectionDiv,
    OrderCell,
    SubmitButton
} from './Checkout.element';
import { clearCart } from "../../actions/cartActions";
import { useDispatch } from "react-redux";

const TAX_RATES = {
    ON: 0.13,
    BC: 0.12,
    AB: 0.05,
    MB: 0.12,
    NB: 0.15,
    NL: 0.15,
    NT: 0.05,
    NS: 0.15,
    NU: 0.05,
    PE: 0.15,
    QC: 0.14975,
    SK: 0.11,
    YT: 0.05,
};

function CheckoutForm({ cartItems, setSelectedProvince }) {
    const [email, setEmail] = useState('');
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);
    const [province, setProvince] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const dispatch = useDispatch();


    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        const calculateSubtotal = () => {
            return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        };
        const calculateTotals = (province) => {
            const subTotal = calculateSubtotal();
            const taxRate = TAX_RATES[province] || 0;
            const calculatedTaxes = subTotal * taxRate;
            const calculatedTotal = subTotal + calculatedTaxes;
            setTaxes(calculatedTaxes);
            setTotal(calculatedTotal);
        };

        if (province) {
            calculateTotals(province);
        }
    }, [province, cartItems]);

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
                dispatch(clearCart());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddressChange = (e) => {
        const address = e.value.address;
        setSelectedProvince(address.state);
        setProvince(address.state);
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
            <TotalContainer>
                <TotalLabel>Subtotal:
                    <TotalValue>{subtotal.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</TotalValue>
                </TotalLabel>
                {taxes !== 0 && (
                    <>
                        <TotalLabel>Taxes:
                            <TotalValue>{taxes.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</TotalValue>    
                        </TotalLabel>
                        <TotalLabel>Total:
                            <TotalValue>{total.toLocaleString("en-CA", { style: "currency", currency: "CAD" })}</TotalValue>    
                        </TotalLabel>
                    </>
                )}
            </TotalContainer>
            <SubmitButton type="submit" disabled={!stripe} onClick={handleSubmit}>
                Pay
            </SubmitButton>
        </SectionDiv>
    );
}

export default CheckoutForm;