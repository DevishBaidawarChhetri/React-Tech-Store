import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context/context';

export default function Footer () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            // console.log( value );
            return (
              <FooterWrapper className="text-center">
                <div className="container py-3">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-start" style={ { margin: "5px 0" } }>
                      <p className="text-capitalize m-0">
                        copyright &copy; tech store { new Date().getFullYear() }. All Rights Reserved.
                      </p>
                    </div>
                    <div className="icons col-md-6 d-flex justify-content-end">
                      {
                        value.socialIcons.map( ( item ) => {
                          return ( <a style={ { margin: "5px" } } href={ item.url } key={ item.id } >{ item.icon }</a> );
                        } )
                      }
                    </div>
                  </div>
                </div>
              </FooterWrapper>
            );
          }
        }
      </ProductConsumer>
    </>
  )
}
const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon{
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover{
    color: var(--primaryColor);
    cursor: pointer;
  }
  @media only screen and (max-width: 576px){
    .icons{
      justify-content: center !important;
      padding: 4px 0;
    }
  }
`