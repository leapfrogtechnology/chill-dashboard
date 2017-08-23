import React from 'react';
import PropTypes from 'prop-types';

import LogRow from './LogRow';

const LogList = ({ logs }) => (
	<ul className="list-group">
	{
    logs.map(log => <LogRow log={log} key={log.id} />)
	}
	</ul>
);

LogList.propTypes = {
  logs: PropTypes.array
};

export default LogList;
