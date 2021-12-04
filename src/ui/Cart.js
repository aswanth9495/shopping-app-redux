import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cart';

function Cart() {
  /* States and Variables start */
  const { isOpen } = useSelector((state) => (state.cartStore));
  const dispatch = useDispatch();
  /* States and Variables end */

  /* Initializers start */
  /* Initializers end */

  /* Utils start */
  /* Utils end */

  /* Handlers start */
  /* Handlers end */

  /* UI start */
  const bodyUi = () => {
    return (
      <h2> This is the body UI </h2>
    );
  };
  /* UI end */
  return (
    <div
      className="cart"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="cart-title">
        <h2> Cart </h2>
        <button
          className="btn btn-danger"
          onClick={() => { dispatch(toggleCart(false))}}
        >
          Exit
        </button>
      </div>
      {bodyUi()}
    </div>
  );
}

export default Cart;
