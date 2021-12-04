import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cart';

function AddOrRemoveButton({
  item
}) {
  const dispatch = useDispatch();
  /* States and Variables start */
  const { cartItems } = useSelector(state => ({
    cartItems: state.cartStore.items
  }));
  console.log(cartItems, ' These are cart items');
  /* States and Variables end */

  /* Initializers start */
  /* Initializers end */

  /* Utils start */
  /* Utils end */

  /* Handlers start */
  function addStuff() { dispatch(addToCart(item)) }
  function removeStuff() {
    dispatch(removeFromCart(item));
  }
  /* Handlers end */

  /* UI start */
  /* UI end */
  if (!cartItems[item.id]) {
    return (
      <button
        className="btn btn-success"
        onClick={() => { dispatch(addToCart(item)) }}
      >
        Add to cart
      </button>
    );
  } else {
    return (
      <div className="add-remove-btn">
        <button
          className="btn btn-success"
          onClick={removeStuff}
        >
          -
        </button>
        <div className="quantity">
          {cartItems[item.id].quantity}
        </div>
        <button
          className="btn btn-success"
          onClick={addStuff}
        >
          +
        </button>
      </div>
    )
  }
}

export default AddOrRemoveButton;
