import React from 'react';

import ServicesTable from './table/ServicesTable';
import SummaryPieChart from './charts/SummaryPieChart';
import ServicesSummary from './services-summary/ServicesSummary';

const MainWrapper = (props) => (
  <div className="main-wrapper" >
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">Dashboard</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <ServicesSummary totalRunning={props.totalRunning} totalStopped={props.totalStopped} />
          <SummaryPieChart totalRunning={props.totalRunning} totalStopped={props.totalStopped} />
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
      </div>
    </div>
    <div className="row">
      <ServicesTable services={props.services} />
    </div>
  </div>
);

export default MainWrapper;
