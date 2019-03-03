import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// ComponentOne is App, ComponentTwo is LoginView
const authenticate = App => LoginView => {
  return _ => {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
      <>{loggedIn ? <App /> : <LoginView />}</> // Hinges on boolean flag
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

// useEffect(async () => {
//   const loginStatus = await AsyncStorage.getItem("token");
//   if (loginStatus) {
//     setLoggedIn(true);
//   } else {
//     return; // Finish building out
//   }
// }, []);
