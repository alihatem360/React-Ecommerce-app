import React, { Component } from "react";
import joi from "joi-browser";
class Login extends Component {
  state = {
    username: "",
    password: "",
    error: {},
  };

  scheme = {
    username: joi.string().required(),
    password: joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validationError();

    if (error) return;
    console.log("submit");
  };

  validationError = () => {
    const error = {};
    const state = { ...this.state };
    delete state.error;
    const result = joi.validate(state, this.scheme, { abortEarly: false });
    if (result.error === null) return null;

    for (const error of result.error.details) {
      error[error.path] = error.message;
    }
    this.setState({ error });
  };

  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  //   handleChangePassword = (e) => {
  //     let password = { ...this.state.password };
  //     password = e.currentTarget.value;
  //     this.setState({ password });
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className=""> hello! login </h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">userNames</label>
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="userName"
              />
              {this.state.error.username && (
                <div className="alert alert-danger" role="alert">
                  {this.state.error.username}
                </div>
              )}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="password"
              />

              {this.state.error.password && (
                <div className="alert alert-danger" role="alert">
                  {this.state.error.password}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
