import React from "react";

const ButtonSwipe = (props) => {
  return (
    <a href={props.link}>
      <div className="button-swipe-wrapper">
        <div className="btn btn-1 hover-filled-slide-down">
          <span>{props.children}</span>
        </div>
      </div>
    </a>
  );
};

export default ButtonSwipe;
