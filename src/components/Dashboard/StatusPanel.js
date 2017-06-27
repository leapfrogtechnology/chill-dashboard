import React, { Component } from 'react';

import {
  isUp,
  STATUS_UP_CLASS,
  STATUS_DOWN_CLASS,
  STATUS_DOWN_MESSAGE,
  fetchServiceStatuses
} from '../../services/status';

import Panel from '../commons/Panel';
import ServiceList from './ServiceList';
import Spinner from '../commons/Spinner';

class StatusPanel extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      isOperational: true
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
        isLoading: false,
        isOperational: this.isOperational(services)
      });
    } catch (err) {
      // TODO: Show error messages
    }
  }

  /**
   * Check if any one of the service is non operational.
   * 
   * @param {Array} services 
   * @returns {Boolean}
   */
  isOperational(services) {
    for (let service of services) {
      if (!isUp(service)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Get required parameters to render the status panel.
   * 
   * @param {Boolean} isOperational 
   * @returns {Object} {message, titleClass}
   */
  getParams(isOperational) {
    if (!isOperational) {
      return {
        message: STATUS_DOWN_MESSAGE,
        titleClass: STATUS_DOWN_CLASS
      };
    }

    return {
      titleClass: STATUS_UP_CLASS,
      message: 'All Systems Operational'
    };
  }

  render() {
    let { titleClass, message } = this.getParams(this.state.isOperational);

    if (this.state.isLoading) {
      return (
        <Spinner />
      );
    }

    return (
      <Panel
        title={message}
        titleClass={titleClass}
      >
        <ServiceList
          services={this.state.services}
        />
      </Panel >
    );
  }
}

export default StatusPanel;

