import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';

export default combineReducers({
  user: userReducer
});