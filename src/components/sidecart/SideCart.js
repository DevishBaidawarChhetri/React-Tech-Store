import React from 'react';
import { ProductConsumer } from '../context/context';
import styled from 'styled-components';

export default function SideCart () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            const { cartOpen, closeCart, cart } = value;
            return (
              <CartWrapper show={ cartOpen } onClick={ closeCart }>
                <p>Cart Items</p>
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
  @media(min-width: 576px){
    width: 15rem;
  }
`