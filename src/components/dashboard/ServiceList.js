import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ServiceRow from './ServiceRow';

const ServiceList = ({ statuses }) => (
  <ul className="list-group">
    {
      statuses.map(status =>{ return <ServiceRow status={status} key={status.id} /> } )}
  </ul>
);

ServiceList.propTypes = {
  statuses: PropTypes.array
};

export default ServiceList;
