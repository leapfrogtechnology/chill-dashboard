import React, { Component } from 'react';

import { drawPieChart } from './service';

class SummaryPieChart extends Component {
  componentWillReceiveProps(nextProps) {
    let data = [
      {name: 'Running', y: nextProps.totalRunning},
      {name: 'Stopped', y: nextProps.totalStopped}
    ];

    drawPieChart(data, 'chart-container');
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <i className="fa fa-pie-chart"></i>
            Summary
          </div>
          <div className="panel-body">
            <div id="chart-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryPieChart;
