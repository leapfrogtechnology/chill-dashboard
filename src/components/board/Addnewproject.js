import React, { Component } from 'react';
// import Addnewservice from './Addnewservice';
import { Link } from 'react-router-dom';

class Addnewproject extends Component {
    constructor() {
        super();
        this.state = {
            first: true,
            name: '',
            services: [{ name: '' }],
        };
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }



    render() {
        return (
            <div className="content green">
                <h4>Add Project</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter project"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <h4>Project Description</h4>
                    <div className="floatl">
                        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="enter project description">
                        </textarea>
                    </div>

                    <Link to="/addservice" className="btn btn-primary">Add Service </Link>
                    <div className="clearfix">
                        {/* <h4>Add services</h4>
                    {this.state.services.map((service, idx) => (
                        <div className="service">
                            <input
                                type="text"
                                placeholder={`Service #${idx + 1} `}
                                value={service.name}
                                onChange={this.handleserviceNameChange(idx)}
                            />
                             <Link to="/addproject" className="btn btn-primary">Add Project </Link>

                            <button type="button" onClick={this.handleRemoveservice(idx)} className="small">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={this.handleAddservice} className="small">Add Service</button> */}
                    </div>

                </form>
            </div>

        )
    }
}

export default Addnewproject;