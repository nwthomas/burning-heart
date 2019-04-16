import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Store } from "../../store/store";

// ComponentOne is App, ComponentTwo is LoginView
const authenticate = App => LoginView => {
  return _ => {
    const { state } = useContext(Store);
    const { loggedIn } = state;
    console.log(loggedIn);
    return (
      // Authenticate hinges on boolean flag hook "loggedIn"
      <>{loggedIn ? <App /> : <LoginView />}</>
    );
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

authenticate.defaultProps = {
  loggedIn: false
};

export default authenticate;
