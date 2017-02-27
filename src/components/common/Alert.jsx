'use strict';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DateRange from './DateRange';
import Input from 'react-toolbox/lib/input';

const customContentStyle = {
  width: '50rem',
  maxWidth: 'none',
};

const opText = {
  'resetPwd': '重置密码',
  'auth'    : '重置两步验证',
  'log'     : '导出日志',
  'pause'   : '暂停',
  'del'     : '删除',
  'increate': '增加临时配额',
};

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      data: 0,
    };
  }

  // 关闭对话框
  handleClose = () => {
    this.setState({open: false});
  }

  // 确定
  handleConfirm = (data) => {
    this.props.onConfirm(data);
    this.setState({
      open: false,
    });
  };

  // 显示对话看
  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open});
  }

  renderOp() {
    switch(this.props.op) {
      case 'log':
        return (
          <div>
            <div>
              <label>选择导出范围：</label>
              <DateRange />
              <div><FlatButton label='全部导出' primary /></div>
            </div>
          </div>
        );
      case 'increate':
        return (
          <div>
            <label>
              临时流量配额可以为用户本月临时增加
              流量配额而不改变原本的配额数量
            </label>
            <Input type='number' placeholder='GB' />
          </div>
        );
      default:
        return '本操作不可撤回';
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleConfirm()}
      />
    ];

    return (
      <Dialog
          title={opText[this.props.op]}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
          {this.renderOp()}
        </Dialog>
    );
  }
}

export default Alert;
