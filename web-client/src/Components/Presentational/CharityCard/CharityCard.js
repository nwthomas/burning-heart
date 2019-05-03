import React from "react";
import { connect } from "react-redux";
import { selectCharity } from "../../../store/actions";

const CharityCard = ({ charity, selectCharity }) => {
  const handleDonation = e => {
    e.preventDefault();
    selectCharity(charity.id);
  };
  return (
    <div className="charity__card">
      <p className="charity__name">{charity.charityName}</p>
      <button
        className="charity__donate-button"
        type="button"
        onClick={handleDonation}
      >
        Donate
      </button>
    </div>
  );
};

const mapActionsToProps = {
  selectCharity
};

export default connect(
  null,
  mapActionsToProps
)(CharityCard);
