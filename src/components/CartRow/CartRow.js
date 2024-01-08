import React from 'react';
import QuantityButton from '../QuantityButton/QuantityButton';
import { CartRowBubble, 
    CartRowContainer, 
    CartRowInfoContainer,
    CartRowImg,
    CartRowInfo, 
    CheckOutButton,
    CheckOutButtonContainer,
    CheckOutTotal,
    CartRowBubbleHeading,
    CartRowInfoHeading} from './CartRow.element';
import RemoveButton from '../RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';

function CartRow(){
    const cartItems = useSelector((state) => state.cart.items);
    
    const totalPrice = () => {
        let total = 0;
        for(const item of cartItems){
            total += item.price * item.quantity;
        }
        return total.toLocaleString("en-CA", {style:"currency", currency:"CAD"});
    }

    const cartEmpty = cartItems.length === 0;
  
    return(
        <CartRowContainer>
            <CartRowBubbleHeading>
                <CartRowInfoContainer>
                    <CartRowInfo></CartRowInfo>
                </CartRowInfoContainer>
                <CartRowInfoContainer>
                    <CartRowInfo>Item</CartRowInfo>
                </CartRowInfoContainer>
                <CartRowInfoContainer>
                    <CartRowInfo>Price</CartRowInfo>
                </CartRowInfoContainer>
                <CartRowInfoContainer>
                    <CartRowInfo>Quantity</CartRowInfo>
                </CartRowInfoContainer>
                <CartRowInfoContainer>
                    <CartRowInfo>Total</CartRowInfo>
                </CartRowInfoContainer>
            </CartRowBubbleHeading>
            {cartItems.map((product) => (
                <CartRowBubble key={product.name}>
                    <CartRowInfoContainer>
                        <CartRowImg src={product.image}/>
                    </CartRowInfoContainer>
                    <CartRowInfoContainer>
                        <CartRowInfoHeading>Item:</CartRowInfoHeading>
                        <CartRowInfo>{product.name}</CartRowInfo>
                    </CartRowInfoContainer>
                    <CartRowInfoContainer>
                        <CartRowInfoHeading>Price:</CartRowInfoHeading>
                        <CartRowInfo>{product.price.toLocaleString("en-CA", {style:"currency", currency:"CAD"})}</CartRowInfo>
                    </CartRowInfoContainer>
                    <CartRowInfoContainer>
                        <CartRowInfoHeading>Quantity:</CartRowInfoHeading>
                        <QuantityButton product={product}/>
                    </CartRowInfoContainer>
                    <CartRowInfoContainer>
                        <CartRowInfoHeading>Total:</CartRowInfoHeading>
                        <CartRowInfo>{(product.price * product.quantity).toLocaleString("en-CA", {style:"currency", currency:"CAD"})}</CartRowInfo>
                        <RemoveButton product={product}></RemoveButton>
                    </CartRowInfoContainer>
                </CartRowBubble>
            ))}
            <CheckOutButtonContainer>
                <CheckOutTotal>
                    Total: {totalPrice()}
                </CheckOutTotal>
                {cartEmpty ? (
                    <CheckOutButton>Check Out</CheckOutButton>
                ) : (
                    <CheckOutButton  to='/Checkout'>Check Out</CheckOutButton>
                )}
            </CheckOutButtonContainer>
        </CartRowContainer>
    );
}

export default CartRow;