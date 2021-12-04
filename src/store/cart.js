// ACTION TYPES
const TOGGLE_CART = "cart/TOGGLE_CART";
const ADD_TO_CART = "cart/ADD_TO_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

// ACTIONS
export const toggleCart = (isOpen) => {
  return {
    type: TOGGLE_CART,
    payload: isOpen
  }
}

export const addToCart = (itemObj) => {
  return {
    type: ADD_TO_CART,
    payload: itemObj
  }
}

export const removeFromCart = (itemObj) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemObj
  }
}

// REducer
export default function reducer(state = {
  isOpen: false,
  items: {}
}, action) {
  switch(action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        isOpen: action.payload
      }
    }
    case ADD_TO_CART: {
      const { id, ...data } = action.payload;
      let item = state.items[id];
      if(item) {
        // We should add quantity of that item
        item.quantity += 1;
      } else {
        item = {
          id,
          ...data,
          quantity: 1,
        }
        // We should create a new entry in the has
      }
      return {
        ...state,
        items: {
          ...state.items,
          [id]: item
        }
      }
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      let item = state.items[id];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[id]
      }

      return {
        ...state,
        items: { ...state.items }
      }
    }
      // Do the necessary things to add the item to the cart
    default:
      // DO NOTHING
      return state;
  }
}