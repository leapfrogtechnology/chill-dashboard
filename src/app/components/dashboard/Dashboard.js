import React, { Component } from 'react';

import ServicesTable from './table/ServicesTable';
import SummaryPieChart from './charts/SummaryPieChart';
import ServicesSummary from './services-summary/ServicesSummary';

import * as statusService from '../../services/status';

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
      const services = await statusService.fetchServiceStatuses();
      const { totalRunning, totalStopped } = statusService.getServiceCountsByStatus(services);

      this.setState({
        services,
        totalRunning,
        totalStopped
      });
    } catch (err) {
      // TODO: Handle error
    }
  }

  render() {
    const { services, totalRunning, totalStopped } = this.state;

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
              <ServicesSummary totalRunning={totalRunning} totalStopped={totalStopped} />
              <SummaryPieChart totalRunning={totalRunning} totalStopped={totalStopped} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
          </div>
        </div>
        <div className="row">
          <ServicesTable services={services} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
