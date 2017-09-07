import React, { Component } from 'react';
import * as projectServices from '../../services/projectServices';

class Addnewproject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      title: '',
      success: 'success',
      description: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let data = {
      name: this.state.title,
      description: this.state.description
    };

    projectServices.add(data);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <div className="content green">
        <h4>Add Project</h4>
        <form>
          <label>
            Project name
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              placeholder="Enter project name"
            />
            Description
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              placeholder="Enter description"
            />
          </label>
          <input type="button" value="Post" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Addnewproject;
