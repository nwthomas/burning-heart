import React, { Component } from "react";
import { connect } from "react-redux";
import { closeLoginModal } from "../../../store/actions";

import LoadingAnimation from "./LoadingAnimation";

class LoginModal extends Component {
  handleButton = e => {
    e.preventDefault();
    if (this.props.loginStart) {
      return false;
    } else if (this.props.loginSuccess) {
      this.props.closeLoginModal();
      return this.props.history.push("/home");
    } else {
      this.props.closeLoginModal();
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const body = document.querySelector("body");
    body.classList.toggle("stopScroll");
  }

  componentWillUnmount() {
    const body = document.querySelector("body");
    body.classList.toggle("stopScroll");
  }

  render() {
    return (
      <div className="modal__container">
        <div className="modal__box">
          <h2 className="modal__title">
            {this.props.loginStart ? "Logging In" : this.props.message}
          </h2>
          <div className="modal__buttons modal__buttons--center">
            <button className="modal__button" onClick={this.handleButton}>
              {this.props.loginStart ? <LoadingAnimation /> : "Okay"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStart: state.loginReducer.loginStart,
  loginSuccess: state.loginReducer.loginSuccess,
  loginError: state.loginReducer.loginError,
  modalOpen: state.loginReducer.modalOpen,
  message: state.loginReducer.message
});

const mapActionsToProps = {
  closeLoginModal
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginModal);
