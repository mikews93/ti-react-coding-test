// @vendors
import { useState, createContext } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { REQUEST_STATUSES, STATE_ACTIONS } from '../constants';

//set defaults
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

/**
 * Custom hook
 */
const useGlobalState = (): [global: GlobalState, reducer: GlobalStateReducer] => {
  const [state, setState] = useState<GlobalState>({});

  const reducer: GlobalStateReducer = async ({ type = STATE_ACTIONS.MAKE_REQUEST, payload = {}, entityName }: ReducerAction) => {
    const {
      url = '/',
      entity,
      initialState = {},
      onSuccess,
      onError,
      ...options
    } = payload;

    switch (type) {
      case STATE_ACTIONS.SET_STATE:
        if (entityName)
          return setState({
            ...state,
            [entityName]: { ...state[entityName], ...payload }
          });
        else throw TypeError(`property entityName must be specified`);
      case STATE_ACTIONS.MAKE_REQUEST:
        setState({
          ...state,
          [entity]: {
            requestStatus: REQUEST_STATUSES.FETCHING,
            [entity]: initialState
          }
        });

        try {
          let { data: result } = await axios({
            url,
            method: options.method || 'GET',
            ...options
          });

          if (onSuccess && typeof onSuccess === 'function') {
            result = onSuccess(result);
            if (isEmpty(result))
              result = ['onSuccess function must return a value'];
          }

          return setState({
            ...state,
            [entity]: { requestStatus: REQUEST_STATUSES.SUCCESSFUL, ...result }
          });
        } catch (error) {
          let Error = error;
          if (onError && typeof onError === 'function') {
            Error = onError(Error);
            if (isEmpty(Error))
              Error = ['onError function must return a value'];
          }

          return setState({
            ...state,
            [entity]: {
              requestStatus: REQUEST_STATUSES.FAILED,
              [entity]: initialState,
              error: Error ? Error : `${error}`
            }
          });
        }
      default:
        return state;
    }
  };

  return [state, reducer];
};

/**
 * Global context
 */
const initialGlobalState: GlobalState = {}
const initialStateReducer: GlobalStateReducer = async (param: ReducerAction) => {}
export const GlobalContext = createContext<[global: GlobalState, reducer: GlobalStateReducer]>([initialGlobalState, initialStateReducer]);


export default useGlobalState;
