import React, { Component } from 'react';

import _ from 'lodash';

import {
  getOutageParams,
  fetchServiceStatuses
} from '../../services/status';
import * as websocket from '../../services/websocket';

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
    websocket.initialize({
      onMessage: (e, data) => this.onStatusChange(e, data)
    });
  }

  /**
   * Implementation of real time status change
   *
   * @param service
   */
  onStatusChange(e, service) {
    let services = this.state.services;
    let index = _.findIndex(services, ['name', service.name]);

    _.merge(services[index], service);
    this.setState({ services });
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
    let { className, message } = getOutageParams(this.state.services);

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
