// @vendors
import React, { FunctionComponent } from 'react';

import styles from './ProductListItem.module.scss';

interface ProductListItemProps {
  product: Product
}

const ProductListItem: FunctionComponent<ProductListItemProps> = ({ product }) =>
  (
    <div className={`${styles.productListItem} md-paper--1`}>
      <h2 className={styles.tittle}> {product.name}</h2>
      <h4 className={styles.subTittle}>
        {product.categories.toString()} - {product.brand}
      </h4>
      <div className={styles.productDescription}>
        <div className={`${styles.section} ${styles.sectionSm}`}>
          <img
            src={product.photo}
            alt={product.name}
            className={styles.sectionPhoto}
          />
        </div>
        <div className={`${styles.section} ${styles.sectionLg}`}>
          <p>{product.description}</p>
          <b>Stock: </b> {product.stock}
          <br />
          <b>Price: </b> ${product.price}
        </div>
      </div>
    </div>
  );

export default ProductListItem;
