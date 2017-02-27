'use strict';

import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Switch from 'react-toolbox/lib/switch';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { LinkR } from '../ripple';
import Input from 'react-toolbox/lib/input';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sls: true,
      lda: false,
      resetPwd: false,
      chat: false,
      multiAuth: 'stop',
    };
  }

  handleChange(field, val) {
    this.setState({...this.state, [field]: val});
  }

  render() {
    return (
      <div>
        <header className='title'>设置</header>
        <div className='inner'>
          <div className='panel'>
            <label className='label'>language：</label>
            <div className='input-wrap'>
              <SelectField value='0' style={{width: '80%'}}>
                <MenuItem value='0' primaryText='中文' />
                <MenuItem value='1' primaryText='英文' />
              </SelectField>
            </div>
          </div>
          <div className='panel'>
            <p className='inline-bl'><span>两步认证</span><LinkR className='rip' to='/help'>查看帮助</LinkR><span>Multi-Factor Authentication</span></p>
            <p>两步认证会在登录时多一次验证，增加安全保障。</p>
            <RadioGroup value={this.state.multiAuth} onChange={this.handleChange.bind(this, 'multiAuth')}>
              <RadioButton label='强制开启' value='enable'/>
              <RadioButton label='选择开启' value='alter'/>
              <RadioButton label='关闭' value='stop'/>
            </RadioGroup>
          </div>
          <div className='panel'>
            <p><Switch checked={this.state.sls} label='单点登录支持' onChange={this.handleChange.bind(this, 'sls')} /></p>
            <p>单点登录可以让客户端更好的结合内部系统</p>
            <p><LinkR className='rip' to='/help'>查看帮助</LinkR></p>
          </div>
          <div className='panel'>
            <p><Switch checked={this.state.lda} label='登录设备认证' onChange={this.handleChange.bind(this, 'lda')} /></p>
            <p>在陌生设备上登录需要进行设备认证。不使用二次认证时推荐开启，认证邮箱为登录用户名</p>
            <p><LinkR className='rip' to='/help'>查看帮助</LinkR></p>
          </div>
          <div className='panel'>
            <p className='reset-pwd'>
              <Switch checked={this.state.resetPwd} label='周期重置密码' onChange={this.handleChange.bind(this, 'resetPwd')} />
              <div>每<Input />天强制用户重置密码</div>
            </p>
            <p>您可以强制重置所有人的密码或者周期重置</p>
            <p><a>立刻重置全部人员密码</a></p>
          </div>
          <div className='panel'>
            <p><Switch checked={this.state.chat} label='客户端聊天功能' onChange={this.handleChange.bind(this, 'chat')} /></p>
            <p>是否开启客户端的聊天功能</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
