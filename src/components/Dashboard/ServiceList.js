import React from 'react';
import PropTypes from 'prop-types';

import {
  isUp,
  STATUS_UP_CLASS,
  STATUS_UP_MESSAGE,
  STATUS_DOWN_CLASS,
  STATUS_DOWN_MESSAGE
} from '../../services/status';

/**
   * Get required parameters to render the service row.
   * 
   * @param {Boolean} isOperational 
   * @returns {Object} {message, titleClass}
   */
function getParams(isOperational) {
  if (!isOperational) {
    return {
      message: STATUS_DOWN_MESSAGE,
      className: STATUS_DOWN_CLASS
    };
  }

  return {
    message: STATUS_UP_MESSAGE,
    className: STATUS_UP_CLASS
  };
}

const ServiceList = ({ services }) => (
  <ul className="list-group">
    {
      services.map((service) => {
        let { message, className } = getParams(!isUp(service));

        return (
          <li className="list-group-item" key={service.id} >
            <span>{service.name}</span>
            <span className={`list-item-right ${className}`}>{message}</span>
          </li>
        );
      })
    }
  </ul>
);

ServiceList.propTypes = {
  services: PropTypes.array
};

export default ServiceList;
