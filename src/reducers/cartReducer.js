const initialState = {
    items: [], // Array of cart items
  };
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ).filter(item => item.quantity > 0),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};
  
export default cartReducer;