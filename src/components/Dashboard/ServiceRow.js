import React from 'react';
import PropTypes from 'prop-types';

import { isUp, getServiceParams } from '../../services/status';

const ServiceRow = ({ service }) => {
  let { message, className } = getServiceParams(isUp(service));

  return (
    <li className="list-group-item">
      <span>{service.name}</span>
      <span className={`list-item-right ${className}`}>{message}</span>
    </li>
  );
};

ServiceRow.propTypes = {
  service: PropTypes.object
};

export default ServiceRow;
