import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config';
import { SUCCESS } from '../../constants/HTTPStatus';

import ServicesSummary from './services-summary/ServicesSummary';
import SummaryPieChart from './charts/SummaryPieChart';
import Logs from './logs/Logs';
import ServicesTable from './table/ServicesTable';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
      totalRunning: 0,
      totalStopped: 0
    };
  }

  componentWillMount() {
    axios.get(`${config.API_ENDPOINT}/api/status`).then((result) => {
      let totalRunning = result.data.data.filter(service => service.status === SUCCESS).length;
      let totalStopped = result.data.data.length - totalRunning;

      this.setState({services: result.data.data, totalRunning: totalRunning, totalStopped: totalStopped});
    });
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
              <ServicesSummary totalRunning={this.state.totalRunning} totalStopped={this.state.totalStopped}/>
              <SummaryPieChart totalRunning={this.state.totalRunning} totalStopped={this.state.totalStopped}/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Logs />
          </div>
        </div>
        <div className="row">
          <ServicesTable services={this.state.services}/>
        </div>
      </div>
    );

  }
}

export default Dashboard;
