'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers';
import { syncHistoryWithStore } from 'react-router-redux';



export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(thunk)
  );
}
