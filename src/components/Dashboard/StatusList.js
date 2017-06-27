import React, { Component } from 'react';

import * as status from '../../services/status';

import Panel from '../commons/Panel';
import Spinner from '../commons/Spinner';

const STATUS_UP_CLASS = 'status-up';
const STATUS_UP_MESSAGE = 'Operational';
const STATUS_DOWN_CLASS = 'status-down';
const STATUS_DOWN_MESSAGE = 'Major Outage';

class StatusList extends Component {
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
      let services = await status.fetchServiceStatuses();

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
      if (!status.isUp(service)) {
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

  /**
   * Render all services with their respective status.
   * 
   * @param {Array} services 
   * @returns {Array} 
   */
  renderServices(services) {
    return services.map((service) => {
      let message = STATUS_UP_MESSAGE;
      let className = STATUS_UP_CLASS;

      if (!status.isUp(service)) {
        message = STATUS_DOWN_MESSAGE;
        className = STATUS_DOWN_CLASS;
      }

      return (
        <li className="list-group-item" key={service.id} >
          <span>{service.name}</span>
          <span className={`list-item-right ${className}`}>{message}</span>
        </li>
      );
    });
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
        <ul className="list-group">
          {this.renderServices(this.state.services)}
        </ul>
      </Panel >
    );
  }
}

export default StatusList;

