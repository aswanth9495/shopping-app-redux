import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cart';
import AddOrRemoveButton from './AddOrRemoveButton';

function Cart() {
  /* States and Variables start */
  const { isOpen, items } = useSelector((state) => (state.cartStore));
  const dispatch = useDispatch();
  const cartItemIds = Object.keys(items);
  /* States and Variables end */

  /* Initializers start */
  /* Initializers end */

  /* Utils start */
  /* Utils end */

  /* Handlers start */
  /* Handlers end */

  /* UI start */
  const bodyUi = () => {
    if (cartItemIds.length <= 0) {
      return (
        <h2> Your cart is empty </h2>
      );
    } else {
      return (
        <div className="cart-body">
          {cartItemIds.map(id => (
            <div className="cart-item">
              <div className="cart-item-title">
                {items[id].name}
              </div>
              <div>
                {items[id].price} X {items[id].quantity} = {items[id].quantity*items[id].price}
              </div>
              <AddOrRemoveButton item={items[id]} />
            </div>
          ))}
        </div>
      )
    }
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
