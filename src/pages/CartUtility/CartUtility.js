import { useEffect, useState } from "react";

export const CartUtilities = () => {
    const [cartItems, setCartItems] = useState([]);

    const updateCartItems = () => {
        const cart = sessionStorage.getItem('cart');
        const parsedCartItems = cart ? JSON.parse(cart) : [];
        setCartItems(parsedCartItems);
    };

    useEffect(() => {
        updateCartItems();
    }, []);

    const handleQuantityChange = (product, newQuantity) => {
        if(newQuantity === 0){
            handleRemoveFromCart(product);
        } else {
            const updatedCartItems = cartItems.map((item) => {
                if (item.name === product.name) {
                return { ...item, quantity: newQuantity };
                }
                return item;
            });
            setCartItems(updatedCartItems);
            sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
        }
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }
    const handleRemoveFromCart = (product) => {
        const updatedCartItems = cartItems.filter((item) => item.name !== product.name);
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return{
        cartItems,
        handleQuantityChange,
        handleAddToCart,
        handleRemoveFromCart,
    };
};