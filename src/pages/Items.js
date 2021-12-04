import React from 'react';
import { useParams } from 'react-router';
import { getItems } from '../dummy/index';

import AddOrRemoveButton from '../ui/AddOrRemoveButton';

function Items() {
  const { categoryId } = useParams();
  const items = getItems(parseInt(categoryId));
  // const redirectToPage = () => {
  //   console.log(history);
  // }
  // setTimeout(redirectToPage, 2000)
  /* States and Variables start */
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
      className="category-items"
    >
      {items.map((item) => (
        <div className="category-item">
          <img 
            className="category-item-poster"
            src={item.poster}
            alt="poster"
          />
           <div className="category-item-title">
            {item.name}
          </div>
          <div className="category-item-price">
            {item.price}
          </div>
          <AddOrRemoveButton item={item} />
        </div>
      ))}
    </div>
  );
}

export default Items;
