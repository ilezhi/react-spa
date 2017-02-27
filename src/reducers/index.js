import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import chart from './chart';
import home from './home';
import user from './client';


const rootReducers = combineReducers({
  ...home,
  chart,
  user,
  routing
});

export default rootReducers;
