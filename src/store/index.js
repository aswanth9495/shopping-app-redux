import { createStore, combineReducers } from 'redux';

import cartReducer from './cart';

const reducer = combineReducers({
  cartStore : cartReducer,
});

const store = createStore(reducer);

export default store;

