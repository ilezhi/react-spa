'use strict';

import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

let defaultOption = {
  title: {
    text: '流量统计'
  },
  tooltip: {
    tirgger: 'axis'
  },
  legend: {
    data: ['流量']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ["周一","周二","周三","周四","周五","周六","周日"]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '流量',
      type: 'line',
      areaStyle: { normal: {}},
      data: [89, 99, 111, 121, 154, 230, 250]
    }
  ]
};

class Chart extends Component {
  componentDidMount() {
    const { xAxis, series } = this.props;

    const myChart = echarts.init(document.getElementById('chart'));
    myChart.setOption(defaultOption);
  }

  render() {
    return (
      <div id='chart' style={{height: '30rem'}}></div>
    );
  }
}

export default Chart;
