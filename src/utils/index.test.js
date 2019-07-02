import * as utils from './index';
import { GENERAL_ROUTES, PRODUCTS_ROUTES } from '../constants';

describe('getActiveTabUrl', () => {
  it('should throw an error if path parameter is not an string', () => {
    const errorMessage = 'Invalid path property passed, it must be an string';
    try {
      utils.getActiveTabUrl({ path: {}, routes: '' });
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });
  it('should throw an error if route property is not an object', () => {
    const errorMessage = 'Invalid rotes property passed, it must be an array';
    try {
      utils.getActiveTabUrl({ path: '', routes: '' });
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });

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
