'use strict';
import reqwest from 'reqwest';
import { Schema, arrayOf, normalize } from 'normalizr';

const API_ROOT = 'http://localhost:3000'

const callApi = (endpoint, schema) => {

  return fetch(endpoint)
    .then(res => res.json())
    .then(res => {
      if (res.status === 1) {
        return Promise.reject(res.statusInfo);
      }

      return schema ? normalize(res.data, schema) : res.data;
    });
};


const clientSchema = new Schema('clients');
const groupSchema = new Schema('groups');


clientSchema.define({
  group: groupSchema
});

export const Schemas = {
  CLIENT: clientSchema,
  CLIENT_ARRAY: arrayOf(clientSchema),
  GROUP: groupSchema,
  GROUP_ARRAY: arrayOf(groupSchema)
};


export default store => next => action => {
  const { types, schema, shouldCallAPI } = action;

  // 普通action
  if (typeof types === 'undefined') {
    return next(action);
  }

  if (!Array.isArray(types)
    || types.length !== 3
    || !types.every(type => typeof type === 'string')) {
    throw new Error('Expected an array of three string types');
  }

  // 缓存数据有效，则使用缓存
  if (typeof shouldCallAPI === 'function') {
    if (!shouldCallAPI(store.getState())) {
      console.log('not querying')
      return;
    }
  }

  const [requestType, successType, failureType] = types;

  next({type: requestType});
  // pathname
  const { endpoint } = action;

  return callApi(endpoint, schema)
    .then(
      response => next({
        ...response,
        type: successType
      }),
      error => next({
        type: failureType,
        error: error.message || 'Shit happens'
      })
    );
}
