// @vendors
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product
  renderList: boolean
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product, renderList }) =>{
  const sectionRenderClass = classnames(styles.section, { [styles.sectionBlock]: !renderList })
  return (
    <div className={`${styles.productItem} md-paper--1`}>
      <h2 className={styles.tittle}> {product.name}</h2>
      <h4 className={styles.subTittle}>
        {product.categories.toString()} - {product.brand}
      </h4>
      <div className={styles.productDescription}>
        <div className={`${sectionRenderClass} ${styles.sectionSm}`}>
          <img
            src={product.photo}
            alt={product.name}
            className={styles.sectionPhoto}
          />
        </div>
        <div className={`${sectionRenderClass} ${styles.sectionLg}`}>
          <p>{product.description}</p>
          <b>Stock: </b> {product.stock}
          <br />
          <b>Price: </b> ${product.price}
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
