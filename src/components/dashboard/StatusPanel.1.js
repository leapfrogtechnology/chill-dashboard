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
      repos: []
    }
  }
  componentDidMount() {
    const { handleWebSocketNotification } = this.props;
    console.log('I was triggered during render');
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
      let services = await statusService.fetchServiceStatuses();
      console.log(services[0].status.name);
      this.setState({
        repos: services
      })
      updateStatus({ services, isLoading: false });
    } catch (err) {
      // TODO: Show error messages
    }
  }

  render() {
    let { isLoading, services } = this.props.status;
    let { className, message } = statusService.getOutageParams(services);

    // if (isLoading) {
    //   return (
    //     <Spinner />
    //   );
    // }
  
      // console.log(this.state.repos)
    return (
      
      <Panel title={message} className={className}>
{/* 

 
         <h1>i am from panel</h1>
 */}
         {
             this.state.repos.length>0 && this.state.repos.map(repo => {
                return (
                  <div key={repo.service.id}>
                    <ServiceList services={repo.service} />
                  </div>
                ); 
              })

            }
        { /* console.log({this.state.repos});  */}

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
