'use strict';

import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class FileDetail extends Component {
  render() {
    const { header, tableData } = this.props;

    return (
      <div style={{padding: '1.5rem 0'}}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan='8'>文件详情</TableHeaderColumn>
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
                <TableRowColumn>{row.sendDatetime}</TableRowColumn>
                <TableRowColumn>{row.fileName}</TableRowColumn>
                <TableRowColumn>{row.sender}</TableRowColumn>
                <TableRowColumn>{row.sendIP}</TableRowColumn>
                <TableRowColumn>{row.receiver}</TableRowColumn>
                <TableRowColumn>{row.receiveIP}</TableRowColumn>
                <TableRowColumn>{row.size}</TableRowColumn>
                <TableRowColumn>{row.state}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default FileDetail;
