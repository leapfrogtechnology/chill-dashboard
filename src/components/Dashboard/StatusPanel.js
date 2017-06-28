import React, { Component } from 'react';

import {
  isOperational,
  getRenderParams,
  fetchServiceStatuses
} from '../../services/status';

import Panel from '../commons/Panel';
import ServiceList from './ServiceList';
import Spinner from '../commons/Spinner';

class StatusPanel extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    };
  }

  async componentDidMount() {
    this.fetchStatuses();
  }

  /**
   * Fetch list of services. 
   * 
   * @returns {Promise}
   */
  async fetchStatuses() {
    this.setState({ isLoading: true });

    try {
      let services = await fetchServiceStatuses();

      this.setState({
        services,
        isLoading: false
      });
    } catch (err) {
      // TODO: Show error messages
    }
  }

  render() {
    let { className, message } = getRenderParams(isOperational(this.state.services), true);

    if (this.state.isLoading) {
      return (
        <Spinner />
      );
    }

    return (
      <Panel title={message} className={className}>
        <ServiceList services={this.state.services} />
      </Panel >
    );
  }
}

export default StatusPanel;
