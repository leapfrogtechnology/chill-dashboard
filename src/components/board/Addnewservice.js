// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Addnewservice extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             services: [{ name: '' }],
//         };
//     }
//     handleserviceNameChange = (idx) => (evt) => {
//         const newservices = this.state.services.map((service, sidx) => {
//             if (idx !== sidx) return service;
//             return { ...service, name: evt.target.value };
//         });

//         this.setState({ services: newservices });
//     }

//     handleSubmit = (evt) => {
//         const { name, services } = this.state;
//         alert(`Incorporated: ${name} with ${services.length} services`);
//     }

//     handleAddservice = () => {
//         this.setState({ services: this.state.services.concat([{ name: '' }]) });
//     }

//     handleRemoveservice = (idx) => () => {
//         this.setState({ services: this.state.services.filter((s, sidx) => idx !== sidx) });
//     }

//     render() {
//         return (
//             <div className="content green ">
//                 <h4>Add services</h4>
//                 <form>

//                     {this.state.services.map((service, idx) => (
//                         <div className="service">
//                             <div className="wrap">
//                                 <input
//                                     type="text"
//                                     placeholder={`Service #${idx + 1} `}
//                                     value={service.name}
//                                     onChange={this.handleserviceNameChange(idx)}
//                                 />
//                                 <input
//                                     className="textwrapper"
//                                     type="text"
//                                     placeholder="eg:www.keyelo.com/about"

//                                 />

//                                 <div className="chkbox">
//                                     <form>
//                                         <div className="checkbox">
//                                             <label>
//                                                 <input type="checkbox" value=""/>
//                                                   <span> HTTP</span>
//                                                 </label>
//                                         </div>
//                                          <div className="checkbox">
//                                             <label >
//                                                 <input type="checkbox"  value=""/>
//                                                 TCP
//                                                 </label>
//                                         </div>
//                                    </form>
//                                 </div>

//                                     <button type="button" onClick={this.handleRemoveservice(idx)} className="primary small clearfix">Remove</button>
//                                 </div>    </div>
//                             ))}
//                 </form>

//                         <button type="button" onClick={this.handleAddservice} className="btn btn-primary">Add Service</button>
//                         <button type="button" className="btn btn-primary givemargin">Save</button>

//             </div>
//         )
//     }
// }
// export default Addnewservice;
