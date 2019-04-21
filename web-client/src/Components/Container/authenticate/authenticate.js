import React, { Component } from "react";
import PropTypes from "prop-types";

const authenticate = App => LoginView => {
  return class extends Component {
    render() {
      return !this.props.loggedIn ? <App /> : <LoginView />;
    }
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool
};

authenticate.defaultProps = {
  loggedIn: true
};

export default authenticate;
