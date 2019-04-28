import React from "react";
import { connect } from "react-redux";

import { Navbar } from "../../Presentational/Navbar";
import InitialSignup from "./InitialSignup";
import DonorSignup from "./DonorSignup";

const SignUpForm = ({ history, formPage, accountType }) => {
  return (
    <>
      <Navbar />
      <div className="form-page__container">
        {(function() {
          switch (formPage) {
            case 1:
              return <InitialSignup history={history} />;
            case 2: {
              if (accountType === "donor") {
                return <DonorSignup history={history} />;
              } else {
                return alert("that doesn't work");
              }
            }
            default:
              return <InitialSignup history={history} />;
          }
        })()}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  formPage: state.signupReducer.formPage,
  accountType: state.signupReducer.accountType
});

export default connect(
  mapStateToProps,
  {}
)(SignUpForm);
