import React, { Component } from 'react';
import logoCheck from '../../../public/images/logocheck.png';
import profilepictures from '../../../public/images/chill.png';

class Viewservice extends Component {
    render() {
        return (
            <div className="row yellow" >
                <div class="container">
                    {/* <div class="list-group">
                        <a href="#" class="list-group-item">First item</a>
                        <a href="#" class="list-group-item">Second item</a>
                        <a href="#" class="list-group-item">Third item</a>
                    </div> */}
                    <div className="showservice">
                        <ul>
                            <li>Service 1
                                <button className="floatr"> Edit </button>
                                <button className="floatr"> Delete </button>
                            </li>
                            <li>Service 2
                                 <button className="floatr"> Edit </button>
                                <button className="floatr"> Delete </button>
                            </li>
                            <li>Service 3
                                 <button className="floatr"> Edit </button>
                                <button className="floatr"> Delete </button>
                            </li>
                            <li>Service 4
                                 <button className="floatr"> Edit </button>
                                <button className="floatr"> Delete </button>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}
export default Viewservice;