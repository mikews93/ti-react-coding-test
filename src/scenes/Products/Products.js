import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PRODUCTS_ROUTES } from '../../constants';
const LinearProgress = lazy(() =>
  import('react-md/lib/Progress/LinearProgress')
);
const SideBar = lazy(() => import('./Components/SideBar'));
const ProductList = lazy(() => import('./Components/ProductList'));

function Products() {
  return (
    <>
      <Router>
        <SideBar />
        <Suspense fallback={<LinearProgress id="progress" query />}>
          <Route exact path={PRODUCTS_ROUTES.all} component={ProductList} />
          <Route exact path={PRODUCTS_ROUTES.tech} component={ProductList} />
          <Route
            exact
            path={PRODUCTS_ROUTES.services}
            component={ProductList}
          />
          <Route exact path={PRODUCTS_ROUTES.office} component={ProductList} />
        </Suspense>
      </Router>
    </>
  );
}

export default Products;
