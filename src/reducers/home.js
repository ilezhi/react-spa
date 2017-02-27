'use strict';
import { combineReducers } from 'redux';
import {
  STAT_INVALIDATE,
  STAT_REQUEST,
  STAT_SUCCESS,
  STAT_FAILURE,

  CLIENT_GROUP_REQUEST,
  CLIENT_GROUP_SUCCESS,
  CLIENT_GROUP_FAILURE
} from '../constant/homeActionTypes';


// // 初始化
// // 用于生成范式
const entities = (state = {clients: {}, groups: {}}, action) => {
  // 生成范式，添加到state.entities
  if (action.entities) {
    console.log('create entities');
    console.log('合并', {...state, ...action.entities});
    return {
      clients: {...state.clients, ...action.entities.clients},
      groups: { ...state.groups, ...action.entities.groups }
    };
  }

  return state;
};

// 首页顶部统计信息
const stat = (state = { didInvalidate: true }, action) => {
  switch(action.type) {
    case STAT_INVALIDATE:
      return { ...state, didInvalidate: true};
    case STAT_REQUEST:
      return { ...state, isFetching: true, didInvalidate: false };
    case STAT_SUCCESS:
      return { ...state, ...action.stat, isFetching: false, didInvalidate: false };
    case STAT_FAILURE:
      return { ...state, isFetching: false, didInvalidate: false };
    default:
      return state;
  }
};

export default {
  entities,
  stat
};
