import React from 'react';
import Hero from '../components/Banner/Hero';
import ContactBackground from '../images/contactBcg.jpeg'
import Title from '../components/PageInfo/Title';
import Contact from '../components/Contact/contact';

export default function ContactPage () {
  return (
    <>
      <Hero
        title="contact us"
        img={ ContactBackground }
      >
        <h6>Contact us for any queries.</h6>
      </Hero>
      <Contact />
    </>
  )
}
