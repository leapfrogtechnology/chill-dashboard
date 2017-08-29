import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStatusInfo } from '../hoc/status';

import * as websocket from '../../services/websocket';
import * as statusService from '../../services/status';

import LogList from './LogList';
import Panel from '../commons/Panel';
import ServiceList from './ServiceList';

class StatusPanel extends Component {

  constructor() {
    super();
    
    this.state = {
      logs: [],
      statuses: []
    };
  }
  componentDidMount() {
    const { handleWebSocketNotification } = this.props;

    this.fetchStatuses();

    websocket.initialize({ onMessage: handleWebSocketNotification });
  }


  /**
   * Fetch list of services.
   *
   * @returns {Promise}
   */
  async fetchStatuses() {
    const { updateStatus } = this.props;

    updateStatus({ isLoading: true, services: [], logs: [] });

    try {
      let statuses = await statusService.fetchServiceStatuses();
      let logs = await statusService.fetchLogs();

      this.setState({
        logs: logs,
        statuses: statuses
      });
      updateStatus({ logs, statuses, isLoading: false });
    } catch (err) {
      // TODO: Show error messages
    }
  }
  render() {
    let { className, message } = statusService.getOutageParams(this.state.statuses);
    
    return (
      <div>
        <Panel title={message} className={className}>
            <ServiceList statuses={this.state.statuses} />       
        </Panel>
        <Panel title="Status Change History" className="status-up">
            <LogList logs={this.state.logs} />  
        </Panel>
      </div>
    );
  }
}

StatusPanel.propTypes = {
  status: PropTypes.object,
  updateStatus: PropTypes.func,
  handleWebSocketNotification: PropTypes.func
};

export default withStatusInfo(StatusPanel);
