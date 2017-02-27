'use strict';
import {
  CLIENT_REQUEST,
  CLIENT_SUCCESS,
  CLIENT_FAILURE
} from '../constant/clientActionTypes';


const user = (state = {}, action) => {
  switch(action.type) {
    case CLIENT_REQUEST:
      return { ...state, isFetching: true };
    case CLIENT_SUCCESS:
      return { ...state, data: action.result.client, isFetching: false };
    case CLIENT_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default user;
