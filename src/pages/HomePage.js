import React from 'react';
import { ProductConsumer } from '../components/context/context';

export default function HomePage () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            console.log( value );
            return <h1>Hello from home page</h1>
          }
        }
      </ProductConsumer>
    </>
  )
}
