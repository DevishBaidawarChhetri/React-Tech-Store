import React from 'react';
import Title from '../PageInfo/Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart ({history}) {
  return (
    <section className="py-5">
      <div className="container">
        <Title
          title="Cart Items"
          center
        />
      </div>
      <CartColumns />
      <CartList />
      <CartTotals history={ history }/>
    </section>
  )
}
