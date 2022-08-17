import { Grid } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "./PubCard";
import React from "react";
import { case_studies } from "../Constants/case_studies";
import useMediaQuery from "@mui/material/useMediaQuery";

const PublicationRoute = () => {
  const small = useMediaQuery("(max-width:1000px)");

  return (
    <div className="publication-route-wrapper">
      <h1>Research and Publications</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {case_studies.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {small ? (
                  <PubCardSmall pub={item} key={item.image} />
                ) : index % 2 === 0 ? (
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
