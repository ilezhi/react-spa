'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Popover from 'material-ui/Popover';
import styles from './client.scss';
import { LinkR } from '../ripple';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { browserHistory, Link } from 'react-router';
import Alert from '../common/Alert';
import { fetchClients } from '../../actions/client';


class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      settingsOpen: false,
      id: 0,
      alert: false,
    };
  }

  componentDidMount() {
    this.props.fetchClients();
  }


  // 查看帮助
  handleTouchTap(ev) {
    ev.preventDefault();
    this.setState({
      ...this.state,
      open: true,
      anchorEl: ev.currentTarget,
      alert: false,
    });
  }

  // 查看设置
  handleSettings(ev, id) {
    ev.preventDefault();
    this.setState({...this.state, settingsOpen: true, settingsTrigger: ev.currentTarget, id, alert: false});
  }

  // 关闭popover
  handleRequestClose(attr) {
    this.setState({
      [attr]: false,
    });
  }

  // 添加成员
  goTo() {
    browserHistory.push(`/client/add`);
  }

  // 重置密码
  resetPwd() {
    this.setState({...this.state, settingsOpen: false, alert: true, text: '重置密码确认'});
  }

  /**
   * desc: 显示操作对话框
   * param: String: op 操作类型，
   */
  showSettingDialog(op) {
    if (op) {
      this.setState({
        ...this.state,
        settingsOpen: false,
        alert: true,
        op: op
      });
    }
  }

  /**
   * desc: 设置对话框确认
   * param: String | Number: data 额外需要发送的数据
   */
  dialogConfirm(data) {
    console.log('父', data);
  }



  render() {
    const { user: { data }, clientEntities } = this.props;

    return(
      <div className={styles.container}>
        <header className="title">
          人员管理
        </header>
        <div className='inner'>
          <div className={styles.opWrap}>
            <FlatButton onClick={this.goTo} label='添加成员' />
            <FlatButton onTouchTap={ev => {this.handleTouchTap(ev)}} label='查看帮助' />
          </div>
          <div>
            <Table>
              <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn tooltip='name'>名称</TableHeaderColumn>
                  <TableHeaderColumn tooltip='auth'>所属权限</TableHeaderColumn>
                  <TableHeaderColumn tooltip='traffic'>配额情况</TableHeaderColumn>
                  <TableHeaderColumn tooltip='sec'>安全状态</TableHeaderColumn>
                  <TableHeaderColumn tooltip='groupcount'>群组数量</TableHeaderColumn>
                  <TableHeaderColumn tooltip='op'>操作</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}>
                {data ? data.map((row, i) => (
                  <TableRow key={i}>
                    <TableRowColumn>{clientEntities[row].name}</TableRowColumn>
                    <TableRowColumn>{clientEntities[row].role}</TableRowColumn>
                    <TableRowColumn>{clientEntities[row].quota}</TableRowColumn>
                    <TableRowColumn>{clientEntities[row].sec}</TableRowColumn>
                    <TableRowColumn>{clientEntities[row].groupCount}</TableRowColumn>
                    <TableRowColumn><IconButton iconClassName='material-icons' onClick={ev => this.handleSettings(ev, clientEntities[row].id)}>settings</IconButton></TableRowColumn>
                  </TableRow>
                )) : false}
              </TableBody>
            </Table>
          </div>
        </div>
        <Alert open={this.state.alert} op={this.state.op} onConfirm={this.dialogConfirm.bind(this)}  />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this, 'open')}>
          <div className='popover-tips'>
            <p>系统自带完整的人员管理功能，</p>
            <p>但如果您有其他的人员管理系统，</p>
            <p>可以通过我们提供的API接口</p>
            <p>同步您的所有操作</p>
            <LinkR to='/help' className='rip'>查看帮助</LinkR>
          </div>
        </Popover>
        <Popover
          open={this.state.settingsOpen}
          anchorEl={this.state.settingsTrigger}
          anchorOrigin={{horizontal: 'right', vertical: 'center'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this, 'settingsOpen')}>
          <Menu className={styles.settingsDrop} onChange={(ev, val) => this.showSettingDialog(val)}>
            <MenuItem><Link to={'/client/' + this.state.id}>个人详情</Link></MenuItem>
            <MenuItem value='resetPwd'>重置密码</MenuItem>
            <MenuItem value='auth'>重置两步认证</MenuItem>
            <MenuItem value='log'>导出日志</MenuItem>
            <MenuItem value='pause'>暂停用户</MenuItem>
            <MenuItem value='del'>删除用户</MenuItem>
            <MenuItem value='increate'>增加临时配额</MenuItem>
          </Menu>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clientEntities: state.entities.clients,
    user: state.user
  };
};

export default connect(mapStateToProps, { fetchClients })(ClientList);
