import cartTypes from './cart.types';
import { handleAddToCart, handleRemoveCartItem,
  handleReduceCartItem } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload
        })
      };
    case cartTypes.REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload
        })
      };
    case cartTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload
        })
      };
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        ...INITIAL_STATE
      }
    default:
      return state;
  }
};

export default cartReducer;