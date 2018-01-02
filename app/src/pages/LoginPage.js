import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {

  login = () => {
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (

    );
  }
}

export default LoginPage;
