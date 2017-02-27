'use strict';

import React, { Component } from 'react';
import LogTable from '../common/LogTable';
import Input from 'react-toolbox/lib/input';
import { IconButton } from 'react-toolbox/lib/button';

const logData = {
  header: ['操作者', '操作内容','操作设备','操作时间','操作IP'],
  tableData: [
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'},
    { creator: '张三', desc: '邀请  赵六  进入群组  行政组', device: 'Android-N5D68E', datetime: '2012-12-12', ip: '1.1.1.1'}
  ]
};

class LogList extends Component {
  render() {
    return (
      <div>
        <header className='title'>活动日志</header>
        <div className='inner'>
          <div className='filter-bar'><Input /><IconButton className='search-icon' icon='search' /></div>
          <LogTable {...logData} />
        </div>
      </div>
    );
  }
}

export default LogList;
