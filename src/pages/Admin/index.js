import React, { useState } from 'react';
import './styles.scss';

import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import Button from './../../components/forms/Button';

const Admin = props => {
  const [hideModal, setHideModal] = useState(true);
  const [productName, setProductName] = useState('');
  const [ProductImageURL, setProductImageURL] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const toggleModal = truthy => setHideModal(truthy);

  const configModal = {
    hideModal,
    toggleModal
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal(false)}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <FormInput
              type="text"
              name="productName"
              value={productName}
              placeholder="Product Name"
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              type="url"
              name="ProductImageURL"
              value={ProductImageURL}
              placeholder="Product Image URL"
              handleChange={e => setProductImageURL(e.target.value)}
            />

            <FormInput
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              name="productPrice"
              value={productPrice}
              placeholder="Price"
              handleChange={e => setProductPrice(e.target.value)}
            />


          </form>
        </div>
      </Modal>

    </div>
  );
}

export default Admin;