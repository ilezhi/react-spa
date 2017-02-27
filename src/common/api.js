'use strict';

import reqwest from 'reqwest';


const Api = {
  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token) {
    localStorage.setItem('token', token);
  },

  clear() {
    localStorage.clear();
  },

  isLogin() {
    return this.getToken() !== null;
  },

  getUserInfo() {
    return JSON.parse(localStorage.getItem('User'));
  },

  setUserInfo(user) {
    localStorage.setItem('User', JSON.stringify(user));
  },
};

module.exports = Api;
