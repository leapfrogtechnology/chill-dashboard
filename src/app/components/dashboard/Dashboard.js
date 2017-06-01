import React, { Component } from 'react';

import MainWrapper from './MainWrapper';
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
    return (
      <MainWrapper {...this.state} />
    );
  }
}

export default Dashboard;
