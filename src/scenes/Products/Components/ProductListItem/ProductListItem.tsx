// @vendors
import React, { FunctionComponent } from 'react';

import './ProductListItem.scss';

interface ProductListItemProps {
  product: Product
}

const ProductListItem: FunctionComponent<ProductListItemProps> = ({ product }) => {
  return (
    <div className="product-list-item md-paper--1">
      <h2 className="tittle"> {product.name}</h2>
      <h4 className="sub-tittle">
        {product.categories.toString()} - {product.brand}
      </h4>
      <div className="product__description">
        <div className="section section--sm">
          <img
            src={product.photo}
            alt={product.name}
            className="section__photo"
          />
        </div>
        <div className="section section--lg">
          <p>{product.description}</p>
          <b>Stock: </b> {product.stock}
          <br />
          <b>Price: </b> ${product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
