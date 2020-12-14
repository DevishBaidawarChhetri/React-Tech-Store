import React from 'react';
import { ProductConsumer } from '../Context/context';
import Title from '../PageInfo/Title';
import Product from '../Product/Product';
import ProductFilter from './ProductFilter';

export default function Products () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            const { filteredProducts } = value;
            return (
              <section className="py-5">
                <div className="container">
                  <Title center="true" title="Our Products" />
                  <ProductFilter />
                  {/* Total Item count */ }
                  <div className="row">
                    <div className="col-10 mx-auto">
                      <h6 className="text-title">
                        Total Products: { filteredProducts.length }
                      </h6>
                    </div>
                  </div>

                  {/* Products */ }
                  <div className="row py-5">
                    {
                      filteredProducts.length === 0
                        ? (
                          <div className="col text-title text-center">
                            Sorry, No items matched.
                          </div>
                        )
                        : (
                          filteredProducts.map( product => {
                            return (
                              <Product key={ product.id } product={ product } />
                            );
                          } )
                        )
                    }
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
