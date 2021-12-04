import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../store/posts';

function Posts() {
  /* States and Variables start */
  const dispatch = useDispatch();
  const {
    posts,
    items,
  } = useSelector(state => ({
    posts: state.postsStore.posts,
    items: state.cartStore.items
  }));

  console.log(posts, items, 'These are the posts and item from cart');
  /* States and Variables end */

  /* Initializers start */
  useEffect(() => {
    dispatch(getPosts());
  },[])
  /* Initializers end */

  /* Utils start */
  /* Utils end */

  /* Handlers start */
  /* Handlers end */

  /* UI start */
  /* UI end */

  return (
    <div
      className="class"
    >
      {posts.map((item) => (
        <div>
          <h1> {item.title} </h1>
          <p> {item.body} </p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
