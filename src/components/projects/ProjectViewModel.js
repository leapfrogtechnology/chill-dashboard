import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as projectServices from '../../services/projectServices';
import ProjectList from './Projectlist';

class ProjectViewModel extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  async componentDidMount() {
    this.fetchProjects();
  }
  async fetchProjects() {
    try {
      const projects = await projectServices.fetch();

      this.setState({
        projects: projects.data
      });
    } catch (err) {
      return err;
    }
  }
  render() {
    return (
      <div>
        <div className="pagetitle">
          Project Overview
          <Link to="/addproject" className="btn btn-primary floatr">
            Add Project
          </Link>
        </div>

        <ProjectList projectlist={this.state.projects} />
      </div>
    );
  }
}
export default ProjectViewModel;
