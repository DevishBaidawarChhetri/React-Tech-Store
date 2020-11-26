import React from 'react';
import Hero from '../components/Banner/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
export default function HomePage () {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link">
          Our Products
        </Link>
      </Hero>
      <Services />
    </>
  )
}
