import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Check from './check';
import { fetchProjectServices } from '../../services/project';

class Login extends Component {
  responseGoogle = response => {
    fetchProjectServices(response.tokenId);
    this.props.history.push('/viewproject');
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="739933093379-7q3mdd5pec4pj9n8vhpgfpdv7ijqcgtc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default withRouter(Login);
