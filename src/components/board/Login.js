import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GoogleLogin from 'react-google-login';
import {fetchServiceStatuses} from '../../services/status';

class Login extends Component {

  responseGoogle = async (response) => {
    const { tokenId } = response;
    console.log('i am token', tokenId);
    let res = await fetchServiceStatuses(tokenId);
  }

  render() {
    console.log(this.tokenId);

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

export default Login;