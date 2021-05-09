// @vendors
import React, { useEffect, useContext, FunctionComponent, useState } from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { RouteComponentProps } from 'react-router-dom';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import classnames from 'classnames';

import ProductItem from '../ProductItem';
import { CATEGORY_NAMES, REQUEST_STATUSES } from '../../../../constants';
import { GlobalContext, products } from '../../../../store';
import { getLocalStorage, isFetching, setLocalStorage } from '../../../../utils';

import styles from './ProductList.module.scss';

interface LocationImp extends Location {
  state: {
    name: string
  }
}

interface ProductListProps extends RouteComponentProps {
  location: LocationImp
}

const localStorageKey = 'viewMode';

const ProductList: FunctionComponent<ProductListProps> = ({ location: { state } }) => {
  /**
   * Context
   */
  const [globalState, dispatch] = useContext(GlobalContext);

  /**
   * state
   */
  const [toggleListView, setToggleListView] = useState(getLocalStorage(localStorageKey).toggleList)

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

  const handleClickToggleView = (toggleList: boolean) => {
    setToggleListView(toggleList);
    setLocalStorage({key: localStorageKey, value: { toggleList }})
  }

  return (
    <div className={styles.productList}>
      {showLoader ? (
        <CircularProgress id="circular" />
      ) : (
        <>
          <div className={styles.toggleListViewLayout}>
            <Button
              id="toggleList"
              icon
              tooltipLabel="Change to list view"
              tooltipPosition="right"
              className={classnames({
                [styles.active]: toggleListView
              })}
              onClick={() => handleClickToggleView(true)}
            >
              <FontIcon>list</FontIcon>
            </Button>
            <Button
              id="toggleBlock"
              icon
              tooltipLabel="Change to blocks view"
              className={classnames({
                [styles.active]: !toggleListView
              })}
              tooltipPosition="right"
              onClick={() => handleClickToggleView(false)}
            >
              <FontIcon>grid_view</FontIcon>
            </Button>
          </div>
          <label>
            Showing <b>{amountProductsShown}</b> products
            {showAmountOfHiddenP && (
              <label>
                - Hidden <b>{hiddenProducts}</b>
              </label>
            )}
          </label>
          <div className={classnames(styles.productsLayout, { [styles.blockLayout]: !toggleListView })}>
            {productList?.map((product: Product, index: number) =>
              <ProductItem key={index} product={product} renderList={toggleListView}/>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
