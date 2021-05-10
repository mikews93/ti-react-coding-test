import * as utils from './index';
import { GENERAL_ROUTES, PRODUCTS_ROUTES } from '../constants';

describe('getActiveTabUrl', () => {
  it('should return the index where path was found', () => {
    const path = GENERAL_ROUTES.products;
    const routes = { ...GENERAL_ROUTES, home: '/home' };
    const result = utils.getActiveTabUrl({ path, routes });
    expect(result).toBe(1);
  });

  it('should return the index where route starts with given path', () => {
    const path = PRODUCTS_ROUTES.tech;
    const routes = { ...GENERAL_ROUTES, home: '/home' };
    const result = utils.getActiveTabUrl({ path, routes });
    expect(result).toBe(1);
  });
});
