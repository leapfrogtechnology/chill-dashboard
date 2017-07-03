import { update } from 'ramda';
import React, { Component } from 'react';

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
      onMessage: (e, data) => this.handleStatusChange(e, data)
    });
  }

  /**
   * Implementation of real time status change
   *
   * @param service
   */
  handleStatusChange(e, data) {
    let { services } = this.state;
    let index = services.findIndex(item => item.name === data.name);
    // Updates the only the updated service data in the services list (Immutable).
    let updatedServices = update(index, Object.assign({}, services[index], data), services);

    this.setState({ services: updatedServices });
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
