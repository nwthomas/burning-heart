import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// ComponentOne is App, ComponentTwo is LoginView
const authenticate = App => LoginView => {
  return _ => {
    const [loggedIn, setLoggedIn] = useState(true); // Logged in boolean flag hook
    return (
      // Authenticate hinges on boolean flag hook "loggedIn"
      <>{loggedIn ? <App /> : <LoginView setLoggedIn={setLoggedIn} />}</>
    );
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired
};

authenticate.defaultProps = {
  loggedIn: false
};

export default authenticate;
