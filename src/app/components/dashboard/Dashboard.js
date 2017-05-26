import React, { Component } from 'react';
import HttpStatus from 'http-status-codes';

// import Logs from './logs/Logs;
import ServicesTable from './table/ServicesTable';
import SummaryPieChart from './charts/SummaryPieChart';
import ServicesSummary from './services-summary/ServicesSummary';

import * as statusService from '../../services/statusService';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      services: [],
      totalRunning: 0,
      totalStopped: 0
    };
  }

  async componentWillMount() {
    try {
      const result = await statusService.getAll();

      let totalRunning = result.data.data.filter(service => service.status === HttpStatus.OK).length;
      let totalStopped = result.data.data.length - totalRunning;

      this.setState({ services: result.data.data, totalRunning: totalRunning, totalStopped: totalStopped });
    } catch (err) {
      // TODO: Handle error
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="row">
              <ServicesSummary totalRunning={this.state.totalRunning} totalStopped={this.state.totalStopped} />
              <SummaryPieChart totalRunning={this.state.totalRunning} totalStopped={this.state.totalStopped} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            {/* <Logs />*/}
          </div>
        </div>
        <div className="row">
          <ServicesTable services={this.state.services} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
