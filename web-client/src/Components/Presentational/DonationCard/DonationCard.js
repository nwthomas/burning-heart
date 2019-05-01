import React from "react";

const DonationCard = props => {
  return (
    <div className="donation__card">
      <p className="donation__title">{props.donation.charityName}</p>
      <p className="donation__amount">{`$${props.donation.amount / 100}`}</p>
    </div>
  );
};

export default DonationCard;
