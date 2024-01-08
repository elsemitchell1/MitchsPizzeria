export const addToCart = (product) => {
    if(product.quantity < 1){
        product.quantity = 1;
    }
    return { type: 'ADD_TO_CART', payload: product };
};
  
export const removeFromCart = (product) => {
    return { type: 'REMOVE_FROM_CART', payload: product };
};
  
export const updateCartItem = (product, quantity) => {
    return { type: 'UPDATE_CART_ITEM', payload: { id: product.id, quantity } };
};
  
export const clearCart = () => {
    return { type: 'CLEAR_CART' };
};