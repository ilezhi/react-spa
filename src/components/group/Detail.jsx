'use strict';
import React, { Component } from 'react';
import styles from './group.scss';
import DatePicker from 'material-ui/DatePicker';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import DateRange from '../common/DateRange';

class GroupDetail extends Component {
  render() {
    return (
      <div>
        <header className='title'>人员管理</header>
        <div className='inner'>
          <div className='bdrt'>
            <div className={styles.staticForm}>
              <div className={styles.groupItem}>
                <label>群组名称：</label>
                <p>行政组</p>
              </div>
              <div className={styles.groupItem}>
                <label>最近使用流量：</label>
                <p>600GB</p>
              </div>
              <div className={styles.groupItem}>
                <label>群组人数：</label>
                <p>600</p>
              </div>
              <div className={styles.groupItem}>
                <label>最近传输文件：</label>
                <p>600个</p>
              </div>
              <div className={styles.groupItem}>
                <label>创建者：</label>
                <p>老王</p>
              </div>
            </div>
          </div>
        </div>
        <header className='title'>成员</header>
        <div className='inner'>
          <div className='bdrt'>
            <DateRange />
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>名称</TableHeaderColumn>
                  <TableHeaderColumn>上次登录</TableHeaderColumn>
                  <TableHeaderColumn>发送文件情况</TableHeaderColumn>
                  <TableHeaderColumn>操作</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>张三</TableRowColumn>
                  <TableRowColumn>2015-11-11 15:11:11</TableRowColumn>
                  <TableRowColumn>500个 共23GB</TableRowColumn>
                  <TableRowColumn><a>详情</a></TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupDetail;
