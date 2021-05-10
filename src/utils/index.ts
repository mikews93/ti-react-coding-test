import map from 'lodash/map';
import isString from 'lodash/isString';
import { Dictionary } from 'lodash';
import { REQUEST_STATUSES } from '../constants';


/**
 * @description returns Index position in routes array where the string 'path' was found
 * @param {Object} arguments { [string]path, [array] routes}
 * @returns {Number}
 */
export const getActiveTabUrl = ({ path, routes }: { path: string, routes?: Dictionary<string>}) => {
  if (!isString(path)) {
    return '';
  }

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

/**
 * returns the value of a key in the local storage
 * @param key {string} name of key on local storage
 */
export const getLocalStorage = (key: string) => {
  const content = localStorage.getItem(key);
  if (!content) {
    return console.info(`value for key ${key} not found on local storage`)
  }
  return JSON.parse(content);
}

/**
 * Sets items to local storage
 * @param {Object} arguments { [string]key, [string] value}
 */
export const setLocalStorage = ({key, value}: { key: string, value: any}) => {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * removes a key from local storage
 * @param {string} key key to delete on local storage
 */
export const deleteLocalStorageKey = (key: string) => {
  localStorage.removeItem(key);
}

/**
 * creates a dictionary from array of objects
 * @param {Array} array array to be transformed
 * @param {string} keyUsed string key name inside object to use as id for dictionary
 */
export function transformArrayToDictionary<T>(array: T[], keyUsed: keyof T): { [key: string]: T };

export function transformArrayToDictionary<T, ValueTransformed>(
  array: T[],
  keyUsed: keyof T,
  map: (arrayValue: T) => ValueTransformed
): { [key: string]: ValueTransformed };

export function transformArrayToDictionary<T, ValueTransformed>(
  array: T[],
  keyUsed: keyof T,
  map?: (arrayValue: T) => ValueTransformed
): { [key: string]: T } {
  return array.reduce((acc: any, current: T) => {
    const key = `${current[keyUsed]}`.toString();
    acc[key] = map ? map(current) : current;

    return acc;
  }, {});
}
