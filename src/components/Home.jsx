'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkR } from './ripple';
import styles from './home.scss';
import ChartFilterBar from './common/ChartFilterBar';
import { normalize, Schema, arrayOf } from 'normalizr';
import Chart from './common/Chart';
import { fetchTrafficStat, fetchClientsGroups, fetchChart } from '../actions/home';


class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { fetchTrafficStat, fetchClientsGroups, fetchChart } = this.props;

    fetchTrafficStat();
    fetchClientsGroups();
    fetchChart();
  }

  render() {
    const { stat, entities, chart: { xAxis, series } } = this.props;

    return (
        <div className={styles.container}>
          <header className='title'>XXX公司</header>
          <div className={styles.statWrap}>
            <div>
              <LinkR to='/client' className="rip">{stat.clientsCount}</LinkR>
              <p>人数</p>
            </div>
            <div>
              <LinkR to='/usage' className="rip">{stat.usage}</LinkR>
              <p>流量使用</p>
            </div>
            <div>
              <LinkR to='/usage' className="rip">{stat.total - stat.usage}</LinkR>
              <p>剩余流量</p>
            </div>
            <div>
              <LinkR to='/group' className="rip">{stat.groupsCount}</LinkR>
              <p>群组数量</p>
            </div>
          </div>
          <div className={styles.chartWrap}>
            <div className={styles.layouts}>
              <ChartFilterBar />
              <div className={styles.chartInner}>
                <div id="chart_traffic">
                  <Chart xAxis={xAxis} series={series} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stat: state.stat,
    entities: state.entities,
    chart: state.chart
  };
};
export default connect(mapStateToProps, { fetchTrafficStat, fetchClientsGroups, fetchChart })(Home);
