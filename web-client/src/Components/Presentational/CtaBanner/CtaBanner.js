import React from "react";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <div className="cta__banner">
      <p className="cta__banner__text">
        Burning Heart is a donation app for people who like to give what they
        can, when they can.{" "}
        <Link className="cta__banner__link" to="/signup">
          Sign up here.
        </Link>
      </p>
    </div>
  );
};

export default CtaBanner;
