'use strict';
import React, { Component } from 'react';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import Profile from './Profile';
import ClientInGroupDetail from './Group';
import DeviceList from './Device';
import Log from './Log';

class ClientDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  tabChange(index) {
    this.setState({index});
  }
  render() {
    console.log(this.props.params.id);
    return (
      <div>
        <Tabs index={this.state.index} onChange={this.tabChange.bind(this)}>
          <Tab label='个人信息'><Profile /></Tab>
          <Tab label='所属群组'><ClientInGroupDetail /></Tab>
          <Tab label='登录设备'><DeviceList /></Tab>
          <Tab label='操作日志'><Log /></Tab>
        </Tabs>
      </div>
    );
  }
}

export default ClientDetail;
