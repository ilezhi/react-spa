'use strict';
import { Schemas } from '../middleware/api';
import {
  STAT_INVALIDATE,
  STAT_REQUEST,
  STAT_SUCCESS,
  STAT_FAILURE,

  CLIENT_GROUP_REQUEST,
  CLIENT_GROUP_SUCCESS,
  CLIENT_GROUP_FAILURE
} from '../constant/homeActionTypes';
import {
  CHART_INVALIDATE,
  CHART_REQUEST,
  CHART_SUCCESS,
  CHART_FAILURE
} from '../constant/chartActionTypes';


// 获取统计数据，
export const fetchTrafficStat = () => {
  return {
    types: [STAT_REQUEST, STAT_SUCCESS, STAT_FAILURE],
    shouldCallAPI: state => state.stat.didInvalidate,
    endpoint: '/data/stat.json'
  };
};

// 获取人员分组信息
export const fetchClientsGroups = () => {
  return {
    types: [CLIENT_GROUP_REQUEST, CLIENT_GROUP_SUCCESS, CLIENT_GROUP_FAILURE],
    endpoint: '/data/client.json',
    shouldCallAPI: state => true,
    schema: {client: Schemas.CLIENT_ARRAY, group: Schemas.GROUP_ARRAY}
  };
};

// 获取图表信息
export const fetchChart = () => {
  return {
    types: [CHART_REQUEST, CHART_SUCCESS, CHART_FAILURE],
    shouldCallAPI: state => state.chart.didInvalidate,
    endpoint: './data/chart.json'
  };
};

// 过了这
