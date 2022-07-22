import { Grid } from "@mui/material";
import { PubCardLarge } from "./PubCard";
import React from "react";
import { case_studies } from "../Constants/case_studies";

const PublicationRoute = () => {
  return (
    <div className="publication-route-wrapper">
      <h1>Publications and Case Studies</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={6}>
          {case_studies.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <PubCardLarge pub={item} key={item.image} align={true} />
                ) : (
                  <PubCardLarge pub={item} key={item.image} />
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PublicationRoute;
