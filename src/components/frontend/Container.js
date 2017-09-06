import React, { Component } from 'react';
// import Breadcrumb from "./Breadcrumb";
// import Addnewservice from "./Addnewservice";
// import Addnewproject from "./Addnewproject";
// import Projectlist from "./Projectlist";
// import Viewproject from "./Viewproject";
import keyolologo from '../../../public/images/keyolologo.PNG';
import TopContainer from './Topcontainer';
import ButtonContainer from './Buttoncontainer';

class Container extends Component {
  render() {
    return (
      <div className="col10">
        <div>
          <TopContainer />
          <ButtonContainer />
          {/* <Link to="/" >i am from container Dashboard</Link> */}
          {/* <Breadcrumb /> */}
          {/* <Projectlist /> */}
        </div>
      </div>
    );
  }
}

export default Container;
