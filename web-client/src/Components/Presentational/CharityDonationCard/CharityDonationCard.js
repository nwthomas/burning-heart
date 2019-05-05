import React from "react";

const CharityDonationCard = props => {
  return (
    <div className="donation__card">
      <p className="donation__amount">{`$${props.donation.amount / 100}`}</p>
    </div>
  );
};

export default CharityDonationCard;
