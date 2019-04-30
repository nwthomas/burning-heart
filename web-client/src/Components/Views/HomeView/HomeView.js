import React, { Component } from "react";
import { connect } from "react-redux";

class HomeView extends Component {
  render() {
    return <div className="home__container" />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(HomeView);

/*

To Finish:

1. Build out get account by id/username restricted server endpoint for persistent login

2. Create API call on homepage load if token exists and is valid

3. Connect LoggedIn state with API call process along with user type to conditionally load web client home screen for donors/charities

*/
