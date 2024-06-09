import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
        const product = state.products.find(product => product.id === action.payload);
        if (product) {
          product.quantity += 1;
        }
    },
    decrementQuantity: (state, action) => {
        const product = state.products.find(product => product.id === action.payload);
        if (product) {
          product.quantity = Math.max(product.quantity - 1, 0);
        }
    },
    updateProductItem: (state, action) => {
        const product = state.products.find(product => product.id === action.payload.id);
        if (product) {
          product.quantity = action.payload.quantity;
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectProducts = state => state.products.products;

export const { fetchProductsSuccess, fetchProductsFailure, incrementQuantity, decrementQuantity, updateProductItem } = productSlice.actions;

export default productSlice.reducer;