import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@material-ui/core';
import moment from 'moment';

const columns = [
  { id: 'orderCreatedDate', label: 'Order Date', },
  { id: 'documentID', label: 'Order ID' },
  { id: 'orderTotal', label: 'Amount', },
];

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case 'orderTotal':
      return `£${columnValue}`;
    case 'orderCreatedDate':
      return moment(columnValue).format('DD/MM/YYYY');
    default:
      return columnValue;
  }
};

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%'
};

const OrderHistory = ({ orders }) => {
  const history = useHistory();
  console.log(orders, '1')

  return (
    <TableContainer>
      <Table>

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

          {(Array.isArray(orders) && orders.length > 0) && orders.map((row, pos) => {
            console.log(row)
            const { documentID } = row;


            return (
              <TableRow onClick={() => history.push(`/order/${documentID}`)} role="checkbox" tabIndex={-1} key={pos}>
                {columns.map((column, pos) => {
                  const columnName = column && column.id;
                  const columnValue = row[columnName];
                  const formattedText = formatText(columnName, columnValue);
                  return (
                    <TableCell style={styles} key={pos}>
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

export default OrderHistory;
