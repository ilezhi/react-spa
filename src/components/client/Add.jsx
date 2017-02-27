'use strict';
import React, { Component } from 'react';
import styles from './client.scss';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { LinkR } from '../ripple';
import { Button } from 'react-toolbox/lib/button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      traffic: '',
      sec: 0,
      auth: 0,
    };
  }

  handleChange(name, val) {
    this.setState({...this.state, [name]: val});
    console.log(styles);
  }

  changeSec(val) {
    this.setState({...this.state, 'sec': val});
  }

  render() {

    return (
      <div>
        <header className='title'>添加人员</header>
        <div className={styles.formWrap}>
          <div className={styles.formInner}>
            <div>
              <label className={styles.label}>邮箱</label>
              <Input type='text' hint='邮箱同时作为登录用户名使用' value={this.state.email} required onChange={this.handleChange.bind(this, 'email')} />
            </div>
            <div>
              <label className={styles.label}>姓名</label>
              <Input type='text' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
            </div>
            <div>
              <label className={styles.label}>流量配额</label>
              <Input type='text' hint='0为无限额度' value={this.state.traffic} onChange={this.handleChange.bind(this, 'traffic')} />
              <span style={{position: 'absolute', top: '3rem', right: '2rem'}}>GB</span>
            </div>
            <div className={styles.radioWrap}>
              <label className={styles.label}>安全配置</label>
              <RadioGroup className={styles.radioInline} name='sec' value={this.state.sec} onChange={this.changeSec.bind(this)}>
                <RadioButton label='设备认证' value='1' />
                <RadioButton label='两部认证' value='2' />
                <RadioButton label='无' value='0' />
              </RadioGroup>
              <LinkR to='/help' className='rip' style={{display: 'inline-block', height: '3.1rem'}}>查看帮助</LinkR>
            </div>
            <div style={{alignItems: 'flex-end'}}>
              <label className={styles.label}>人员权限</label>
                <SelectField value='搜索' style={{width: '80%'}}>
                  <MenuItem value='搜索' primaryText='搜索' />
                  <MenuItem value='员工1' primaryText='员工1' />
                  <MenuItem value='员工2' primaryText='员工2' />
                </SelectField>
            </div>
            <div style={{justifyContent: 'center', marginTop: '2rem'}}>
              <Button label='提交' raised primary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClient;
