import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const Products = ({ }) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  return (
    <div className="products">
      {products.map((product, pos) => {
        const { productThumbnail, productName, productPrice } = product;
        if (!productName || !productThumbnail || !productPrice) return null;

        return (
          <div key={pos} className="product">
            <div className="image">
              <img src={productThumbnail} alt={productName} />
            </div>
            <div className="details">
              <span className="name">
                {productName}
              </span>
              <span className="price">
                {productPrice}
              </span>
              <div className="addToCart">
                <button type="button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
