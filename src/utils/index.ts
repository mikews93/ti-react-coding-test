import map from 'lodash/map';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import { Dictionary } from 'lodash';
import { REQUEST_STATUSES } from '../constants';


/**
 * @description returns Index position in routes array where the string 'path' was found
 * @param {Object} arguments { [string]path, [array] routes}
 * @returns {Number}
 */
export const getActiveTabUrl = ({ path, routes }: { path: string | object, routes?: Dictionary<string>}) => {
  if (!isString(path))
    throw TypeError('Invalid path property passed, it must be an string');
  if (!isObject(routes))
    throw TypeError('Invalid rotes property passed, it must be an array');

  return map(routes).findIndex(
    route => route === path || path.startsWith(route)
  );
};

/**
 * Returns a boolean that indicates whether a request is loading.
 * This helper function is useful to determine whether a Spinner should be shown.
 * For the sake of simplicity, both the LOADING and the NOT_LOADED statuses mean
 * a request is loading.
 *
 * @param {string} fetchStatus
 *
 * @returns {boolean}
 */
export const isFetching = (fetchStatus?: REQUEST_STATUSES) => {
  if (
    fetchStatus === REQUEST_STATUSES.FETCHING ||
    fetchStatus === REQUEST_STATUSES.NOT_FETCHED
  ) {
    return true;
  }
  return false;
};