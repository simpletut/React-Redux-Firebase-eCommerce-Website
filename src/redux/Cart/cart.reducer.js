import cartTypes from './cart.types';
import { handleAddToCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case cartTypes.ADD_TO_CART:
      console.log(handleAddToCart({
        prevCartItems: state.cartItems,
        nextCartItem: action.payload
      }), 1)
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload
        })
      }
    default:
      return state;
  }
};

export default cartReducer;