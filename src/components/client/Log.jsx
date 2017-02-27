'use strict';
import React, { Component } from 'react';
import LogTable from '../common/LogTable';


const logData = {
  header: ['操作内容','操作设备','操作时间','操作IP'],
  tableData: [
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    {desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'}
  ]
};



class Log extends Component {

  exportLig() {
    console.log('导出日志');
  }

  render() {
    return (
      <LogTable {...logData} />
    );
  }
}

export default Log;
