import map from 'lodash/map';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

/**
 * @description returns Index position in routes array where the string 'path' was found
 * @param {Object} arguments { [string]path, [array] routes}
 * @returns {Number}
 */
export const getActiveTabUrl = ({ path, routes }) => {
  if (!isString(path))
    throw TypeError('Invalid path property passed, it must be an string');
  if (!isObject(routes))
    throw TypeError('Invalid rotes property passed, it must be an array');

  return map(routes).findIndex(
    route => route === path || path.startsWith(route)
  );
};
