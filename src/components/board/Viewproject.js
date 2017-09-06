// import React, { Component } from 'react';

// import ProjectList from './Projectlist';
// import * as projectServices from '../../services/projectServices';

// class Viewproject extends Component {
//   constructor() {
//     super();
//     this.state = {
//       projects: []
//     };
//   }
//   async componentDidMount() {
//     this.fetchProjects();
//   }

//   async fetchProjects() {
//     try {
//       const projects = await projectServices.fetch();

//       this.setState({
//         projects: projects.data
//       });
//     } catch (err) {
//       // TODO: Show error messages
//     }
//   }
//   // {this.state.projects[0] && this.state.projects[0].id}
//   render() {
//     return (
//       <div className="row yellow">
//         <ProjectList projectlist={this.state.projects} />
//       </div>
//     );
//   }
// }
// export default Viewproject;
