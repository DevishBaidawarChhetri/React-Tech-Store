import React from 'react';
import Hero from '../components/Banner/Hero';
import Info from '../components/PageInfo/Info';
import AboutBackground from '../images/aboutBcg.jpeg';

export default function AboutPage () {
  return (
    <>
      <Hero title="about" img={ AboutBackground } max={ false }>
        <p>Hehe ma hari bahadur</p>
      </Hero>
      <Info />
    </>
  )
}
