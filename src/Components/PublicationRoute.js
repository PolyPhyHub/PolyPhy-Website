import { Grid } from "@mui/material";
import PubCard from "./PubCard";
import React from "react";
import { case_studies } from "../Constants/case_studies";

const PublicationRoute = () => {
  return (
    <div className="publication-route-wrapper">
      <h1>Publications and Case Studies</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={6}>
          {case_studies.map((item) => {
            return <PubCard pub={item} key={item.image} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PublicationRoute;
