import React from 'react';
import ServiceStatus from './ServiceStatus';

const ServicesTable = ({ services }) => (
  <div className="col-lg-12 services-wrapper">
    <div className="panel panel-default">
      <div className="panel-heading">Services</div>
      <div className="panel-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th className="service-name">Service</th>
                <th>Status</th>
                <th>Last Active On</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service =>
                <tr>
                  <td className="service-name">{service.name}</td>
                  <td><ServiceStatus service={service} /></td>
                  <td>{service.createdAt}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesTable;
