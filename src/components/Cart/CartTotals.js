import React from 'react';
import { ProductConsumer } from '../Context/context';
import PayPalBtn from './PayPalBtn';

export default function CartTotals ( { history } ) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {
            value => {
              const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
              // console.log( value );
              return (
                <div className="col text-center my-4">
                  <button className="main-link text-capitalize mb-4" onClick={ clearCart }>Clear Cart</button>
                  <h3>Subtotal: $ { cartSubTotal }</h3>
                  <h3>Tax: $ { cartTax }</h3>
                  <h3>Total: $ { cartTotal }</h3>
                  <div className="mt-5">
                    <PayPalBtn
                      history={ history }
                      cartTotal={ cartTotal }
                      clearCart={ clearCart }
                    />
                  </div>
                </div>
              );
            }
          }
        </ProductConsumer>
      </div>
    </div>
  )
}
