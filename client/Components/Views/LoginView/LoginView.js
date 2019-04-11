import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter as Router, Route } from "react-router-native";
import PropTypes from "prop-types";

import { SignIn } from "../../Presentational/SignIn";
import { SignUp } from "../../Presentational/SignUp";
import { ManualSignIn } from "../../Presentational/ManualSignIn";

const LoginView = ({ setLoggedIn }) => {
  return (
    <Router>
      <View style={styles.container}>
        <Route
          exact
          path="/"
          render={props => <SignIn {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route
          exact
          path="/manual-sign-in"
          render={props => <ManualSignIn {...props} />}
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
