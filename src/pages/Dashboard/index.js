import React, { useEffect } from 'react';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import { useDispatch, useSelector } from 'react-redux';
import OrderHistory from './../../components/OrderHistory';
import './styles.scss';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory
});

const Dashboard = ({ }) => {
  const { currentUser, orderHistory } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserOrderHistory(currentUser.id)
    )
  }, []);

  return (
    <div>
      <h1>
        Order History
      </h1>

      <OrderHistory orders={orderHistory && orderHistory.data} />

    </div>
  );
};

export default Dashboard;