'use strict';

import React, { Component } from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

class Helper extends Component {
  render() {
    return (
      <div>
        <header className='title'>帮助中心</header>
        <div className='inner'>
          <div className='panel'>
            <p><a>帮助指南</a> ----您可以自行查询我们为您准备的操作指南，里面包含了所有操作的详细说明</p>
            <p><a>提交工单</a> ----如果您遇到了技术性问题或者需要专业的技术支持，可以提交工单，我们会根据您的问题来为您提供对应的服务。</p>
          </div>
          <div className='panel'>
            <h4>联系我们</h4>
            <p>如果指南不能为您解决问题，您需要进行咨询问题，提出需求或有其他意见，您可以联系我们的支持团队</p>
            <div className='support'>
              <List ripple>
                <ListSubHeader caption='中国支持中心' />
                <ListItem leftIcon='email'><a>给我们发送电子邮件</a></ListItem>
                <ListItem leftIcon='chat'><a>联系我们的客服</a></ListItem>
                <ListItem leftIcon='call'><span>400-1549-4555</span></ListItem>
                <ListItem leftIcon='access_time'><span>北京时间（UTC+8）周一至周五9：00-18：00</span></ListItem>
              </List>
              <List ripple>
                <ListSubHeader caption='美国支持中心' />
                <ListItem leftIcon='email'><a>给我们发送电子邮件</a></ListItem>
                <ListItem leftIcon='chat'><a>联系我们的客服</a></ListItem>
                <ListItem leftIcon='call'><span>400-1549-4555</span></ListItem>
                <ListItem leftIcon='access_time'><span>太平洋时间（UTC-8）周一至周五9：00-18：00</span></ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Helper;
