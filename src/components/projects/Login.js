import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { withRouter, Redirect } from 'react-router-dom';

import { login } from '../../services/authService';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  async responseGoogle(response) {
    let data = await login(response.tokenId);

    if (data) {
      this.setState({
        isAuthenticated: true
      });
    }
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/projectpanel" />;
    }

    return (
      <div>
        <GoogleLogin
          clientId="739933093379-7q3mdd5pec4pj9n8vhpgfpdv7ijqcgtc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />{' '}
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.object.isRequired
};
export default withRouter(Login);
