import { useState, createContext } from 'react';
import axios from 'axios';
import { REQUEST_STATUSES, STATE_ACTIONS } from '../constants';
import isEmpty from 'lodash/isEmpty';

const { FETCHING, SUCCESSFUL, FAILED } = REQUEST_STATUSES;
const { FETCH_ENTITY, SET_STATE } = STATE_ACTIONS;

//set defaults
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const GlobalContext = createContext({});

const useGlobalState = () => {
  const [state, setState] = useState({});

  const reducer = async ({ type = FETCH_ENTITY, payload = {}, entityName }) => {
    switch (type) {
      case SET_STATE:
        if (entityName)
          return setState({
            ...state,
            [entityName]: { ...state[entityName], ...payload }
          });
        else throw TypeError(`property entityName must be specified`);
      case FETCH_ENTITY:
        const {
          url = '/',
          entity,
          initialState = {},
          onSuccess,
          onError,
          ...options
        } = payload;

        setState({
          ...state,
          [entity]: {
            requestStatus: FETCHING,
            [entity]: initialState
          }
        });

        try {
          let { data: result } = await axios({
            url,
            method: options.metod || 'GET',
            ...options
          });

          if (onSuccess && typeof onSuccess === 'function') {
            result = onSuccess(result);
            if (isEmpty(result))
              result = ['onSuccess function must return a value'];
          }

          return setState({
            ...state,
            [entity]: { requestStatus: SUCCESSFUL, ...result }
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
              requestStatus: FAILED,
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

export default useGlobalState;
