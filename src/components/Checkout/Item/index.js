import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from './../../../redux/Cart/cart.actions';

const Item = ({
  productName,
  productThumbnail,
  quantity,
  productPrice,
  documentID
}) => {
  const dispatch = useDispatch();

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    )
  };

  return (
    <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>
            {productName}
          </td>
          <td>
            {quantity}
          </td>
          <td>
            £{productPrice}
          </td>
          <td align="center">
            <span onClick={() => handleRemoveCartItem(documentID)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;