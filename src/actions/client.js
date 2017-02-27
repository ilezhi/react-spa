'use strict';
import { Schemas } from '../middleware/api';
import {
  CLIENT_REQUEST,
  CLIENT_SUCCESS,
  CLIENT_FAILURE
} from '../constant/clientActionTypes';

// 获取客户列表
export const fetchClients = () => {
  return {
    types: [CLIENT_REQUEST, CLIENT_SUCCESS, CLIENT_FAILURE],
    endpoint: '/data/clients.json',
    schema: {client: Schemas.CLIENT_ARRAY}
  };
};
