'use strict';

import React, { Component } from 'react';
import ChartFilterBar from '../common/ChartFilterBar';
import Chart from '../common/Chart';
import FileDetail from './FileDetail';
import TrafficSetting from './TrafficSetting';

const fileData = {
  header: ['发送时间', '文件名', '发送人', '发送IP', '接收人', '接收IP', '文件大小', '状态'],
  tableData: [
    {
      sendDatetime: '2015-11-11 21:11:15',
      fileName: '1.exe',
      sender: '老王',
      sendIP: '1.1.1.1',
      receiver: '老王',
      receiveIP: '1.2.3.4',
      size: '21MB',
      state: '传输成功'
    },
    {
      sendDatetime: '2015-11-11 21:11:15',
      fileName: '1.exe',
      sender: '老王',
      sendIP: '1.1.1.1',
      receiver: '老王',
      receiveIP: '1.2.3.4',
      size: '21MB',
      state: '传输成功'
    },
    {
      sendDatetime: '2015-11-11 21:11:15',
      fileName: '1.exe',
      sender: '老王',
      sendIP: '1.1.1.1',
      receiver: '老王',
      receiveIP: '1.2.3.4',
      size: '21MB',
      state: '传输成功'
     }
  ]
};

const usageData = {
  header: ['用户', '本月使用量', '配额', '操作'],
  tableData: [
    {
      client: '老王',
      usage: '444MB',
      quota: '1GB'
    },
    {
      client: '老王',
      usage: '444MB',
      quota: '1GB'
    },
    {
      client: '老王',
      usage: '444MB',
      quota: '1GB'
    }
  ]
};

class UsageList extends Component {
  render() {
    return (
      <div>
        <header className='title'>流量使用情况</header>
        <div className='inner'>
          <ChartFilterBar />
          <Chart />
          <FileDetail {...fileData} />
          <TrafficSetting {...usageData} />
        </div>
      </div>
    );
  }
}

export default UsageList;
