import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const Admin = props => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetAddProductForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addProductStart({
      productCategory,
      productName,
      productThumbnail,
      productPrice
    }));
    resetAddProductForm();

  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                {/* Space */}
              </td>
            </tr>
            <tr>
              <td>
                <table cellSpacing="0" cellPadding="10" border="0">
                  <tbody>
                    {products.map((product, index) => {
                      const { productName, productThumbnail, documentID } = product;
                      return (
                        <tr key={index}>
                          <td className="img">
                            <img src={productThumbnail} />
                          </td>
                          <td className="name">
                            {productName}
                          </td>
                          <td className="delete">
                            <Button onClick={() => dispatch(deleteProductStart({ documentID }))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Admin;