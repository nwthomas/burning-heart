import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter as Router, Route } from "react-router-native";
import PropTypes from "prop-types";

import { Login } from "../../Presentational/Login";
import { SignUp } from "../../Presentational/SignUp";
import { ManualLogin } from "../../Presentational/ManualLogin";

const LoginView = ({ setLoggedIn }) => {
  return (
    <Router>
      <View style={styles.container}>
        <Route
          exact
          path="/"
          render={props => <Login {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route
          exact
          path="/manual-login"
          render={props => <ManualLogin {...props} />}
        />
      </View>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  }
});

LoginView.propTypes = {
  setLoggedIn: PropTypes.func
};

export default LoginView;
