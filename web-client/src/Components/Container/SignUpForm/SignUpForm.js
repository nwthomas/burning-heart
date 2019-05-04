import React from "react";
import { connect } from "react-redux";

import { Navbar } from "../../Presentational/Navbar";
import InitialSignup from "./InitialSignup";
import DonorSignup from "./DonorSignup";
import { SignUpAccountModal } from "../../Presentational/Modals";
import CharitySignup from "./CharitySignup";

const SignUpForm = ({ history, modalOpen, formPage, accountType }) => {
  return (
    <>
      {modalOpen && <SignUpAccountModal history={history} />}
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
                return <CharitySignup history={history} />;
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
  accountType: state.signupReducer.accountType,
  modalOpen: state.signupReducer.modalOpen
});

export default connect(
  mapStateToProps,
  {}
)(SignUpForm);
