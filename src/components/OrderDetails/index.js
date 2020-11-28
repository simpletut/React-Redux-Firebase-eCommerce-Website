import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOrderDetails } from './../../redux/Orders/orders.actions';
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@material-ui/core';

const columns = [
  { id: 'productThumbnail', label: '', align: 'left' },
  { id: 'productName', label: 'Name', align: 'left' },
  { id: 'productPrice', label: 'Amount', align: 'left' },
  { id: 'quantity', label: 'Quantity', align: 'left' },
];

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case 'productPrice':
      return `£${columnValue}`;
    case 'productThumbnail':
      return <img src={columnValue} width={250} />
    default:
      return columnValue;
  }
};

const styles = {
  fontSize: '16px',
  width: '10%'
};

const OrderDetails = ({ order }) => {
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;

  useEffect(() => {
    return () => {
      dispatch(
        setOrderDetails({})
      )
    }
  }, [])

  return (
    <TableContainer>
      <Table tableLayout={'fixed'}>

        <TableHead>
          <TableRow>

            {columns.map((column, pos) => (
              <TableCell
                key={pos}
                style={styles}
              >
                {column.label}
              </TableCell>
            ))}

          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orderItems) && orderItems.length > 0) && orderItems.map((row, pos) => {
            return (
              <TableRow role="checkbox" tabIndex={-1} key={pos}>
                {columns.map((column, pos) => {
                  const columnName = column && column.id;
                  const columnValue = row[columnName];
                  const formattedText = formatText(columnName, columnValue);
                  return (
                    <TableCell style={styles} key={pos} >
                      {formattedText}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}

        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default OrderDetails;
