import React from 'react';
import Hero from '../components/Banner/Hero';
import Cart from '../components/Cart/Cart';
import cartBackground from '../images/storeBcg.jpeg';

export default function CartPage () {
  return (
    <>
      <Hero title="Cart" img={ cartBackground }>
        <p>Hehe ma Hari Bahadur</p>
      </Hero>
      <Cart />
    </>
  )
}
