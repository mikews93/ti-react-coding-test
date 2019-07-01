import map from 'lodash/map';

/**
 * @description returns Index position in routes array where the string 'path' was found
 * @param {Object} arguments { [string]path, [array] routes}
 * @returns {Number}
 */
export const getActiveTabUrl = ({ path, routes }) =>
  map(routes).findIndex(route => route === path || path.startsWith(route));
