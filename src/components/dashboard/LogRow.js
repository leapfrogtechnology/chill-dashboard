import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ToolTip from 'react-tooltip';

const LogRow = ({ log }) => {
  let { name } = log.service;
  let { createdAt } = log;
  let status = log.status.name;
  let statusMessage = `Went ${status} at ${createdAt}`
  // console.log(id+" "+name+" "+createdAt);
  let className = "log-status-"+status;
  return (
    <li className="list-group-item">
      <span>{name}</span>
      <span className={`list-item-right ${className}`}>{statusMessage}</span>
    </li>
  );
};

LogRow.propTypes = {
  log: PropTypes.object
};

export default LogRow;
