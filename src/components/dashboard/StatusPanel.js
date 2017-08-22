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
    }
  }
  componentDidMount() {
    const { handleWebSocketNotification } = this.props;
    // console.log('I was triggered during render');
    // {this.service.id};
   let cat= this.fetchStatuses();
    websocket.initialize({ onMessage: handleWebSocketNotification });
    
    // httpUtil.cat.then(response => {
    //         this.setState({
    //           repos: response.data
    //         });
    //       });

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
      })
      updateStatus({ services, isLoading: false });
    } catch (err) {
      // TODO: Show error messages
    }
  }
  render() {
// console.log(this.state.statuses);
    
    let { isLoading } = this.props.status;
    let { className, message } = statusService.getOutageParams(this.state.statuses);

    // if (isLoading) {
    //   return (
    //     <Spinner />
    //   );
    // }
  
      // console.log(this.state.repos)
      // console.log(message);
      // console.log(className);
      
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
