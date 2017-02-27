'use strict';

import React, { Component } from 'react';
import styles from './chart-filter-bar.scss';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Button, IconButton } from 'react-toolbox/lib/button';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DateRange from './DateRange';


const style = {
  marginRight: '1.5rem',
};

class ChartFilterBar extends Component {
  render() {
    return (
      <nav className={styles.filterBar}>
        <div>
          <SelectField value='搜索' style={{width: '80%'}}>
            <MenuItem value='搜索' primaryText='搜索' />
            <MenuItem value='员工1' primaryText='员工1' />
            <MenuItem value='员工2' primaryText='员工2' />
          </SelectField>
        </div>
        <div>
          <SelectField value='搜索' style={{width: '80%'}}>
            <MenuItem value='搜索' primaryText='搜索' />
            <MenuItem value='群组1' primaryText='群组1' />
            <MenuItem value='群组2' primaryText='群组2' />
          </SelectField>
        </div>
        <div>
          <SelectField value='0' style={{width: '80%'}}>
            <MenuItem value='0' primaryText='数据使用量' />
            <MenuItem value='1' primaryText='传输文件数量' />
          </SelectField>
        </div>
        <div className={styles.fastFilter}>
          <Button label='日' floating primary mini />
          <Button label='周' floating primary mini />
          <Button label='月' floating primary mini />
        </div>
        <div className={styles.dateRangeWrap}>
          <DateRange />
        </div>
      </nav>
    );
  }
}

export default ChartFilterBar;
