const initialState = {
    products: [],
    loading: false,
    error: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS_SUCCESS':
            return{
                ...state,
                products: action.payload.map(product => ({
                    ...product,
                    quantity: 0,
                })),
                loading: false,
                error: null
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return{
                ...state,
                products: [],
                loading: false,
                error: action.payload
            }
        case 'INCREMENT_QUANTITY':
            return {
              ...state,
              products: state.products.map(product =>
                product.id === action.payload
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              ),
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                products: state.products.map(product =>
                product.id === action.payload
                    ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
                    : product
                ),
            };
        case 'UPDATE_PRODUCT_ITEM':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product
                ),
            };
        default:
            return state;
    }
}
export default productReducer;