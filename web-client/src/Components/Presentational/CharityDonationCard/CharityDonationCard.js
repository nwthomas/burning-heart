import React from "react";
import { connect } from "react-redux";

const CharityDonationCard = ({ donation }) => {
  return (
    <div className="donation__card">
      <p className="donation__amount">{`$${donation.amount / 100}`}</p>
    </div>
  );
};

export default connect(
  null,
  {}
)(CharityDonationCard);
