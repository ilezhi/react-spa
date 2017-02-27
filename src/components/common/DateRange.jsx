'use strict';
import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

class DateRange extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <DatePicker hintText="起始时间" />
        <DatePicker hintText="终止时间" />
      </div>
    );
  }
}

export default DateRange;
