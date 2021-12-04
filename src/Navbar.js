import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './dummy/index';
import { toggleCart } from './store/cart';

function Navbar(props) {
  /* States and Variables start */
  const categories = getCategories();
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
  /* UI end */

  return (
    <div
      className="navbar"
    >
      <Link 
        to="/"
        className="navbar-item"
      > Home </Link>
      <Link 
        to="/posts"
        className="navbar-item"
      > Posts </Link>
      <Link 
        to="about"
        className="navbar-item"
      > About </Link>
      {categories.map((category) => (
        <Link
          to={`items/${category.id}`}
          className="navbar-item"
        >
          {category.name}
        </Link>
      ))}
      <button 
        className="btn btn-danger"
        onClick={() => { dispatch(toggleCart(!isOpen)) }}
      >
        Cart
      </button>
    </div>
  );
}

export default Navbar;
