import { createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../firebase'; // Import your Firestore configuration
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const productCollection = collection(firestore, 'Products');
      const productsSnapshot = await getDocs(productCollection);
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        quantity: 0,
      }));
      return products;
    } catch (error) {
      throw error;
    }
  }
);

export const incrementQuantity = (productId) => {
    return { type: 'products/incrementQuantity', payload: productId };
  };
  
  export const decrementQuantity = (productId) => {
    return { type: 'products/decrementQuantity', payload: productId };
  };
  
  export const updateProductItem = (productId, quantity) => {
    return { type: 'products/updateProductItem', payload: { id: productId, quantity } };
  };