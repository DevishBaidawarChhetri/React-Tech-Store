import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../Context/context';

export default function Product ( { product } ) {
  return (
    <ProductConsumer>
      {
        value => {
          const { addToCart, setSingleProduct } = value;
          return (
            <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
              <div className="card">
                <div className="img-container">
                  <img
                    src={ product.image }
                    alt={ product.title }
                    className="card-img-top p-5"
                    style={ { height: "320px" } }
                  />
                  <div className="product-icon">
                    <Link to={ `/products/${ product.id }` } onClick={ () => setSingleProduct( product.id ) }>
                      <FaSearch className="icon" />
                    </Link>
                    <FaCartPlus className="icon" onClick={ () => addToCart( product.id ) } />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <p className="mb-0 text-capitalize">{ product.title }</p>
                  <p className="mb-0 text-main">${ product.price }</p>
                </div>
              </div>
            </ProductWrapper>
          );
        }
      }
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`
  .card{
    height: 100%;
    box-shadow: 5px 5px 5px 0px var(--primaryRGBA);
    transition: var(--mainTransition);
  }
  .card-body{
    background-color: #ececec;
  }
  .card:hover{
    box-shadow: 7px 7px 7px 0px var(--primaryColor);
    cursor: pointer;
  }
  .card-img-top{
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top{
    opacity: 0.5;
    transform: scale(1.15);
  }
  .img-container{
    position: relative;
  }
  .product-icon{
    position: absolute;
    transition: var(--mainTransition);
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon{
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  .card:hover .product-icon{
    opacity: 1;
  }
  .card-body{
    font-weight: bold;
    letter-spacing: 2px;
  }
`