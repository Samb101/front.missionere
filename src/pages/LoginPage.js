import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
  login = () => {
    axios.post('/api/authenticate', {
      username:'jeff',
      password:'jeff'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("Erreur", error);
      });
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal" role="form" method="POST" action="/login">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h2>Please Login</h2>
              <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="form-group has-danger">
                  <label className="sr-only" htmlFor="username">E-Mail Address</label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-at"></i></div>
                    <input type="text" name="username" className="form-control" id="username"
                      placeholder="you@example.com" />
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-control-feedback">
                    <span className="text-danger align-middle">
                      <i className="fa fa-close"></i> Example error message
                      </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="password">Password</label>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon"><i className="fa fa-key"></i></div>
                      <input type="password" name="password" className="form-control" id="password"
                        placeholder="Password"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-control-feedback">
                      <span className="text-danger align-middle">
                        Put password error message here
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="form-check mb-2 mr-sm-2 mb-sm-0">
                      <label className="form-check-label">
                        <input className="form-check-input" name="remember"
                          type="checkbox" />
                          <span>Remember me</span>
                      </label>
                  </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-success" onClick={()=>this.login()}><i className="fa fa-sign-in"></i> Login</button>
                      <a className="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                    </div>
                  </div>
                </form>
              </div>
              );
  }
}

export default LoginPage;
