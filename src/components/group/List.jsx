'use strict';
import React, { Component } from 'react';
import GroupTable from '../common/GroupTable';

const groupData = {
  header: ['群组名','群组人数','创建者','创建时间','操作'],
  tableData: [
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'},
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'},
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'},
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'},
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'},
    {group: '公共群组', count: 11, creator: '张三', creationTime: '2012-12-12'}
  ],
  opType: 'detail',
};

class GroupList extends Component {
  render() {
    return (
      <div>
        <header className='title'>群组管理</header>
        <div className='inner'>
          <GroupTable {...groupData} />
        </div>
      </div>
    );
  }
}

export default GroupList;
