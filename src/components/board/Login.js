import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';
import { fetchProjectServices } from '../../services/project';

class Login extends Component {
  responseGoogle = response => {
    fetchProjectServices(response.tokenId);
    this.props.history.push('/projectpanel');
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
Login.propTypes = {
  history: PropTypes.object.isRequired
};
export default withRouter(Login);
