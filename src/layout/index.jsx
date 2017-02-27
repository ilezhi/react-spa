'use strict';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import SideMenu from './sidemenu';
import Footer from './footer';
import styles from './layout.scss';
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainLayout extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div className={styles.contWrap}>
            <div className={styles.sideWrap}>
              <SideMenu />
            </div>
            <div className={styles.mainCont}>
              <div className={styles.content}>
                {this.props.children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainLayout;
