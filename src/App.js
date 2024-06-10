import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import {Navbar} from './components';
import { HashRouter, Route, Routes } 
from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Pizza from './pages/PizzaPage/PizzaPage';
import Drink from './pages/DrinkPage/DrinkPage';
import Dessert from './pages/DessertPage/DessertPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Cart from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';

function App() {
  const dispatch = useDispatch(); // Get the dispatch function
  const { loading, error } = useSelector(state => state.products); // Get loading and error state from Redux store

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the fetchProducts action when the component mounts
  }, [dispatch]); // Ensure useEffect runs only once after mount

  if (loading) {
    // Render loading indicator while products are being fetched
    return <div>Loading...</div>;
  }

  if (error) {
    // Render error message if there's an error fetching products
    return <div>Error: {error.message}</div>;
  }
  return (
      <HashRouter basename='/'>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Pizza' element={<Pizza/>}/>
          <Route path='/Drinks' element={<Drink/>}/>
          <Route path='/Dessert' element={<Dessert/>}/>
          <Route path='/Facts' element={<AboutPage/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/ProductInfo' element={<ProductPage/>}/>
          <Route path='/Checkout' element={<CheckoutPage/>}/>
          <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
