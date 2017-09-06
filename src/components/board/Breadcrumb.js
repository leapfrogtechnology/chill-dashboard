import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Breadcrumb extends Component {
  render() {
    const { history } = this.props;
    
    return (
      <div className="row ">
        <div className="col-md-12 ">
          <div className="page-title">
            <button onClick={() => history.push('/dashboard')}>Breadcrumb</button>
            {/* <Link exact to="/" >i am from breadcrum Dashboard</Link> */}

            {/* <h2>Dashboard<small className="smallfont">Project Overview</small> </h2>  */}
          </div>
        </div>
      </div>

    );
  }
}
export default withRouter(Breadcrumb);
