import React from 'react';
import PropTypes from 'prop-types';

const LogRow = ({ log }) => {
  let { name } = log.service;
  let { createdAt } = log;
  let status = log.status.name.toLowerCase();
  let statusMessage = `Went ${status} at ${createdAt}`;
  let textColor = `log-status-${status}`;
  
  return (
    <li className="list-group-item">
      <span>{name}</span>
      <span className={`list-item-right ${textColor}`}>{statusMessage}</span>
    </li>
  );
};

LogRow.propTypes = {
  log: PropTypes.object
};

export default LogRow;
