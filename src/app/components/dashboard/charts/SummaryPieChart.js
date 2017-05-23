import React, { Component } from 'react';

import * as Highcharts from 'highcharts';

class ServicesPieChart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let total = nextProps.totalRunning + nextProps.totalStopped;

    Highcharts.chart('chart-container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: false,
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Server',
        colorByPoint: true,
        data: [
          {name: 'Running', y: nextProps.totalRunning / total},
          {name: 'Stopped', y: nextProps.totalStopped / total}
        ]
      }]
    });
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

export default ServicesPieChart;
