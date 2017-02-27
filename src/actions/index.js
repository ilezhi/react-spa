'use strict';
import reqwest from 'reqwest';
import {
  STAT_REQUEST,
  STAT_SUCCESS,
  STAT_FAILURE
} from '../constant/homeActionTypes';

import { Schemas } from '../middleware/api';

const receive = (text, json) => {
  console.log('进入action');
  return {
    type: STAT_SUCCESS,
    stat: json,
    text
  };
};

const shit = msg => {
  console.log('error action');
  return {
    type: STAT_FAILURE,
    message: msg
  };
};

export const fetchStat = (text) => {
  return dispatch => {
    return fetch('/data/stat.json')
      .then(res => res.json())
      .then(
        json => dispatch(receive(text, json)),
        error => dispatch(shit(error.message))
      );
  };
};

export const fetchStats = (text) => {
  return {
    types: [STAT_REQUEST, STAT_SUCCESS, STAT_FAILURE],
    endpoint: '/data/stat.json',
    schema: {client: Schemas.CLIENT_ARRAY, group: Schemas.GROUP_ARRAY}
  };
};
