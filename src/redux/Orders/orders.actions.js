import ordersTypes from './orders.types';

export const saveOrderHistory = order => ({
  type: ordersTypes.SAVE_ORDER_HISTORY_START,
  payload: order
});

export const getUserOrderHistory = uid => ({
  type: ordersTypes.GET_USER_ORDER_HISTORY_START,
  payload: uid
});

export const setUserOrderHistory = history => ({
  type: ordersTypes.SET_USER_ORDER_HISOTRY,
  payload: history
});

export const getOrderDetailsStart = orderID => ({
  type: ordersTypes.GET_ORDER_DETAILS_START,
  payload: orderID
});

export const setOrderDetails = order => ({
  type: ordersTypes.SET_ORDER_DETAILS,
  payload: order
});