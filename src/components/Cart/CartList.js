import React from 'react';
import { ProductConsumer } from '../Context/context';
import CartItem from './CartItem';

export default function CartList () {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {
              value => {
                // console.log( value );
                const { cart, increment, decrement, removeProduct } = value;
                if ( cart.length === 0 ) {
                  return (
                    <h1 className="text-title text-center">
                      Currently your cart is empty.
                    </h1>
                  );
                }
                return (
                  <>
                    {
                      cart.map( ( item ) => {
                        return (
                          <CartItem
                            key={ item.id }
                            cartItem={ item }
                            increment={ increment }
                            decrement={ decrement }
                            removeProduct={ removeProduct }
                          />
                        );
                      } )
                    }
                  </>
                );
              }
            }
          </ProductConsumer>
        </div>
      </div>
    </div>
  )
}
