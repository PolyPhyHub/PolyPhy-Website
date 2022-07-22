import { Grid } from "@mui/material";
import React from "react";
import { case_studies } from "../Constants/case_studies";
import ButtonSwipe from "./ButtonSwipe";
import { PubCardSmall } from "./PubCard";

const Publications = () => {
  return (
    <div className="publications-wrapper">
      <h1>Publications and Case Studies</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          <PubCardSmall pub={case_studies[0]} />
          <PubCardSmall pub={case_studies[1]} />
        </Grid>
      </div>
      <ButtonSwipe link="/publications">Read more {">"}</ButtonSwipe>
    </div>
  );
};

export default Publications;
