'use strict';
import React, { Component } from 'react';

class GroupLayout extends Component {
  render() {
    return (
      <div id='group_layout'>
        {this.props.children}
      </div>
    );
  }
}

export default GroupLayout;
