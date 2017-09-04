import React, { Component } from 'react';
import Sidebar from '../board/Sidebar';
import Container from '../board/Container';

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

