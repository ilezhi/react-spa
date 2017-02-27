'use strict';
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const tableData = [
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'},
  {device: '公共群组', deviceip: 11, lastUsageTime: '2012-12-12'}
];

class DeviceList extends Component {
  render() {
    return (
      <Table height='400px' >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn colSpan='4'>
              Super Header
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip='devicename'>设备名</TableHeaderColumn>
            <TableHeaderColumn tooltip='deviceip'>设备IP</TableHeaderColumn>
            <TableHeaderColumn tooltip='lastUsageTime'>上次使用时间</TableHeaderColumn>
            <TableHeaderColumn tooltip='op'>操作</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{row.device}</TableRowColumn>
              <TableRowColumn>{row.deviceip}</TableRowColumn>
              <TableRowColumn>{row.lastUsageTime}</TableRowColumn>
              <TableRowColumn>删除设备</TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
        </Table>
    );
  }
}

export default DeviceList;
