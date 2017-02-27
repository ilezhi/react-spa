'use strict';
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = {
      name: 'turn',
    };
    return (
      <header className={styles.wrap}>
        <div>
          <IndexLink className={styles.band} to="/">LOGO</IndexLink>
        </div>
        <div className={styles.userWrap}>
          <ul className={styles.userNav}>
            <li>{user.name},您好！今天是{'2017'}</li>
            <li><a href='javascript:;'>修改密码</a></li>
            <li><a href='javascript:;'>登出</a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
