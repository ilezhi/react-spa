'use strict';
import styles from './client.scss';
import React, { Component } from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'react-toolbox/lib/checkbox';

const mapKeyToText = {
  role: ['管理员', '普通用户'],
  validate: '两步验证',
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      profile: {
        name: '张三',
        nick: '隔壁老王',
        email: '123@qq.com',
        traffic: '200MB',
        roleKey: 0,
        roleText: '管理员',
        vStep: true,
        vDevice: true,
        vText: '两部认证',
      }
    };
  }

  changeInputVal(val, name) {
    this.state.profile = {...this.state.profile, [name]: val};
  }

  toggleEditJSX(name, val) {
    return this.state.editing
             ? (<div className={styles.inputWrap}><Input name={name} defaultValue={val} onChange={val => {this.changeInputVal(val, name)}} /></div>)
             : (<p>{val}</p>);
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }
  render() {
    let { editing, profile: {name, nick, email, traffic, roleKey, roleText, vStep, vDevice } } = this.state;

    return (
      <div>
        <Button label={editing ? '确定' : '编辑个人信息'} raised primary onClick={this.toggleEdit.bind(this)} />
        <div className={styles.proWrap}>
          <div>
            <div className={styles.proGroup}>
              <label>姓名：</label>
              { this.toggleEditJSX('name', name) }
            </div>
            <div className={styles.proGroup}>
              <label>昵称：</label>
              { this.toggleEditJSX('nick', nick) }
            </div>
            <div className={styles.proGroup}>
              <label>邮箱：</label>
              { this.toggleEditJSX('email', email) }
            </div>
            <div className={styles.proGroup}>
              <label>使用量与配额：</label>
              { this.toggleEditJSX('traffic', traffic) }
            </div>
          </div>
          <div>
            <div className={styles.proGroup}>
              <label>用户类型：</label>
              {
                editing
                  ? (  <div className={styles.inputWrap}>
                      <SelectField value={roleKey}>
                        <MenuItem value={0} primaryText='管理员' />
                        <MenuItem value={1} primaryText='普通员工' />
                      </SelectField>
                    </div>)
                  : (<p>{mapKeyToText.role[roleKey]}</p>)
              }

            </div>
            <div className={styles.proGroup}>
              <label>创建群组：</label>
              <p>张三</p>
            </div>
            <div className={styles.proGroup}>
              <label>安全认证：</label>
              {
                editing
                  ? ( <div className={styles.inputWrap}>
                        <Checkbox checked={vStep} label='两步认证' />
                        <Checkbox checked={vDevice} label='设备认证' />
                      </div>)
                  : (<p>{mapKeyToText.validate}</p>)
              }

            </div>
            <div className={styles.proGroup}>
              <label>账号创建时间：</label>
              <p>张三</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
