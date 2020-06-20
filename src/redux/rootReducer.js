import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';

export default combineReducers({
  user: userReducer,
  productsData: productsReducer
});