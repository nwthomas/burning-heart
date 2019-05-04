import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleLoginForm,
  loginAccount,
  loginCharity
} from "../../../store/actions";

class LoginForm extends Component {
  componentDidMount() {
    this.props.history.push("/home/login");
  }
  goLandingPage = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  handleChange = e => {
    this.props.handleLoginForm(e.target.name, e.target.value);
  };
  loginApp = e => {
    e.preventDefault();
    const creds = {
      username: this.props.username,
      password: this.props.password
    };
    if (this.props.type === "donor") {
      this.props.loginAccount(creds);
    } else {
      this.props.loginCharity(creds);
    }
  };
  render() {
    return (
      <div className="login-form__container">
        <form className="login-form" onSubmit={this.loginApp}>
          <h2 className="login-form__header">Login</h2>
          <input
            className="login__input"
            required
            type="text"
            placeholder="Username"
            id="username"
            autoComplete="off"
            name="username"
            value={this.props.username}
            onChange={this.handleChange}
          />
          <input
            className="login__input"
            required
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
            name="password"
            value={this.props.password}
            onChange={this.handleChange}
          />
          <select
            required
            className="login__select"
            defaultValue=""
            name="accountType"
            placeholder="Select account type"
            onChange={this.handleChange}
          >
            <option disabled value="">
              Select account type
            </option>
            <option value="donor">Donor</option>
            <option value="charity">Charity</option>
          </select>
          <div className="login__buttons">
            <button type="submit" className="login__button">
              Submit
            </button>
            <button
              type="button"
              className="login__button"
              onClick={this.goLandingPage}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.loginReducer.username,
  password: state.loginReducer.password,
  type: state.loginReducer.accountType
});

const mapActionsToProps = {
  handleLoginForm,
  loginAccount,
  loginCharity
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginForm);
