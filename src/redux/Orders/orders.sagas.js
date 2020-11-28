import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import ordersTypes from './orders.types';
import { handleSaveOrder, handleGetUserOrderHisotry, handleGetOrder } from './orders.helpers';
import { clearCart } from './../Cart/cart.actions';
import { setUserOrderHistory, setOrderDetails } from './orders.actions';

export function* saveOrder({ payload }) {
  try {
    const timestamp = new Date().toDateString();
    yield handleSaveOrder({
      ...payload,
      orderUserUID: auth.currentUser.uid,
      orderCreatedDate: timestamp
    });
    yield put(
      clearCart()
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetUserOrderHisotry(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY_START, getUserOrderHistory);
}

export function* getOrderDetails({ payload }) {
  try {
    const order = yield handleGetOrder(payload);
    yield put(
      setOrderDetails(order)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
  ])
}