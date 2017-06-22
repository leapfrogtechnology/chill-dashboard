import React from 'react';
import PropTypes from 'prop-types';

const ServicesSummary = ({ totalRunning, totalStopped }) => (
  <div className="col-xs-12">
    <div className="row">
      <div className="col-xs-6">
        <div className="panel panel-green">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-3">
                <i className="fa fa-arrow-up fa-5x"/>
              </div>
              <div className="col-xs-9 text-right">
                <div className="huge">{totalRunning}</div>
                <div>Services</div>
              </div>
            </div>
          </div>
          <div className="panel-footer clearfix">
            <span className="pull-left">Running</span>
          </div>
        </div>
      </div>

      <div className="col-xs-6">
        <div className="panel panel-red">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-3">
                <i className="fa fa-arrow-down fa-5x"/>
              </div>
              <div className="col-xs-9 text-right">
                <div className="huge">{totalStopped}</div>
                <div>Services</div>
              </div>
            </div>
          </div>
          <div className="panel-footer clearfix">
            <span className="pull-left">Stopped</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ServicesSummary.propTypes = {
  totalRunning: PropTypes.string,
  totalStopped: PropTypes.string
};

export default ServicesSummary;
