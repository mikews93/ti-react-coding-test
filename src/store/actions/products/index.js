import { GENERAL_ROUTES } from '../../../constants';

const getProducts = param => ({
  payload: {
    method: 'GET',
    entity: 'products',
    url: `${GENERAL_ROUTES.products}${
      param ? `?categories_like=${param}` : ''
    }`,
    onSuccess: products => ({ entities: products })
  }
});

// eslint-disable-next-line
export default { getProducts };
