import React from "react";
import LoadingAnimation from "./LoadingAnimation";

const SignUpModal = props => {
  return (
    <div className="signup-modal__container">
      <section className="modal__box">
        <h2 className="modal__title">
          {props.condition ? "Sending..." : props.message}
        </h2>
        <button className="modal__button">
          {props.condition ? <LoadingAnimation /> : "Okay"}
        </button>
      </section>
    </div>
  );
};

export default SignUpModal;
