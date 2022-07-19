import { Grid, Paper } from "@mui/material";
import React from "react";
import { case_studies } from "../Constants/case_studies";
import ButtonSwipe from "./ButtonSwipe";

const Publications = () => {
  return (
    <div className="publications-wrapper">
      <h1>Publications and Case Studies</h1>
      <div className="publications">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper variant="outlined">
              <h2>{case_studies[0].name}</h2>
              <p>
                <i>{case_studies[0].journal}</i>
              </p>
              <img src={case_studies[0].image} alt=""></img>
              <p className="brief">{case_studies[0].brief}</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper variant="outlined">
              <h2>{case_studies[1].name}</h2>
              <p>
                <i>{case_studies[1].journal}</i>
              </p>
              <img src={case_studies[1].image} alt=""></img>
              <p className="brief">{case_studies[1].brief}</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <ButtonSwipe>Read more {'>'}</ButtonSwipe>
    </div>
  );
};

export default Publications;
