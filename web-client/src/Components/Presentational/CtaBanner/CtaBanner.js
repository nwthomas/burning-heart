import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CtaBanner = ({ loggedIn }) => {
  return (
    <div className="cta__banner">
      <p className="cta__banner__text">
        Burning Heart is a donation app for people who like to give what they
        can, when they can.{" "}
        <Link className="cta__banner__link" to={loggedIn ? "/home" : "/signup"}>
          Sign up here.
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(CtaBanner);
