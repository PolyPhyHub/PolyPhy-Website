import React from "react";

const ButtonSwipe = (props) => {
  return (
    <div className="button-swipe-wrapper">
      <div className="btn btn-1 hover-filled-slide-down">
        <span>{props.children}</span>
      </div>
    </div>
  );
};

export default ButtonSwipe;
