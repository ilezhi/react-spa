import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

// import App from '../App';
import MainLayout from '../layout';
import Home from '../components/Home';
import ClientLayout from '../components/client';
import GroupLayout from '../components/group';


// 用户列表页
const clientList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/client/List').default)
  }, 'clientlist');
};

// 添加用户
const addClient = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/client/Add').default)
  }, 'addclient');
};

// 用户详情
const detailClient = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/client/Detail').default)
  }, 'detailclient');
};

// 群组页
const groupList = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/group/List').default)
  }, 'group');
};

const groupDetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/group/Detail').default)
  }, 'group');
}

// 日志
const log = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/log').default)
  }, 'loglist');
};

// 设置
const setting = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/setting').default)
  }, 'setting');
};

// 使用量
const usage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/usage').default)
  }, 'usage');
};

// 充值
const pay = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/pay').default)
  }, 'pay');
};

// 帮助中心
const helper = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../components/help').default)
  }, 'helper');
};

const routes = (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home} />
    <Route path="/client" component={ClientLayout}>
      <IndexRoute getComponent={clientList} />
      <Route path="list" getComponent={clientList} />
      <Route path="add" getComponent={addClient} />
      <Route path=":id" getComponent={detailClient} />
    </Route>
    <Route path="/group" component={GroupLayout}>
      <IndexRoute getComponent={groupList} />
      <Route path="list" getComponent={groupList} />
      <Route path=":id" getComponent={groupDetail} />
    </Route>
    <Route path="/log" getComponent={log} />
    <Route path="/setting" getComponent={setting} />
    <Route path="/usage" getComponent={usage}></Route>
    <Route path="/pay" getComponent={pay}></Route>
    <Route path="/help" getComponent={helper}></Route>
  </Route>
);

export default routes;
