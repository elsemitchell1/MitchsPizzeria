import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, updateCartItem, clearCart } from '../actions/cartActions';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItemQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = Math.max(state.items[itemIndex].quantity - 1, 0);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        state.items.push({
            ...action.payload,
            quantity: action.payload.quantity > 0 ? action.payload.quantity : 1
        });
      })
      .addCase(removeFromCart, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateCartItem, (state, action) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex !== -1) {
          state.items[itemIndex].quantity = action.payload.quantity;
        }
        state.items = state.items.filter(item => item.quantity > 0);
      })
      .addCase(clearCart, (state) => {
        state.items = [];
      });
  },
});

export const { incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;