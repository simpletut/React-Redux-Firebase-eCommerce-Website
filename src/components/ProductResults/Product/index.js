import React from 'react';
import Button from './../../forms/Button';
import { addProduct } from './../../../redux/Cart/cart.actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Product = ({
  product
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

  return (
    <div className="product">
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              {productName}
            </span>
          </li>
          <li>
            <span className="price">
              £{productPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Product;