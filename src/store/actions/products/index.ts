import { GENERAL_ROUTES } from '../../../constants';

const getProducts = (param:string | null): ReducerAction => ({
  payload: {
    method: 'GET',
    entity: 'products',
    url: `${GENERAL_ROUTES.products}${
      param ? `?category=${param}` : ''
    }`,
    onSuccess: (products: Product[]) => ({ entities: products })
  }
});

// eslint-disable-next-line
export default { getProducts };
