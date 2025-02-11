import React from "react";
import { View, StyleSheet } from "react-native";
import { Route } from "react-router-native";
import PropTypes from "prop-types";
import { Login } from "../../Presentational/Login";
import { SignUp } from "../../Presentational/SignUp";
import { ManualLogin } from "../../Presentational/ManualLogin";

const LoginView = props => {
  return (
    <View style={styles.container}>
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route exact path="/signup" render={props => <SignUp {...props} />} />
      <Route
        exact
        path="/manual-login"
        render={props => <ManualLogin {...props} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  }
});

LoginView.propTypes = {
  createAccountSuccess: PropTypes.bool,
  createAccountError: PropTypes.bool
};

export default LoginView;
