import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GENERAL_ROUTES } from '../../constants';
import LinearProgress from 'react-md/lib/Progress/LinearProgress';
import Header from '../Header';

const Home = lazy(() => import('../../scenes/Home'));
const Products = lazy(() => import('../../scenes/Products'));
const Clients = lazy(() => import('../../scenes/Clients'));
const Contact = lazy(() => import('../../scenes/Contact'));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<LinearProgress id="progress" query />}>
          <Route exact path={GENERAL_ROUTES.home} component={Home} />
          <Route exact path={GENERAL_ROUTES.products} component={Products} />
          <Route
            exact
            path={`${GENERAL_ROUTES.products}/:category`}
            component={Products}
          />
          <Route exact path={GENERAL_ROUTES.clients} component={Clients} />
          <Route exact path={GENERAL_ROUTES.contact} component={Contact} />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
