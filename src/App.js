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
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
        </Routes>
      </HashRouter>
  );
}

export default App;
