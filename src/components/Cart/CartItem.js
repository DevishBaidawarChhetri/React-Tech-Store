import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

export default function CartItem ( { cartItem, increment, decrement, removeProduct } ) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img className="img-fluid" src={ image } alt={ title } width="80" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        { title }
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>
        $ { price }
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaMinus
              onClick={ () => decrement( id ) }
              className="cart-icon text-secondary"
            />
            <span className="text-title text-muted mx-3">{ count }</span>
            <FaPlus
              onClick={ () => increment( id ) }
              className="cart-icon text-success"
            />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-3">
        <FaTrash
          className="text-danger cart-icon"
          onClick={ () => removeProduct( id ) }
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="text-muted">Total: $ { total }</strong>
      </div>
    </div>
  )
}
