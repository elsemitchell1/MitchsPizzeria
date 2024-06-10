import React, { useEffect, useState } from "react";
import {
    CheckoutTitle,
    OrderListUl,
    OrderListLi,
    FlexRow,
    FlexCol,
    SectionDiv,
    Text3XL,
    OrderRow,
    OrderCell,
    PaymentLoadingContainer,
    Spinner,
    LoadingMessage,
} from "./Checkout.element";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedProvince, setSelectedProvince] = useState("");
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const fetchPublishableKey = async () => {
            try {
                const response = await fetch("https://pizzaserver-bqim.onrender.com/config");
                const { publishableKey } = await response.json();
                setStripePromise(loadStripe(publishableKey));
            } catch (error) {
                console.error("Error fetching publishable key:", error);
            }
        };

        fetchPublishableKey();
    }, []);

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await fetch("https://pizzaserver-bqim.onrender.com/create-payment-intent", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({items: cartItems, province: selectedProvince}),
                });

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error.message);
                }

                const { clientSecret: fetchedClientSecret } = await response.json();
                setClientSecret(fetchedClientSecret);
            } catch (error) {
                console.error("Error creating payment intent:", error.message);
            } finally {
                setLoading(false);
            }
        };

        createPaymentIntent();
    }, [cartItems, selectedProvince]);

    const cart = () => {
        return (
            <OrderListUl>
                {cartItems.map((item) => (
                    <OrderListLi key={item.name}>
                        <OrderRow>
                            <OrderCell>
                                {item.quantity} x {item.name} - {item.productType}
                            </OrderCell>
                            <OrderCell>
                                {(item.quantity * item.price).toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
                            </OrderCell>
                        </OrderRow>
                    </OrderListLi>
                ))}
            </OrderListUl>
        );
    }

    return (
        <FlexCol>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <FlexRow>
                <SectionDiv>
                    <Text3XL>Order Details:</Text3XL>
                    {cart()}
                </SectionDiv>
                <SectionDiv>
                    {loading ? (
                        <PaymentLoadingContainer>
                            <Spinner/>
                            <LoadingMessage>Payment Loading...</LoadingMessage>
                        </PaymentLoadingContainer>
                    ) : (
                        stripePromise && clientSecret && (
                            <Elements stripe={stripePromise} options={{ clientSecret }}>
                            <CheckoutForm cartItems={cartItems} setSelectedProvince={setSelectedProvince} />
                            </Elements>
                        )
                    )}
                </SectionDiv>
            </FlexRow>
        </FlexCol>
    );
}

export default Checkout;