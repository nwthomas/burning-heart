import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="loading__container">
      <div className="loading__box">
        <div className="circle circle1" />
      </div>
      <div className="loading__box">
        <div className="circle circle2" />
      </div>
      <div className="loading__box">
        <div className="circle circle3" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
