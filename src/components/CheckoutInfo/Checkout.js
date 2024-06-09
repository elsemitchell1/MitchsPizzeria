import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { addDoc, collection, getDocs, where, query } from "@firebase/firestore";
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
} from "./Checkout.element";
import { Button } from "../../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { updateProductItem } from "../../actions/productActions";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        fetch("https://pizzaserver-bqim.onrender.com/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch("https://pizzaserver-bqim.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems),
        }).then(async (r) => {
            if (!r.ok) {
                const error = await r.json();
                throw new Error(error.error.message);
            }
            const { clientSecret: fetchedClientSecret } = await r.json();
            setClientSecret(fetchedClientSecret);
        }).catch((error) => {
            console.error("Error creating payment intent:", error.message);
        });
    }, []);

    const products = useSelector((state) => state.products.products);

    const totalPrice = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.quantity;
        }
        return total.toLocaleString("en-CA", { style: "currency", currency: "CAD" });
    }

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
                    {stripePromise && clientSecret && (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm cartItems={cartItems} />
                        </Elements>
                    )}
                </SectionDiv>
            </FlexRow>
        </FlexCol>
    );
}

export default Checkout;