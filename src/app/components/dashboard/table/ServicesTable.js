import React from 'react';
import { SUCCESS } from '../../../constants/HTTPStatus';

const ServicesTable = ({services}) => (
  <div className="col-lg-12 services-wrapper">
    <div className="panel panel-default">
      <div className="panel-heading">List</div>
      <div className="panel-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
            <tr>
              <td>Service</td>
              <td>Status</td>
              <td>Last Active On</td>
            </tr>
            </thead>
            <tbody>
            {services.map(service =>
              <tr>
                <td>{service.name}</td>
                <td>{service.status === SUCCESS ? <i className="fa fa-arrow-up" style={{color: 'green'}}/> :
                  <i className="fa fa-arrow-down" style={{color: 'red'}}/>}</td>
                <td>{service.status === SUCCESS ? 'Active' : service.timestamp}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesTable;
