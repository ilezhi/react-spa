'use strict';

import React, { Component } from 'react';


class ClientLayout extends Component {
  render() {
    return (
      <div id="client_layout">
        {this.props.children}
      </div>
    );
  }
}

export default ClientLayout;
