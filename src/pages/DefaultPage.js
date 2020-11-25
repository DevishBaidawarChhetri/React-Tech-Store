import React from 'react';
import Hero from '../components/Banner/Hero';
import { Link } from 'react-router-dom';
import defaultBackground from '../images/defaultBcg.jpeg';

export default function DefaultPage () {
  return (
    <>
      <Hero img={ defaultBackground } title={ 404 } max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link">Return to home</Link>
      </Hero>
    </>
  )
}
