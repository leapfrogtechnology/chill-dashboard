import React, { Component } from "react";
import keyolologo from "../../../public/images/keyolologo1.png";
import checklogo from "../../../public/images/logocheck.png";

import { Link } from "react-router-dom";

class Projectlist extends Component {
  render() {
    return (
      <div>
        {this.props.projectlist.map(allproject => {
          return (
            <div>
              <div key={allproject.id}>
                <ul>
                  <li>{allproject.name}</li>
                </ul>
              </div>

              {/* <div className="col-lg-2 col-sm-6">
                <div className="circle-tile">
                  <a href="#">
                    <div className="circle-tile-heading green">
                      <i className="fa fa-money fa-fw fa-3x" />
                    </div>
                  </a>
                  <div className="circle-tile-content green">
                    <div className="circle-tile-description text-faded">
                      Drop Box
                    </div>
                    <div className="circle-tile-number text-faded">5</div>
                    <a href="#" className="circle-tile-footer">
                      View Services <i className="fa fa-chevron-circle-right" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Projectlist;
