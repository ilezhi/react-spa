'use strict';
import {
  CHART_INVALIDATE,
  CHART_REQUEST,
  CHART_SUCCESS,
  CHART_FAILURE
} from '../constant/chartActionTypes';

const chart = (state = { didInvalidate: true }, action) => {
  switch(action.type) {
    case CHART_INVALIDATE:
      return { ...state, didInvalidate: true };
    case CHART_REQUEST:
      return { ...state, isFetching: true, didInvalidate: false };
    case CHART_SUCCESS:
      return { ...state, ...action.chart, isFetching: false, didInvalidate: false };
    case CHART_FAILURE:
      return { ...state, isFetching: false, didInvalidate: true };
    default:
      return state;
  }
};

export default chart;
