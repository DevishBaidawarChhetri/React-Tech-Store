import React from 'react';
import Products from '../components/Product/Products';
import Hero from '../components/Banner/Hero';
import productBackground from '../images/productsBcg.jpeg';

export default function ProductsPage () {
  return (
    <>
      <Hero
        img={ productBackground }
        title="product"
      />
      <Products />
    </>
  )
}
