'use strict';
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Button } from 'react-toolbox/lib/button';

class LogTable extends Component {
  render() {
    const { header, tableData } = this.props;

    return (
      <div>
        <Button label='导出日志' raised primary mini />
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
                {row.creator && (<TableRowColumn>{row.creator}</TableRowColumn>)}
                <TableRowColumn>{row.desc}</TableRowColumn>
                <TableRowColumn>{row.device}</TableRowColumn>
                <TableRowColumn>{row.datetime}</TableRowColumn>
                <TableRowColumn>{row.ip}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default LogTable;
