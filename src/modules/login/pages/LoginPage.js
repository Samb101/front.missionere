import React, { Component } from 'react';
import LoginResource from './../LoginResource';

class LoginPage extends Component {
  constructor()  {
    super()
    this.loginResource = new LoginResource()
  }
  
  login = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = 'onsen@fou.fr'
    this.loginResource.login(username, password, email)
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h2>Login</h2>
              <hr />
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
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="sr-only" htmlFor="password">Password</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div className="input-group-addon"><i className="fa fa-key"></i></div>
                  <input type="password" name="password" className="form-control" id="password"
                    placeholder="Password" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <button className="btn btn-success" onClick={() => this.login()}><i className="fa fa-sign-in"></i> Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage
