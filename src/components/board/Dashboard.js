import React from 'react';
import Sidebar from '../frontend/Sidebar';
import Container from '../frontend/Container';

const Dashboard = () => (
  <div>
    <div className="container-fluid wrapall">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Container />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
