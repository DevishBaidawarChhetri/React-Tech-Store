import React from 'react';
import { ProductConsumer } from '../Context/context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideCart () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            const { cartOpen, closeCart, cart, cartTotal } = value;
            return (
              <CartWrapper show={ cartOpen } onClick={ closeCart }>
                <ul>
                  {
                    cart.map( item => {
                      return ( <li key={ item.id } className="cart-item mb-4 p-3">
                        <img width="50px" src={ item.image } alt={ item.title } />
                        <div className="mt-3">
                          <h6 className="text-title text-uppercase">{ item.title }</h6>
                          <h6 className="text-capitalize">quantity: { item.count }</h6>
                        </div>
                      </li> );
                    } )
                  }
                </ul>
                <h5 className="text-capitalize text-main">cart total: ${ cartTotal }</h5>
                <div className="text-center mb-5">
                  <Link to="/cart" className="main-link">cart page</Link>
                </div>
              </CartWrapper>
            );
          }
        }
      </ProductConsumer>
    </>
  )
}

// Styled Components
const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 3px solid var(--primaryColor);
  transition:var(--mainTransition);
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  @media only screen and (min-width: 576px){
    width: 20rem;
  }
  overflow: scroll;
  padding: 1.5rem;
  text-align: center;
  ul{
    padding: 0 !important;
  }
  .cart-item{
    background: var(--lightGrey);
    list-style-type: none;
    outline: 2px solid var(--primaryColor);
    outline-offset: -10px;
  }
`