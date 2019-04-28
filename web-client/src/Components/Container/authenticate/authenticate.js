import React from "react";
import { connect } from "react-redux";

import { HomeView } from "../../Views/HomeView";
import { LoginForm } from "../../Container/LoginForm";

const authenticate = ({ history, loggedIn }) => {
  return loggedIn ? (
    <HomeView history={history} />
  ) : (
    <LoginForm history={history} />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(authenticate);
