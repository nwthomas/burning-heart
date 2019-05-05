import React from "react";
import { connect } from "react-redux";

import { Navbar } from "../../Presentational/Navbar";
import InitialSignup from "./InitialSignup";
import DonorSignup from "./DonorSignup";
import { SignUpAccountModal } from "../../Presentational/Modals";
import CharitySignup from "./CharitySignup";
import CharityOwnerSignup from "./CharityOwnerSignup";
import CharityOwnerVerification from "./CharityOwnerVerification";

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
            case 3:
              return <CharityOwnerSignup history={history} />;
            case 4:
              return <CharityOwnerVerification history={history} />;
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
