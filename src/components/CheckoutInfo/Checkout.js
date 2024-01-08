import React, {useState} from "react";
import {firestore} from "../../firebase";
import {addDoc, collection, getDocs, where, query} from "@firebase/firestore";
import { CheckoutContainer,
    CheckoutTitle,
    FormContainer,
    FormRow,
    FormLabel,
    FormInput,
    FormTextArea,
    TotalValue,
    SubmitButton,
    TotalLabel,
    OrderComplete,
    OrderCompleteH1,
    OrderListUl,
    OrderListLi} from "./Checkout.element";
import {Button} from "../../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { updateProductItem } from "../../actions/productActions";

function Checkout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const ref = collection(firestore, "Customers");
    const invoiceRef = collection(firestore, "Invoices");

    const customerExist = async (name, address) => {
        const customerRef = collection(firestore, "Customers");
        const querySnapshot = await getDocs(query(customerRef, where("name", "==", name), where("address", "==", address)));
        return !querySnapshot.empty;
    }

    const cartItems = useSelector((state) => state.cart.items);
    const products = useSelector((state) => state.products.products);

    const totalPrice = () => {
        let total = 0;
        for(const item of cartItems){
            total += item.price * item.quantity;
        }
        return total.toLocaleString("en-CA", {style:"currency", currency:"CAD"});
    }

    const invoice = {
        customer: {
            name: name,
            email: email,
            address: address
        },
        items: cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: totalPrice(),
        timestamp: new Date(),
    }

    const addInvoice = async (invoice) => {
        try{
            await addDoc(invoiceRef, invoice);
        } catch (e){
            console.log(e);
        }
    }

    const cart = () => {
        return (
            <>
                <OrderListUl>
                    {cartItems.map((item) => (
                        <OrderListLi key={item.name}>
                            {item.quantity} x {item.name} - {item.productType}
                        </OrderListLi>
                    ))}
                </OrderListUl>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let customer = {
            name: name,
            email: email,
            address: address,
        }

        try{
            const customerExists = await customerExist(name, address);
            if(!customerExists){
                await addDoc(ref, customer);
            }
            addInvoice(invoice);
        } catch(e) {
            alert(e);
        }

        setSubmitted(true);
    };

    const clearItems = () => {
        dispatch(clearCart());
        for(const product of products){
            dispatch(updateProductItem(product.id, 0));
        }
        navigate('/');
    }
    return(
        <CheckoutContainer>
            <CheckoutTitle>
                Checkout <br/>
                {!submitted && cart()}
            </CheckoutTitle>
            {submitted ? (
                <OrderComplete>
                    <OrderCompleteH1>{name}, your order of: </OrderCompleteH1>
                    <br/> {cart()}
                    <OrderCompleteH1>Will be delivered to:</OrderCompleteH1> 
                    <br/>&nbsp;&nbsp;{address}<br/>
                    <OrderCompleteH1>
                        A payment of {totalPrice()} will be required.
                    </OrderCompleteH1>
                    <Button onClick={clearItems}>OK</Button>
                </OrderComplete>
            ) : (
                <FormContainer onSubmit={handleSubmit}>
                    <FormRow>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <FormInput
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FormRow>
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
                    <FormRow>
                        <FormLabel htmlFor="address">Address:</FormLabel>
                        <FormTextArea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </FormRow>
                    <TotalLabel>Total: 
                        <TotalValue>{totalPrice()}</TotalValue>
                    </TotalLabel>
                    <SubmitButton type="submit">Place Order</SubmitButton>
                </FormContainer>
            )}
        </CheckoutContainer>
    )
}

export default Checkout;