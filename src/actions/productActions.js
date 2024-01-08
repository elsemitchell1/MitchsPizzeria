import { firestore } from '../firebase'; // Import your Firestore configuration
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
        const productCollection = collection(firestore, 'Products');
        const productsSnapshot = await getDocs(productCollection);
        const products = productsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
        } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
        }
    };
};

export const incrementQuantity = (productId) => {
    return { type: 'INCREMENT_QUANTITY', payload: productId };
};

export const decrementQuantity = (productId) => {
    return { type: 'DECREMENT_QUANTITY', payload: productId };
};
export const updateProductItem = (productId, quantity) => {
    return { type: 'UPDATE_PRODUCT_ITEM', payload: { id: productId, quantity } };
};