import React from "react";

const CharityCard = ({ charity }) => {
  return (
    <div className="charity__card">
      <p className="charity__name">{charity.charityName}</p>
    </div>
  );
};

export default CharityCard;
