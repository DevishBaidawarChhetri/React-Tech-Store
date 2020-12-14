import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context/context';

export default function ProductFilter () {
  return (
    <>
      <ProductConsumer>
        {
          value => {
            const {
              search,
              minPrice,
              maxPrice,
              price,
              company,
              shipping,
              handleChange,
              storeProducts
            } = value;

            let companies = new Set();
            companies.add( 'all' );
            for ( let product in storeProducts ) {
              companies.add( storeProducts[ product ][ "company" ] );
            }
            companies = [ ...companies ];
            // console.log( companies );

            return (
              <div className="row my-5">
                <div className="col-10 mx-auto">
                  <FilterWrapper>
                    {/* Search */ }
                    <div>
                      <label htmlFor="serach">Search Products</label>
                      <input
                        id="search"
                        type="text"
                        name="search"
                        className="filter-item"
                        placeholder="Eg.: Samsung Galaxy Note 10"
                        onChange={ handleChange }
                        value={ search }
                      />
                    </div>
                    {/* Company */ }
                    <div>
                      <label htmlFor="company">company</label>
                      <select
                        name="company"
                        id="company"
                        className="filter-item"
                        value={ company }
                        onChange={ handleChange }
                      >
                        {
                          companies.map( ( item, index ) => {
                            return (
                              <option key={ index } value={ item }>{ item }</option>
                            );
                          } )
                        }
                      </select>
                    </div>

                    {/* price */ }
                    <div>
                      <label htmlFor="price">
                        <p className="mb-2">
                          product price: <span>${ price }</span>
                        </p>
                      </label>
                      <input
                        type="range"
                        name="price"
                        id="price"
                        className="filter-price"
                        min={ minPrice }
                        max={ maxPrice }
                        value={ price }
                        onChange={ handleChange }
                      />
                    </div>

                    {/* shipping */ }
                    <div className="text-center">
                      <label htmlFor="shipping" className="mx-2">Free shipping</label>
                      <input
                        type="checkbox"
                        name="shipping"
                        id="shipping"
                        onChange={ handleChange }
                        checked={ shipping && true }
                      />
                    </div>
                  </FilterWrapper>
                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    </>
  )
}
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  align-items: center;
  label{
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item, .filter-price{
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.3rem;
    border: 2px solid var(--primaryColor);
  }
`