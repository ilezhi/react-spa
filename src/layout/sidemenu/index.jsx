'use strict';

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './sidemenu.scss';
import { List, ListItem } from 'react-toolbox/lib/list';
import Ripple from 'react-toolbox/lib/ripple';

const Rip = Ripple({spread: 3});
const LinkR = Rip(Link);
const IndexLinkR = Rip(IndexLink);

class SideMenu extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <aside className={styles.sideWrap}>
        <ul className={styles.menuList}>
          <li>
            <IndexLinkR to='/' activeClassName={styles.active}>首页</IndexLinkR>
          </li>
          <li>
            <LinkR to='/client' activeClassName={styles.active}>成员</LinkR>
          </li>
          <li>
            <LinkR to='/group' activeClassName={styles.active}>群组</LinkR>
          </li>
          <li>
            <LinkR to='/log' activeClassName={styles.active}>日志</LinkR>
          </li>
          <li>
            <LinkR to='/setting' activeClassName={styles.active}>设置</LinkR>
          </li>
          <li>
            <LinkR to='/usage' activeClassName={styles.active}>使用量</LinkR>
          </li>
          <li>
            <LinkR to='/pay' activeClassName={styles.active}>充值</LinkR>
          </li>
          <li>
            <LinkR to='/help' activeClassName={styles.active}>帮助中心</LinkR>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
