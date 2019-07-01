import map from 'lodash/map';
import omit from 'lodash/omit';

/**
 * @description returns Index position in routes array where the string 'path' was found
 * @param {Object} arguments { [string]path, [array] routes}
 * @returns {Number}
 */
export const getActiveTabUrl = ({ path, routes }) => {
  return map(omit(routes, 'home')).findIndex(route => route === path);
};
