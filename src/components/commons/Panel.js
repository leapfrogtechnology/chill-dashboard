import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, className = 'status-up' }) => (
  <div className="panel panel-default">
    <div className={`panel-heading ${className}`}>
      <h3 className="panel-title">{title}</h3>
    </div>
    {children}
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string
};

export default Panel;
