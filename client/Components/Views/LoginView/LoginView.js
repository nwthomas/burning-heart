import React from "react";
import PropTypes from "prop-types";

import { Login } from "../../Presentational/Login";

const LoginView = props => {
  return (
    <>
      <Login setLoggedIn={props.setLoggedIn} />
    </>
  );
};

LoginView.propTypes = {
  setLoggedIn: PropTypes.func
};

export default LoginView;
