import React from 'react';
import { ProductConsumer } from '../components/context/context';

export default function HomePage () {
  return (
    <>
      <ProductConsumer>
        { value => <h2>{ value }</h2> }
      </ProductConsumer>
    </>
  )
}
