import React, { useEffect } from 'react';
import { getOrderDetailsStart } from '../../redux/Orders/orders.actions';
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from './../../components/OrderDetails';
import { useParams } from 'react-router-dom';
// import './styles.scss';

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails
});

const Order = ({ }) => {
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;
  const { orderID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getOrderDetailsStart(orderID)
    )
  }, []);

  return (
    <div>
      <h1>
        Order ID: #{orderID}
      </h1>

      <OrderDetails order={orderDetails} />

      <br />

      <h3 style={{ width: '100%', textAlign: 'right' }}>
        Total: {orderTotal}
      </h3>
    </div>
  );
};

export default Order;