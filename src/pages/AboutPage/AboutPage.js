import React from 'react';
import { About, ShoppingCart } from '../../components';
import { CartUtilities } from '../CartUtility/CartUtility';

const AboutPage = () => {
    const {cartItems} = CartUtilities();
  return (
    <>
      <About/>
      <ShoppingCart cartItems={cartItems}/>
      </>
  )
}

export default AboutPage;