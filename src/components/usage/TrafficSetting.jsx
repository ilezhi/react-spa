'use strict';

import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class TrafficSetting extends Component {
  render() {
    const { header, tableData } = this.props;

    return (
      <div style={{padding: '1.5rem 0'}}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan='4'>个人流量配置</TableHeaderColumn>
            </TableRow>
            <TableRow>
              {header.map((header, i) => (
                <TableHeaderColumn key={i}>{header}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                {row.creator && (<TableRowColumn>{row.creator}</TableRowColumn>)}
                <TableRowColumn>{row.client}</TableRowColumn>
                <TableRowColumn>{row.usage}</TableRowColumn>
                <TableRowColumn>{row.quota}</TableRowColumn>
                <TableRowColumn><a>配额修改</a></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TrafficSetting;
