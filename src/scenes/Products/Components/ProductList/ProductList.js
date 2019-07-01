import React, { useEffect, useContext } from 'react';
import { CATEGORY_NAMES, REQUEST_STATUSES } from '../../../../constants';
import { GlobalContext, products } from '../../../../store';
import ProductListItem from '../ProductListItem';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import isFetching from 'evercheck-utils/lib/isFetching';
import './ProductList.scss';

const ProductList = ({ location: { state } }) => {
  const [globalState, dispatch] = useContext(GlobalContext);
  const showAmountOfHiddenP = state && state.name !== CATEGORY_NAMES.all;
  const productsState = globalState ? globalState.products : {};
  const productList = (productsState && productsState.entities) || [];
  const amountProductsShown = (productList && productList.length) || 0;
  const hiddenProducts = 10 - amountProductsShown;
  const requestStatus = productsState
    ? productsState.requestStatus
    : REQUEST_STATUSES.NOT_FETCHED;

  const showLoader = isFetching(requestStatus);

  useEffect(() => {
    dispatch(products.getProducts(showAmountOfHiddenP ? state.name : null));
  }, []);

  return (
    <div className="product-list">
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
            productList.map((product, index) => (
              <ProductListItem key={index} product={product} />
            ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
