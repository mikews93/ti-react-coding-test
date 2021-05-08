// @vendors
import React, { useEffect, useContext, FunctionComponent } from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { RouteComponentProps } from 'react-router-dom';

import ProductListItem from '../ProductListItem';
import { CATEGORY_NAMES, REQUEST_STATUSES } from '../../../../constants';
import { GlobalContext, products } from '../../../../store';
import { isFetching } from '../../../../utils';

import styles from './ProductList.module.scss';

interface LocationImp extends Location {
  state: {
    name: string
  }
}

interface ProductListProps extends RouteComponentProps {
  location: LocationImp
}

const ProductList: FunctionComponent<ProductListProps> = ({ location: { state } }) => {
  /**
   * Context
   */
  const [globalState, dispatch] = useContext(GlobalContext);

  /**
   * Initial values
   */
  const showAmountOfHiddenP = state?.name !== CATEGORY_NAMES.all;
  const productsState = globalState?.products ?? {};
  const productList = productsState?.entities ?? [];
  const amountProductsShown = productList?.length ?? 0;
  const hiddenProducts = 10 - amountProductsShown;
  const requestStatus = productsState?.requestStatus ?? REQUEST_STATUSES.NOT_FETCHED;
  const showLoader = isFetching(requestStatus);

  useEffect(() => {
    dispatch(products.getProducts(showAmountOfHiddenP ? state?.name : null));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.productList}>
      {showLoader ? (
        <CircularProgress id="circular" />
      ) : (
        <>
          <label>
            Showing <b>{amountProductsShown}</b> products
            {showAmountOfHiddenP && (
              <label>
                - Hidden <b>{hiddenProducts}</b>
              </label>
            )}
          </label>

          {productList &&
            productList.map((product: Product, index: number) => (
              <ProductListItem key={index} product={product} />
            ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
