import React from 'react';
import PropTypes from 'prop-types';

import * as statusService from '../../../services/status';

const ServiceStatus = ({ service }) => {
  if (statusService.isUp(service)) {
    return (
      <i className="fa fa-arrow-up" style={{ color: 'green' }}/>
    );
  }

  return (
    <i className="fa fa-arrow-down" style={{ color: 'red' }}/>
  );
};

ServiceStatus.propTypes = {
  service: PropTypes.string
};
export default ServiceStatus;
