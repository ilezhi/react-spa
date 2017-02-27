'use strict';
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class GroupTable extends Component {
  render() {
    const { header, tableData, opType } = this.props;
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            {header.map((header, i) => (
              <TableHeaderColumn key={i}>{header}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{row.group}</TableRowColumn>
              <TableRowColumn>{row.count}</TableRowColumn>
              <TableRowColumn>{row.creator}</TableRowColumn>
              <TableRowColumn>{row.creationTime}</TableRowColumn>
              <TableRowColumn>{opType === 'remove' ? (<a>移除群组</a>) : (<a>查看详情</a>)}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default GroupTable;
