'use strict';
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class Consumption extends Component {
  render() {
    const { header, tableData } = this.props;
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
              <TableRowColumn>{row.payDate}</TableRowColumn>
              <TableRowColumn>{row.traffic}</TableRowColumn>
              <TableRowColumn>{row.total}</TableRowColumn>
              <TableRowColumn>{row.state}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default Consumption;
