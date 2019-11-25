import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";

import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      job: "",
      password: "",
      password2: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      job: this.state.job,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <section>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <TextFieldGroup
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <TextFieldGroup
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <TextFieldGroup
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="job">Job</label>
                  <TextFieldGroup
                    name="job"
                    value={this.state.job}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <TextFieldGroup
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <TextFieldGroup
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-block btn-primary themeColorHoverBtn"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Register.propsTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps, { registerUser })(Register);
