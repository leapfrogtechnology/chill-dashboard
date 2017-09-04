import React from 'react';
import {Link} from 'react-router-dom';

import StatusPanel from './StatusPanel';

const StatusPage = () => (
  <div className="page-wrapper wrapper">
    <StatusPanel />
    <Link to="/dashboard">CLICK ME</Link>
  </div>
);

export default StatusPage;
