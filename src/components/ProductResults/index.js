import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../forms/FormSelect';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const { filterType } = useParams();
  const history = useHistory();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      fetchProductsStart(filterType)
    )
  }, [filterType]);

  const handleFilterChange = (e) => {
    history.push(`/search/${e.target.value}`)
  };

  if (!Array.isArray(products)) return null;
  if (products.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFormSelect = {
    options: [{
      name: 'Show all',
      value: ''
    },
    {
      name: 'Mens',
      value: 'mens'
    },
    {
      name: 'Womens',
      value: 'womens'
    }],
    defaultValue: filterType,
    handleChange: handleFilterChange
  };

  return (
    <div className="products">

      <h1>
        Browse Products {filterType}
      </h1>

      <FormSelect {...configFormSelect} />

      <div className="productResults">
        {products.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice
          };

          return (
            <Product {...configProduct} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductResults;
