import React from "react";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <h3>oh no! it's 404</h3>
      <h4>THIS ADDRESS DOESN'T EXIST, GO BACK?</h4>
      <br />
      <a href={process.env.PUBLIC_URL+"/"} style={{color: "orange", textDecoration: "underline"}}>GO TO HOME</a>
    </div>
  );
};

export default ErrorPage;
