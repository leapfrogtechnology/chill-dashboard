import PropTypes from 'prop-types';
import React, { Component } from 'react';
import httpUtil from '../../utils/http';
import { withStatusInfo } from '../hoc/status';

import * as websocket from '../../services/websocket';
import * as statusService from '../../services/status';

import Panel from '../commons/Panel';
import ServiceList from './ServiceList';
import Spinner from '../commons/Spinner';

class StatusPanel extends Component {

  constructor() {
    super();
    this.state = {
      statuses: []
    };
  }
  componentDidMount() {
    const { handleWebSocketNotification } = this.props;
    let getall = this.fetchStatuses();

    websocket.initialize({ onMessage: handleWebSocketNotification });

  }
  


  /**
   * Fetch list of services.
   *
   * @returns {Promise}
   */
  async fetchStatuses() {
    const { updateStatus } = this.props;

    updateStatus({ isLoading: true, services: [] });

    try {
      let statuses = await statusService.fetchServiceStatuses();

      this.setState({
        statuses: statuses
      });
      updateStatus({ services, isLoading: false });
    } catch (err) {
      // TODO: Show error messages
    }
  }
  render() {
    
    let { isLoading } = this.props.status;
    let { className, message } = statusService.getOutageParams(this.state.statuses);

    return (
      <Panel title={message} className={className}>
        <div>
          <ServiceList statuses={this.state.statuses}/>
        </div>
      </Panel >
    );
  }
}

StatusPanel.propTypes = {
  status: PropTypes.object,
  updateStatus: PropTypes.func,
  handleWebSocketNotification: PropTypes.func
};

export default withStatusInfo(StatusPanel);
