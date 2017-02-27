'use strict';

import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { Button } from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import Input from 'react-toolbox/lib/input';
import Consumption from './Consumption';

const consumptionData = {
  header: ['重置金额', '充值流量', '充值金额', '状态'],
  tableData: [
    {
      payDate: '2013-1-1',
      traffic: '1GB',
      total: '1000元',
      state: '支付成功',
    },
    {
      payDate: '2013-1-1',
      traffic: '1GB',
      total: '1000元',
      state: '支付成功',
    },
    {
      payDate: '2013-1-1',
      traffic: '1GB',
      total: '1000元',
      state: '支付成功',
    },
    {
      payDate: '2013-1-1',
      traffic: '1GB',
      total: '1000元',
      state: '支付成功',
    }
  ]
}

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleChange(text) {
    this.setState({...this.state, text});
  }

  render() {
    return (
      <div>
        <header className='title'>充值</header>
        <div className='inner'>
          <div className='panel item'>
            <div>
              <div className='static-group'>
                <label>当前套餐</label>
                <p>每月500GB</p>
                <p className='help-block text-danger'>流量套餐在每个自然月月末失效，与购买时间无关</p>
              </div>
              <div className='static-group'>
                <label>本月使用</label>
                <p>500GB</p>
              </div>
              <div className='static-group'>
                <label>本月剩余</label>
                <p>500GB</p>
                <p className='help-block text-danger'>当流量超出时每GB为0.14美元。</p>
              </div>
            </div>
            <div>
              <p>更改套餐 <small className='text-danger'> 下个月生效</small></p>
              <RadioGroup name='traffic' value={1}>
                <RadioButton label='1GB/月' />
                <RadioButton label='100GB/月' />
                <RadioButton label='5GB/月' />
                <RadioButton label='200GB/月' />
                <RadioButton label='10GB/月' />
                <RadioButton label='500GB/月' />
                <RadioButton label='50GB/月' />
                <RadioButton label='1TB/月' />
              </RadioGroup>
              <Button label='确定' primary raised mini />
            </div>
          </div>
          <div className='panel item'>
            <div>
              <p>流量告警阈值</p>
              <div className='inline-group'>
                <Checkbox checked={false}/>
                <p>使用流量达到套餐的</p>
                <Input type='text' />
                <p>%时进行邮件流量报警</p>
              </div>
              <div className='inline-group'>
                <Checkbox checked={true} />
                <p>流量使用完毕后切断连接</p>
              </div>
            </div>
            <div className='email-wrap'>
              <p>通知邮箱</p>
              <Input placeholder='可输入多个，回车换行' value={this.state.text} onChange={this.handleChange.bind(this)} type='text' multiline />
            </div>
          </div>
          <div className='panel'>
            <p>消费记录 <small className='text-danger'>每个自然月月末前五天我们会给您生成订单并发送邮件提醒付款，请及时续费方便我们提供服务。</small></p>
            <Consumption {...consumptionData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
