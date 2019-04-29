import React, { Component } from "react";
import { connect } from "react-redux";

import { Navbar } from "../../Presentational/Navbar";
import { authenticate } from "../../Container/authenticate";
import { LoginModal } from "../../Presentational/Modals";

const DisplayedComponent = authenticate;

export class WebClient extends Component {
  render() {
    return (
      <>
        {this.props.modalOpen && <LoginModal history={this.props.history} />}
        <Navbar />
        <DisplayedComponent history={this.props.history} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.loginReducer.modalOpen
});

export default connect(
  mapStateToProps,
  {}
)(WebClient);
