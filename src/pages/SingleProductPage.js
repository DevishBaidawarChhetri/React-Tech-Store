import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Banner/Hero';
import singleProductImage from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../components/Context/context';

export default function SingleProductPage () {
  return (
    <>
      <Hero img={ singleProductImage } title="single product" />
      <ProductConsumer>
        {
          value => {
            const { singleProduct, addToCart, loading } = value;
            if ( loading )
            {
              console.log( 'hello from laoding' );
              return ( <h1>Product Loading...</h1> );
            }
            const { id, company, description, image, price, title } = singleProduct;
            return (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <img src={ `../${ image }` } alt={ title } className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <h5 className="text-title mb-4">model: { title }</h5>
                      <h5 className="text-capitalize text-muted mb-4">company: { company }</h5>
                      <h5 className="text-main text-capitalize mb-4">price: ${ price }</h5>
                      <p className="text-capitalize text-title mt-3">product info:</p>
                      <p>{ description }</p>
                      <button type="button" className="main-link" onClick={ () => addToCart( id ) } style={ { marginRight: '1.2rem' } }>
                        Add to cart
                      </button>
                      <Link to="/products" className="main-link">all products</Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        }
      </ProductConsumer>
    </>
  )
}
